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
            <p className="footer-main">
  <a
    href="mailto:dmeshesdesigncrew@gmail.com"
    style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
  >
    dmeshesdesigncrew@gmail.com
  </a>
</p>

<p className="footer-main">
  <a
    href="tel:+919744558880"
    style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
  >
    +91 9744558880
  </a>
</p>


          </div>

          <div>
            <h4>Offices</h4>
            <p>Cochin, India</p>
            <p className="muted">Dubai, UAE</p>
          </div>

          <div>
            <h4>Presence</h4>
            <div className="footer-links">
  <a href="https://www.instagram.com/d_meshes/" target="_blank" style={{display:"flex",alignItems:"center",gap:"8px"}}>
    <i className="fab fa-instagram"></i> Instagram
  </a>

  <a href="https://www.facebook.com/dmeshesdesigncrew" target="_blank" style={{display:"flex",alignItems:"center",gap:"8px"}}>
    <i className="fab fa-facebook"></i> Facebook
  </a>

  <a
    href="https://wa.me/919744558880?text=Hello%20D'Meshes,%20I%20am%20interested%20in%20your%20design%20services.%20Could%20you%20please%20tell%20me%20more%20about%20your%20offerings%20and%20the%20process?"
    target="_blank"
    style={{display:"flex",alignItems:"center",gap:"8px"}}
  >
    <i className="fab fa-whatsapp"></i> WhatsApp
  </a>
</div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 D'MESHES Architectural Studio.</p>
          <p className="italic">Cochin | Dubai</p>
        </div>

      </div>
    </footer>
  );
}
