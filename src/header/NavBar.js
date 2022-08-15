import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarItem,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [showNavColor, setShowNavColor] = useState(false);
  //   const [showHome, setShowHome] = useState(false);
  return (
    <MDBNavbar expand="lg" light bgColor="black">
      <MDBContainer fluid>
        <MDBNavbarBrand className="text-white">
          <span style={{ margin: " 0 30px" }}>
            <i class="fas fa-book-reader" />
          </span>
          Add User Details{" "}
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="text-white"
          onClick={() => setShowNavColor(!showNavColor)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColor} navbar>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink className="navLink">
                <NavLink to="/">
                  <span style={{ marginLeft: "40px" }} variant="dark">
                    <MDBIcon fas icon="home" />
                  </span>
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="navLink">
                <NavLink to="/addUser" className="text-White">
                  Add User
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className="navLink">
                <NavLink to="/aboutUs" className="text-White">
                  About
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
