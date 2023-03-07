/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  onSnapshot,
  
} from "firebase/firestore";
// import { auth } from "@/firebase/firebase";
import { db } from "@/firebase/firebase";

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
            <div className="service-item-con d-flex align-items-center" key={index}>
              <div style={{ marginRight: "30px" }}>
                <img
                  src={item.img}
                  style={{ objectFit: "contain", width: "150px" }}
                  alt="contant"
                />
              </div>
              <div>
                <h1>20 Steel</h1>
                <div className="container-details">
                  <div>
                    <span className="margininfo ">Cubic Capacity</span>
                    <span className="margininfo power">{item.cubic}m</span>
                  </div>
                  <div>
                    <span className="margininfo">Exterior</span>
                    <span className="margininfo" style={{ color: "#6c75a7" }}>
                      Length
                    </span>
                    <span className="margininfo">{item.length}m</span>
                    <span className="margininfo" style={{ color: "#6c75a7" }}>
                      Width
                    </span>
                    <span className="margininfo">{item.width}m</span>
                    <span className="margininfo" style={{ color: "#6c75a7" }}>
                      Height
                    </span>
                    <span className="margininfo">{item.height}m</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 style={{textAlign:"center"}}>Loading...</h1>
      )}
    </div>
  );
};

export default ServicesCom;
