import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Sphere360() {
  const texture = new THREE.TextureLoader().load("/images/image6.jpg");

  return (
    <mesh>
      <sphereGeometry args={[500, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy">
      <div className="container philosophy-grid">

        {/* Left 360 Image */}
        <div className="reveal">
          <div className="philo-image-box">
            <Canvas camera={{ position: [10, 0, 0.1] }}>
  <Sphere360 />
  <OrbitControls
    enableZoom
    enablePan={false}
    minDistance={0.01}
    maxDistance={200}
  />
</Canvas>

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
            <div className="philo-item"><span>01 — Form & Void</span></div>
            <div className="philo-item"><span>02 — Material Truth</span></div>
            <div className="philo-item"><span>03 — Human Scale</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
