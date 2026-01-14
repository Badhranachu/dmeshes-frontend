export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">

        {/* Big Brand */}
        <div className="footer-top reveal">
          <h2 className="brand-font footer-title">d'meshes</h2>
          <div className="footer-divider"></div>
        </div>

        {/* 3 Columns */}
        <div className="footer-grid reveal">
          <div>
            <h4>Collaborate</h4>
            <p className="footer-main">studio@dmeshes.com</p>
            <p className="footer-main">+44 20 7946 0123</p>
          </div>

          <div>
            <h4>Headquarters</h4>
            <p>London, UK</p>
            <p className="muted">12 Bruton Place, Mayfair</p>
          </div>

          <div>
            <h4>Presence</h4>
            <div className="footer-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 D'MESHES Architectural Studio.</p>
          <p className="italic">Est. London / Tokyo / Berlin</p>
        </div>

      </div>
    </footer>
  );
}
