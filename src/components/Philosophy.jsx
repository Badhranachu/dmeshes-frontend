export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container philosophy-grid">
        
        {/* Left Image */}
        <div className="reveal">
          <div className="philo-image-box">
            <img
              src="/images/image1.jpg"
              alt="Studio Interior"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="reveal">
          <span className="philo-subtitle bronze-glow">Philosophy</span>

          <h2 className="brand-font philo-title">
            The Art of <br />
            <span className="italic">Structural Poetry</span>
          </h2>

          <p className="philo-quote">
            "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
          </p>

          <div className="philo-list">
            <div className="philo-item">
              <span>01 — Form & Void</span>
              {/* <span>+</span> */}
            </div>
            <div className="philo-item">
              <span>02 — Material Truth</span>
              {/* <span>+</span> */}
            </div>
            <div className="philo-item">
              <span>03 — Human Scale</span>
              {/* <span>+</span> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
