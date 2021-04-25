import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState("none");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink activeClassName="navbar-brand" to="/">
        My Site
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          setDisplay(display === "none" ? "block" : "none");
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{ display: `${display}` }}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
