import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import productData from "../../Data/productData";
import { Link } from "react-router-dom";


function CatSlider(props) {
  let cat=productData.filter((a)=>a.category==props.tt);
  return (
    <>
      <div className="container py-5">
        <h2>{props.tt}</h2>
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {cat.map((a)=>(
            <div class="item" key={a.id}>
            <div className="product-grid">
  <div className="product-image">
    <a href="#">
      <img className="pic-1" src={a.thumbnail} />
      <img className="pic-2" src={a.thumbnail} />
    </a>
    <ul className="social">
      <li><a href data-tip="Quick View"><i className="fa fa-search" /></a></li>
      <li><a href data-tip="Add to Wishlist"><i className="fa fa-shopping-bag" /></a></li>
      <li><a href data-tip="Add to Cart"><i className="fa fa-shopping-cart" /></a></li>
    </ul>
    <span className="product-new-label">Sale</span>
    <span className="product-discount-label">20%</span>
  </div>
  <ul className="rating">
    <li className="fa fa-star" />
    <li className="fa fa-star" />
    <li className="fa fa-star" />
    <li className="fa fa-star" />
    <li className="fa fa-star disable" />
  </ul>
  <div className="product-content">
    <h3 className="title"><Link to={`/details/${a.id}`}>{a.title}</Link></h3>
    <div className="price">
      <span>${a.price}</span>
    </div>
    <a className="add-to-cart" href>+ Add To Cart</a>
  </div>
</div>

          </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default CatSlider;
