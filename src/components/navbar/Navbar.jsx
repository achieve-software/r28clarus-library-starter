import React, { useState } from "react";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { menuIcon } from "../../helper/iconData";

const Navbar = ({ setCurrentUser, currentUser }) => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="">Clarus Library</Logo>
      <HamburgerIcon onClick={() => setshowMenu(!showMenu)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={showMenu}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {currentUser ? (
          <MenuLink to="/login">Logout</MenuLink>
        ) : (
          <>
            <MenuLink to="/register">Register</MenuLink>
            <MenuLink to="login">Login</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
