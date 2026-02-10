import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";

const images = [
  // Image 1 – Modern tech workspace (perfect hero)
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80",

  // Image 2 – Data center / servers (clean & proportional)
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80",

  // Image 3 – Digital network / technology (stable & wide)
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",

  // Image 4 – Abstract technology background (very safe ratio)
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
];


const Hero = () => {
  const slidesRef = useRef([]);
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      const slides = slidesRef.current;

      // Reset slide positions
      gsap.set(slides, { x: "100%" });
      gsap.set(slides[0], { x: "0%" });

      // Text animation (safe on refresh)
      gsap.from(".hero-content", {
        y: 60,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });

      let index = 0;

      const interval = setInterval(() => {
        const current = slides[index];
        const next = slides[(index + 1) % slides.length];

        gsap.to(current, {
          x: "-100%",
          duration: 1.6,
          ease: "power2.inOut",
        });

        gsap.fromTo(
          next,
          { x: "100%" },
          {
            x: "0%",
            duration: 1.6,
            ease: "power2.inOut",
          }
        );

        index = (index + 1) % slides.length;
      }, 2000);

      // cleanup interval
      return () => clearInterval(interval);
    });

    return () => ctx.current.revert();
  }, []);

  return (
  <section id="home" className="hero">
      <div className="hero-slider">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="hero-slide"
            ref={(el) => (slidesRef.current[i] = el)}
            alt={`hero background ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Consulting & Digital Solutions Provider</h1>
        <p>
          We are a rapidly expanding consulting and digital solutions provider
          focused on improving manufacturing efficiency, sustainability, and
          agility through digitization.
        </p>
        <button className="hero-btn">GET STARTED</button>
      </div>
    </section>
  );
};

export default Hero;
