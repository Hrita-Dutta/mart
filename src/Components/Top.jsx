import React from "react";
import { Container } from "react-bootstrap";

const Top = () => {
  return (
    <section className="top">
      <Container className="text-light">
        <ul className="d-flex gap-4 justify-content-end">
          <li>Track Order</li>
          <li>Login</li>
          <li>Registration</li>
        </ul>
      </Container>
    </section>
  );
};

export default Top;
