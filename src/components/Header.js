import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="home-header">
      <div className="header-container">
        <div className="header-info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div>
            <Link to={"/Meta-Capstone-Project/booking"} className="header-button">Reserve a Table</Link>
          </div>
        </div>
        <div className="header-img"></div>
      </div>
    </header>
  );
}

export default Header;
