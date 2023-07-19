import Logo from "../assets/Logo .svg";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Homepage from "../pages/Homepage";
// import BookingPage from "../pages/BookingPage";

function Nav() {
  const [isActive, setActive] = useState(false);
  const toggleName = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="Logo with yellow lemon"></img>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-mobile">
        <div className="navbar-mobile top">
          <button
            className={isActive ? "hamburger is-active" : "hamburger"}
            onClick={toggleName}
          >
            <div className="bar"></div>
          </button>
          <img src={Logo} alt="Logo with yellow lemon" />
        </div>
        <nav className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
          <Link to="/" onClick={toggleName}>
            Home
          </Link>
          <Link to="/about" onClick={toggleName}>
            About
          </Link>
          <Link to="/" onClick={toggleName}>
            Menu
          </Link>
          <Link to="/reservations" onClick={toggleName}>
            Reservations
          </Link>
          <Link to="/" onClick={toggleName}>
            Order Online
          </Link>
          <Link to="/" onClick={toggleName}>
            Log In
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Nav;
