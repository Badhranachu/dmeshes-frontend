import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();

    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX - 12 + "px";
      cursor.style.top = e.clientY - 12 + "px";
    });
  }, []);

  return (
    <>
      <div className="mesh-background"></div>
      <div id="cursor" className="cursor-follower"></div>
      <Navbar />
      <Hero />
      <Work />
      <Philosophy />
      <Footer />
    </>
  );
}
