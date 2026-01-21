export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        {/* <p className="subtitle bronze-glow reveal">ATELIER OF MODERN LIVING</p> */}
        <p className="subtitle bronze-glow reveal" style={{marginLeft:"7px"}}>12+ YEARS EXCELLENCE</p>

        

        <h1
  className="hero-title reveal"
  style={{
    fontFamily: "'Anton', sans-serif",
    letterSpacing: "0.01em"
  }}
>
  D'MESHES<span className="bronze-glow italic">.</span>
</h1>

  


        <div className="hero-bottom reveal">
          <p className="philo-quote" >
            "Transform ideas into meaningful spaces for 
            <br />
            clients who value quality and clarity."
          </p>

          <a href="#work" className="hero-btn">
            EXPLORE COMMISSIONS →
          </a>
        </div>
      </div>
    </header>
  );
}
