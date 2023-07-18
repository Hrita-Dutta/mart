import React from "react";
import { useParams } from "react-router-dom";
import productData from "../Data/productData";


const Details = () => {
  let {id}=useParams()
  let dt=productData.find((a)=>a.id==id)
  return (
    <div>Details
      <h2>{dt.title}</h2>
      <img src={dt.thumbnail}/>
    </div>
    )
};

export default Details;
