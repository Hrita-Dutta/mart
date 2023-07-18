import React from "react";

const Footer = () => {
  return (
  <>
  <footer className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 text-light">
          <img className="w-100" src="https://durbarmart.com/uploads/logo/PMcxoktzgXYiJy9XHstvewn7X6lIvk329l48sIVF.webp" alt="" />
          <ul>
            <li>Online Shopping In Nepal - Durbarmart.com</li>
            <li>
            Address: Kalanki, kathmandu 
            </li>
            <li> Phone: 9863667252 </li>
            <li> Email: info@durbarmart.com </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h5 className="text-light ps-4">Useful Link</h5>
          <ul>
            <li>Become a vendor</li>
            <li>Warranty</li>
            <li>Full Refund</li>
            <li>Referral</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
          <h5 className="text-light ps-4">My Account</h5>
          <ul>
            <li>Login</li>
            <li>Order History</li>
            <li>My Wishlist</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="col-lg-3 ">
          <h5 className="text-light">News Letter</h5>
          <input className="form-controls" />
          <button className="btn btn-danger mt-3">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>
  </>
    );
};

export default Footer;
