import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {
  window.addEventListener("scroll", () => {
    let header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-navbar">
        <NavLink className="navbar-brand" to="/">
          Movie
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                activeClassName="bg-click"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/home"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-click"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-click"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/register"
              >
                Resgister
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="bg-click"
                activeStyle={{ fontWeight: "bold" }}
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </div>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="my-2 my-sm-0 search" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
