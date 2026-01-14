export default function Navbar() {
  return (
    <nav className="container flex space-between center" style={{padding:"30px 0", position:"fixed", width:"100%", top:0}}>
      <div className="brand-font">D'MESHES</div>
      <div>
        <a href="#work" className="nav-link">Work</a>
        <a href="#philosophy" className="nav-link">Philosophy</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}
