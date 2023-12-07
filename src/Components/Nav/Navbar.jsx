import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import LogosFile from "./LogosFile";
import "./Navbar.css";
import "./Navbar2.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="NavbarHome">
        <div className="logo">
          <h1 className="logo-name">AliBaba.com</h1>
        </div>
        <nav className="nav-container">
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-items"
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "white",
                })}
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/store"
                activeclassname="active"
                className="nav-links"
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "white",
                })}
                onClick={handleClick}
              >
                Store
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Laptops" className="drpdwn-link">
                      Laptop
                    </Link>
                  </li>
                  <li>
                    <Link to="/Watch" className="drpdwn-link">
                      Watch
                    </Link>
                  </li>
                  <li>
                    <Link to="/headphone" className="drpdwn-link">
                      HeadPhone
                    </Link>
                  </li>
                  <li>
                    <Link to="/Keybord" className="drpdwn-link">
                      Keybord
                    </Link>
                  </li>
                  <li>
                    <Link to="/Mouse" className="drpdwn-link">
                      Mouse
                    </Link>
                  </li>
                  <li>
                    <Link to="/Speaker" className="drpdwn-link">
                      Speaker
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <NavLink
                to="/iphone"
                activeclassname="active"
                className="nav-links"
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "white",
                })}
                onClick={handleClick}
              >
                Mobile
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Vivo" className="drpdwn-link">
                      Vivo
                    </Link>
                  </li>
                  <li>
                    <Link to="/Redmi" className="drpdwn-link">
                      Redmi
                    </Link>
                  </li>
                  <li>
                    <Link to="/Oneplus" className="drpdwn-link">
                      OnePlus
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <NavLink
                to="/lap"
                activeclassname="active"
                className="nav-links"
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "white",
                })}
                onClick={handleClick}
              >
                Computer
              </NavLink>
              <div className="dropdown-list">
                <ul className="list">
                  <li>
                    <Link to="/Lenovo" className="drpdwn-link">
                      Lenovo
                    </Link>
                  </li>
                  <li>
                    <Link to="/Macbook" className="drpdwn-link">
                      Macbook
                    </Link>
                  </li>
                  <li>
                    <Link to="/Dell" className="drpdwn-link">
                      Dell
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <LogosFile />
      </div>
    </>
  );
};

export default Navbar;
