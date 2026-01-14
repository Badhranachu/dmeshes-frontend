export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="work-header reveal">
          <h2 className="work-title">
            Living <br /><span className="italic bronze-glow">Narratives</span>
          </h2>

          <div className="work-meta">
            <span>Archive 2024</span>
            <span className="line"></span>
            <span>Vol. 01</span>
          </div>
        </div>

        <div className="grid-2 work-grid">
          
          {/* Project 1 */}
          <div className="project-card reveal">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Skyscraper"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">01 — Concrete & Glass</span>
            <h3 className="brand-font">The Monolith</h3>
            <p className="location">Berlin / Residential</p>
          </div>

          {/* Project 2 */}
          <div className="project-card reveal offset">
            <div className="image-box">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Villa"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">02 — Natural Elements</span>
            <h3 className="brand-font">Void House</h3>
            <p className="location">Kyoto / Villa</p>
          </div>

        </div>
      </div>
    </section>
  );
}
