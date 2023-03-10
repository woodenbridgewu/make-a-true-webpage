import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Options from "../components/Options";

function CartRoot() {
  return (
    <>
      <Container>
        <Navbar />
        <Options />
        <Outlet />
      </Container>
    </>
  );
}

export default CartRoot;
