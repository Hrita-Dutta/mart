import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.webp";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Details from "../Pages/Details";

const Header = () => {
  return (
    <>
      <header className="border-bottom pb-3">
        <Container>
          <Row>
            <Col lg={2}>
              <img className="w-100" src={logo} alt="" />
            </Col>
            <Col lg={6} className="mx-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-danger" type="submit">
                  Search
                </button>
              </form>
            </Col>
            <Col lg={2} className="text-lg-end">
            <button type="button" className="btn btn-transparent position-relative">
            <i class="bi bi-repeat"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            <button type="button" className="btn btn-transparent position-relative">
            <i class="bi bi-heart"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            <button type="button" className="btn btn-transparent position-relative">
            <i class="bi bi-cart"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>

            </Col>
          </Row>
        </Container>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cat/:cid" element={<Category/>}/>
        <Route path="/details/:id/" element={<Details/>}/>
      </Routes>
    </>
  );
};

export default Header;
