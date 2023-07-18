import React from "react";
import catData from "../../Data/catData";
import { Link } from "react-router-dom";

function CatList() {
  return (
    <div className="col-lg-3">
      <ul className="list-group">
        <li className="list-group-item  bg-secondary" aria-current="true">
          <i className="bi bi-list"></i> Category
        </li>
        {catData.map((a)=>(
          <li className="list-group-item" key={a.id}>
            <Link to={`/cat/${a.catName}`}>
            {a.catName}</Link></li>
            
        ))}
      </ul>
    </div>
  );
}

export default CatList;
