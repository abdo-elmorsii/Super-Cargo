/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
// import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useRouter } from "next/router";
import { mcontext } from "@/context/context";
const ServicesCom = () => {
  const [mydata, setmydata] = useState([]);
  const { user } = useContext(mcontext);
  const router = useRouter();

  console.log(user);
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
  }, []);
  return (
    <div className="services-container">
      <button
        onClick={() => {
          router.push("/admin")
        }}
        className="btn btn-dark"
        style={{fontSize:"20px",marginBottom:"30px"}}
      >
        Admin Page
      </button>
      {mydata.length > 0 ? (
        mydata.map((item, index) => {
          return (
            <div
              className="service-item-con d-flex align-items-center"
              key={index}
            >
              <div style={{ marginRight: "30px" }}>
                <img
                  src={item.img}
                  style={{ objectFit: "contain", width: "90px" }}
                  alt="contant"
                />
              </div>
              <div>
                <h1>{item.title}</h1>
                <div className="container-details">
                  <div style={{ display: "flex" }}>
                    <h6 className="margininfo " style={{ color: "#6c75a7" }}>
                      Cubic Capacity
                    </h6>
                    <h6 className="margininfo power">{item.cubic}m</h6>
                  </div>
                  <div className="con-info">
                    <div>
                      <span className="margininfo" style={{ color: "#6c75a7" }}>
                        Length
                      </span>
                      <span className="margininfo">{item.length}m</span>
                    </div>
                    <div>
                      <span className="margininfo" style={{ color: "#6c75a7" }}>
                        Width
                      </span>
                      <span className="margininfo">{item.width}m</span>
                    </div>
                    <div>
                      <span className="margininfo" style={{ color: "#6c75a7" }}>
                        Height
                      </span>
                      <span className="margininfo">{item.height}m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton style={{ height: "15vh" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton style={{ height: "15vh" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton style={{ height: "15vh" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton style={{ height: "15vh" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCom;
