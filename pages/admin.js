/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { mcontext } from "@/context/context";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { db } from "@/firebase/firebase";
// import Table from "react-bootstrap/Table";
import {
  ref,
  
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/firebase/firebase";
import {
  query,
  collection,
  onSnapshot,

  addDoc,
} from "firebase/firestore";

import Table1 from "@/components/Table";


const Admin = () => {
  const [upload, setuploadimage] = useState(null);
  const [mydata, setmydata] = useState([]);
  const [myimage, setimage] = useState("");
  const { setuser, user } = useContext(mcontext);
  const [data, setdata] = useState({
    height: "",
    width: "",
    length: "",
    cubic: "",
  });

  const uploadd = (e) => {
    setimage(e.target.files[0]);
    const imageFiles = e.target.files;
    const imageSrc = URL.createObjectURL(imageFiles[0]);
    setuploadimage(imageSrc);
  };
  const addinfo = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const imageRef = ref(storage, "images/");

  // console.log(myimage);

  const createdata = async (e) => {
    e.preventDefault();
    if (
      +data.height <= 0 ||
      +data.length <= 0 ||
      data.height <= 0 ||
      data.height <= 0
    ) {
    } else {
      const imageref = ref(storage, `images/${myimage.name + v4()}`);
      uploadBytesResumable(imageref, myimage).then(async (snapshot) => {
        await getDownloadURL(snapshot.ref).then(async (url) => {
          await addDoc(collection(db, "data"), {
            height: +data.height,
            width: +data.width,
            length: +data.length,
            cubic: +data.cubic,
            img: url,
          });
        });
      });
    }
  };

  useEffect(() => {
    const q = query(collection(db, "data"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let dataarr = [];
      querySnapshot.forEach((doc, index) => {
        dataarr.push({ ...doc.data(), id: doc.id[index] });
      });
      setmydata([...dataarr]);
      console.log(mydata);
    });
  }, [mydata]);

  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        setuser(user1);
      } else Router.push("login");
    });
  }, [Router, setuser]);
  const Router = useRouter();
  const out = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setuser(null);
      });
  };
  return (
    <div>
      {!user ? (
        "Loading"
      ) : (
        <div>
          <h2>Admin Page</h2>
          <button type="button" className="btn btn-outline-dark" onClick={out}>
            signout
          </button>
          {/* {myimages.map((item) => {
            return (
              <div>
                <img src={item} />
              </div>
            );
          })} */}
          <img src={upload}  alt="user"/>
          <form onSubmit={createdata}>
            <input
              type="file"
              placeholder="Add image"
              onChange={(e) => {
                uploadd(e);
              }}
            />{" "}
            <label>Height:</label>
            <input
              onChange={(e) => {
                addinfo(e);
              }}
              name="height"
              required={true}
            />
            <label>Length:</label>
            <input
              onChange={(e) => {
                addinfo(e);
              }}
              name="length"
              required={true}
            />
            <label>Width:</label>
            <input
              onChange={(e) => {
                addinfo(e);
              }}
              name="width"
              required={true}
            />{" "}
            <label>Cubic</label>
            <input
              onChange={(e) => {
                addinfo(e);
              }}
              name="cubic"
              required
            />
            <button type="submit">Add data to firebase</button>
          </form>
          <Table1 arr={mydata} />
        </div>
      )}
    </div>
  );
};
export default Admin;
