import Logo from "../assets/green logo 2.png";
function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="green and white logo"></img>
      <div>
        <h3 className="section-title">Doormat Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="/">Address</a>
          </li>
          <li>
            <a href="/">Phone Number</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a href="/">Social 1</a>
          </li>
          <li>
            <a href="/">Social 2</a>
          </li>
          <li>
            <a href="/">Social 3</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
