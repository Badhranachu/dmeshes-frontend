export default function Navbar() {
  return (
    <nav className="fixed-nav">
      <div className="container flex justify-between items-center">
        <div className="brand-font logo">D'MESHES</div>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#philosophy" className="nav-link">Philosophy</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}
