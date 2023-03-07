/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { mcontext } from "@/context/context";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { db } from "@/firebase/firebase";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "@/firebase/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

import Table1 from "@/components/Table";
import { Button, Col, Container, Row } from "react-bootstrap";
const Admin = () => {
  const [upload, setuploadimage] = useState(null);
  const [mydata, setmydata] = useState([]);
  const [myimage, setimage] = useState("");
  const Router = useRouter();
  const { setuser, user } = useContext(mcontext);
  const [data, setdata] = useState({
    height: "",
    width: "",
    length: "",
    cubic: "",
    title: "",
  });

  const deletefun = async (ids) => {
    const newarr = mydata.filter((item) => {
      return item.id !== ids;
    });
    setmydata([...newarr]);
    await deleteDoc(doc(db, "data", ids));
  };

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

  const getProducts = async () => {
    try {
      const docSnap = await getDocs(collection(db, "data"));

      console.log(
        "items",
        docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setmydata(docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (e) {
      console.log("get errors:", e);
    }
  };
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
            title: data.title,
          });
          getProducts();
        });
      });
    }
  };

  // });
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(mydata);

  
  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        setuser(user1);
      } else Router.push("login");
    });
  }, [Router, setuser]);
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
        <Container style={{ marginTop: "20px" }}>
          <h2 style={{ textAlign: "center" }}>Admin Page</h2>
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
          <img src={upload} alt="upload" />
          <Row>
            <Col sm={8} lg={4} md={6} style={{ margin: "auto" }} xs={8}>
              {" "}
              <form onSubmit={createdata}>
                <div className="formdataa">
                  <input
                    type="file"
                    placeholder="Add image"
                    onChange={(e) => {
                      uploadd(e);
                    }}
                  />{" "}
                  <label>Title:</label>
                  <input
                    onChange={(e) => {
                      addinfo(e);
                    }}
                    name="title"
                    required={true}
                    type="text"
                  />
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
                  <Button
                    type="submit"
                    variant="dark"
                    style={{ marginTop: "10px" }}
                  >
                    Add data
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
          <Table1 arr={mydata} deletefun={deletefun} />
        </Container>
      )}
    </div>
  );
};
export default Admin;
