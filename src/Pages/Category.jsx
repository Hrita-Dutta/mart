import React from "react";
import productData from "../Data/productData";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  let {cid}=useParams()
  let cat=productData.filter((a)=>a.category==cid)
  return (
    <div className="container">
      <h3 className="py-5">Category</h3>
      <div className="row">
        {cat.map((a)=>(
          <div className="col-lg-3" key={a.id}>
            <img src={a.thumbnail} className="w-100"/>
            <h3>
              <Link to={`/details/${a.id}`}>
              {a.title}
              </Link>
              </h3>
            </div>
        ))}
      </div>
    </div>
    
  )
};

export default Category;
