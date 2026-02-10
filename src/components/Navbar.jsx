import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <a href="#home" className="logo">
        MESmeRise
      </a>

      {/* LINKS */}
      <ul className="nav-links">
        <li>
          <a href="#home" className="active">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* BUTTON */}
      <a href="#contact" className="nav-btn">
        ENQUIRE US
      </a>
    </nav>
  );
};

export default Navbar;
