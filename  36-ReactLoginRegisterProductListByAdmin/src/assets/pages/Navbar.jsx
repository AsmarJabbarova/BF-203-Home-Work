import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
// import Basket from "../Main Page/Basket/Basket";
import { FaUserAlt } from "react-icons/fa";
// import { toast } from "react-toastify";

function Navbar() {
  const active = JSON.parse(sessionStorage.getItem("userlogin"));

  const logoutHandler = () => {
    window.localStorage.removeItem("user");
    // sessionStorage.setItem('userlogin',JSON.stringify(false))
    window.location.reload();

    // toast("You are logged out");
  };

  let userWish = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>
        <div className="navbar1">
          <div className="top-navbar">
            <Container>
              <Row>
                <Col sm={6}>
                  <div className="logo">
                    <Link to={"/"}>
                      <img src="https://static.vecteezy.com/system/resources/previews/016/725/986/original/aesthetic-sticker-cute-whale-logo-symbol-collection-png.png" />
                    </Link>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="icons">
                    <ul>
                      {userWish ? (
                        <li>
                          <Link to={"product"}>My Products</Link>
                        </li>
                      ) : (
                        <li></li>
                      )}

                      <li>
                        <Link to={"wishList"}>
                          <AiOutlineHeart />
                          <sup className="fav">
                            <span></span>
                          </sup>
                        </Link>
                      </li>
                      <li>
                        <Link to={"basket"}>
                          <BsBag />
                          <sup className="basket">
                            <span>0</span>
                          </sup>
                        </Link>
                      </li>
                      <li>
                        <div className="login-panel">
                          {userWish ? (
                            <div>
                              <FaUserAlt />

                              <Link to={"login"} className="user">
                                <NavDropdown
                                  id="nav-dropdown-dark-example"
                                  title={userWish.name}
                                  menuVariant="dark"
                                >
                                  <NavDropdown.Item onClick={logoutHandler}>
                                    Log Out
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </Link>
                            </div>
                          ) : (
                            <Link to={"login"}> Log In </Link>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
