import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "./philosophy.css"
import { useState } from "react";


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

  const data = [
  { title: "01 — Our Services", content: "Photorealistic 3D Rendering, Interior & Architectural Visualization, 360° Views, Walkthroughs, 3D Floor Plans." },
  { title: "02 — Our Approach", content: "Design-driven visualization with focus on spatial accuracy, lighting realism, and material detailing." },
  { title: "03 — Why Choose Us", content: "International quality, over a decade of experience, precision, realism, and reduced design revisions." },
  { title: "04 — About Us", content: "D’MESHES is an interior & architectural 3D visualization studio established in 2012, serving India, UAE, and UK." }
];

    const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="philosophy" className="section philosophy">
      <div className="container philosophy-grid">
        
        

        {/* Left 360 Image */}
        <div className="reveal">

  <span className="philo-subtitle bronze-glow">Scroll to explore the 360° view.</span>

  <div className="philo-image-box sphere-holder">
    <Canvas camera={{ position: [10, 0, 0.1] }}>
  <Sphere360 />
  <OrbitControls
    autoRotate
    autoRotateSpeed={0.5}   // adjust speed
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

          <div className="philo-list1">
  {data.map((item, index) => (
    <div className={`philo-item ${openIndex === index ? "open" : ""}`} key={index}>
      <div
        className="philo-header"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <span>{item.title}</span> 
        <span className={`arrow ${openIndex === index ? "open" : ""}`}>▽</span>
      </div>

      <div className="philo-content">
        {openIndex === index && item.content}
      </div>
    </div>
  ))}
</div>

        </div>

      </div>
    </section>
  );
}
