import Logo from "../assets/Logo .svg";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Main from "./Main";
import BookingPage from "../pages/BookingPage";

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link href="/">Order Online</Link>
          </li>
          <li>
            <Link href="/">Log In</Link>
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
          <Link href="/" onClick={toggleName}>
            Menu
          </Link>
          <Link to="/reservations" onClick={toggleName}>
            Reservations
          </Link>
          <Link href="/" onClick={toggleName}>
            Order Online
          </Link>
          <Link href="/" onClick={toggleName}>
            Log In
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default Nav;
