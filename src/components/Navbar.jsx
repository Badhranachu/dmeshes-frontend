import { useEffect, useState } from "react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);   // scrolling down → hide
      } else {
        setHidden(false);  // scrolling up → show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed-nav ${hidden ? "nav-hide" : ""}`}>
      <div className="container flex justify-between items-center">
        <div
          className="brand-font logo"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          D'MESHES
        </div>

        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a href="#philosophy" className="nav-link">Philosophy</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}
