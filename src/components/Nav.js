import Logo from "../assets/Logo .svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isActive, setActive] = useState(false);
  const toggleName = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/Meta-Capstone-Project" aria-label="Go to Homepage">
          <img src={Logo} alt="Logo with yellow lemon"></img>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/Meta-Capstone-Project">Home</Link>
          </li>
          <li>
            <Link to="/Meta-Capstone-Project/about">About</Link>
          </li>
          <li>
            <Link to="/Meta-Capstone-Project/menu">Menu</Link>
          </li>
          <li>
            <Link to="/Meta-Capstone-Project/booking">Booking</Link>
          </li>
          <li>
            <Link to="/Meta-Capstone-Project">Order Online</Link>
          </li>
          <li>
            <Link to="/Meta-Capstone-Project">Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-mobile">
        <div className="navbar-mobile top">
          <button
            className={isActive ? "hamburger is-active" : "hamburger"}
            onClick={toggleName}
            aria-label="hamburger menu button"
          >
            <div className="bar"></div>
          </button>
          <Link to="/Meta-Capstone-Project" onClick={isActive ? toggleName : null}>
            <img src={Logo} alt="Logo with yellow lemon" />
          </Link>
        </div>
        <nav className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
          <Link to="/Meta-Capstone-Project" onClick={toggleName}>
            Home
          </Link>
          <Link to="/Meta-Capstone-Project/about" onClick={toggleName}>
            About
          </Link>
          <Link to="/Meta-Capstone-Project/menu" onClick={toggleName}>
            Menu
          </Link>
          <Link to="/Meta-Capstone-Project/booking" onClick={toggleName}>
            Booking
          </Link>
          <Link to="/Meta-Capstone-Project" onClick={toggleName}>
            Order Online
          </Link>
          <Link to="/Meta-Capstone-Project" onClick={toggleName}>
            Log In
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
