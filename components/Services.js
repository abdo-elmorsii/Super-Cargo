/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
// import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ServicesCom = () => {
  const [mydata, setmydata] = useState([]);
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
  return (
    <div className="services-container">
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
            <Skeleton count={4} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton count={4} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton count={4} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Skeleton count={4} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCom;
