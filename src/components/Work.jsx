import "./work.css"

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="work-header reveal">
          <h2 className="work-title">
            Living <br /><span className="italic bronze-glow">Narratives</span>
          </h2>

          {/* <div className="work-meta">
            <span>Archive 2024</span>
            <span className="line"></span>
            <span>Vol. 01</span>
          </div> */}
        </div>
        <div className="project-card reveal offset">
    <div
      className="image-box"
      style={{
        width: "100%",
        aspectRatio: "21 / 9",   // cinematic ratio
        overflow: "hidden"
      }}
    >
      <img
  src="/images/image9.jpg"
  alt="Luxury Villa"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center bottom"  // shows bottom part, hides top
  }}
/>

      <div className="image-overlay"></div>
    </div>

    <span className="tag bronze-glow">01 —  Urban Residence</span>
    <h3 className="brand-font1">Urban Luxury Residence</h3>
    <p className="location">Thrissur, Kerala</p>
  </div>

  

  <div className="project-card reveal offset">
    <div
      className="image-box"
      style={{
        width: "100%",
        aspectRatio: "21 / 9",   // cinematic ratio
        overflow: "hidden"
      }}
    >
      <img
        src="/images/image2.jpg"
        alt="Luxury Villa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      <div className="image-overlay"></div>
    </div>

    <span className="tag bronze-glow">02 — 02 — Luxury Residence</span>
    <h3 className="brand-font1">Palace-Inspired Interior
</h3>
    <p className="location">Calicut, Kerala</p>
  </div>

  <div className="project-card reveal offset">
    <div
      className="image-box"
      style={{
        width: "100%",
        aspectRatio: "21 / 9",   // cinematic ratio
        overflow: "hidden"
      }}
    >
      <img
        src="/images/image10.jpg"
        alt="Luxury Villa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      <div className="image-overlay"></div>
    </div>

    <span className="tag bronze-glow">03 — Residential Architecture</span>
    <h3 className="brand-font1">Nature-Integrated Home</h3>
    <p className="location">Kottayam, Kerala</p>
  </div>


<div className="project-card reveal offset">
    <div
      className="image-box"
      style={{
        width: "100%",
        aspectRatio: "21 / 9",   // cinematic ratio
        overflow: "hidden"
      }}
    >
      <img
        src="/images/image5.jpg"
        alt="Luxury Villa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
      <div className="image-overlay"></div>
    </div>

    <span className="tag bronze-glow">04 — Restaurant Interior</span>
    <h3 className="brand-font1">Modern Arabic Dining Space</h3>
    <p className="location">DUBAI / UAE</p>
  </div>
        <div className="grid-2 work-grid">
          
          
          {/* Project 1 */}
          <div className="project-card reveal">
            <div className="image-box">
              <img
                src="/images/image11.jpg"
                alt="Modern Skyscraper"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">05 — Arrival Experience</span>
            <h3 className="brand-font1">Premium Hotel Entrance</h3>
            <p className="location">RAS AL KHAIMAH / UAE</p>
          </div>

          {/* Project 2 */}
          <div className="project-card reveal offset">
            <div className="image-box">
              <img
                src="/images/image12.jpg"
                alt="Luxury Villa"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">06 — Urban Residence</span>
            <h3 className="brand-font1">Residential Concept</h3>
            <p className="location">COCHIN / KERALA</p>
          </div>

        </div>

        <div className="grid-2 work-grid">
          
          {/* Project 3 */}
          <div className="project-card reveal">
            <div className="image-box">
              <img
                src="/images/image3.jpg"
                alt="Modern Skyscraper"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">07 — Modular Kitchen</span>
            <h3 className="brand-font1">Kitchen Interior Concept</h3>
            <p className="location">DUBAI / UAE</p>
          </div>

          {/* Project 4 */}
          <div className="project-card reveal offset">
            <div className="image-box">
              <img
                src="/images/image18.jpg"
                alt="Luxury Villa"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">08 — Automotive Studio</span>
            <h3 className="brand-font1">Premium Showroom Interior</h3>
            <p className="location">COCHIN / KERALA</p>
          </div>

        </div>

        <div className="grid-2 work-grid">
          
          {/* Project 5 */}
          <div className="project-card reveal">
            <div className="image-box">
              <img
                src="/images/image1.jpg"
                alt="Modern Skyscraper"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">05 — Washroom Interior</span>
            <h3 className="brand-font1">Contemporary Bathroom Concept</h3>
            <p className="location">DUBAI / UAE</p>
          </div>

          {/* Project 6 */}
          <div className="project-card reveal offset">
            <div className="image-box">
              <img
                src="/images/image15.jpg"
                alt="Luxury Villa"
                
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">06 — Hotel Lobby</span>
            <h3 className="brand-font1">Luxury Lobby & Reception</h3>
            <p className="location">DUBAI / UAE</p>
          </div>

        </div>


        <div className="grid-2 work-grid">
          
          {/* Project 7 */}
          <div className="project-card reveal">
            <div className="image-box">
              <img
                src="/images/image17.jpg"
                alt="Modern Skyscraper"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">07 — Corporate Reception</span>
            <h3 className="brand-font1">Office Interior Concept</h3>
            <p className="location">DUBAI / UAE</p>
          </div>

          {/* Project 8 */}
          <div className="project-card reveal offset">
            <div className="image-box">
              <img
                src="/images/image16.jpg"
                alt="Luxury Villa"
              />
              <div className="image-overlay"></div>
            </div>

            <span className="tag bronze-glow">08 — Waiting Lounge</span>
            <h3 className="brand-font1">Luxury Hotel Lounge</h3>
            <p className="location">DUBAI / UAE</p>
          </div>

        </div>

        <div>
  



  



  



  


  



</div>



      </div>
    </section>
  );
}
