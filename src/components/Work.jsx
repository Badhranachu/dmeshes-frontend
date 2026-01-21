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

    <span className="tag bronze-glow">02 — Urban luxury residence</span>
    <h3 className="brand-font1">A refined modern home defined by bold geometry, natural textures, and seamless indoor–outdoor connection</h3>
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

    <span className="tag bronze-glow">02 — Palace-inspired luxury residence</span>
    <h3 className="brand-font1">Grand residential interior inspired by palace architecture, featuring classical columns, ornate detailing, and symmetrical planning</h3>
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

    <span className="tag bronze-glow">02 — Nature-integrated residence</span>
    <h3 className="brand-font1">A serene, nature-friendly home designed to coexist with its landscape
</h3>
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

    <span className="tag bronze-glow">02 — Modern Arabic restaurant interior</span>
    <h3 className="brand-font1"> Designed with a focus on ambient lighting, cultural motifs, and a refined dining atmosphere.</h3>
    <p className="location">Dubai</p>
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

            <span className="tag bronze-glow">01 — Premium Hotel Arrival Experience</span>
            <h3 className="brand-font1">The Monolith</h3>
            <p className="location">Ras Al Khaimah, UAE</p>
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

            <span className="tag bronze-glow">02 — Natural Elements</span>
            <h3 className="brand-font1">Void House</h3>
            <p className="location">Kyoto / Villa</p>
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

            <span className="tag bronze-glow">01 — Concrete & Glass</span>
            <h3 className="brand-font1">The Monolith</h3>
            <p className="location">Berlin / Residential</p>
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

            <span className="tag bronze-glow">02 — Natural Elements</span>
            <h3 className="brand-font1">Void House</h3>
            <p className="location">Kyoto / Villa</p>
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

            <span className="tag bronze-glow">01 — Concrete & Glass</span>
            <h3 className="brand-font1">The Monolith</h3>
            <p className="location">Berlin / Residential</p>
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

            <span className="tag bronze-glow">02 — Natural Elements</span>
            <h3 className="brand-font1">Void House</h3>
            <p className="location">Kyoto / Villa</p>
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

            <span className="tag bronze-glow">01 — Concrete & Glass</span>
            <h3 className="brand-font1">The Monolith</h3>
            <p className="location">Berlin / Residential</p>
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

            <span className="tag bronze-glow">02 — Natural Elements</span>
            <h3 className="brand-font1">Void House</h3>
            <p className="location">Kyoto / Villa</p>
          </div>

        </div>

        <div>
  



  



  



  


  



</div>



      </div>
    </section>
  );
}
