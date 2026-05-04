import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Tausif Ullah</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
      </nav>
    </header>
  );
}

export default Navbar;