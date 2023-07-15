import React from "react";
import { Link } from "react-router-dom";
import { SlBag } from "react-icons/sl";
//< SlBag />
const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>
          <span className="logo"> Liceria </span>{" "}
        </h1>
      </div>
      <ul className="nav-items">
        <Link style={{ textDecoration: "none" }} to="/">
          {" "}
          <li>Home</li>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/products">
          {" "}
          <li>Shop </li>{" "}
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          {" "}
          <li> Contact </li>{" "}
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
