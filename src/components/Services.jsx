import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="services-grid">
        <div className="service-card">Software Development</div>
        <div className="service-card">IT Consulting</div>
        <div className="service-card">Digital Transformation</div>
      </div>
    </section>
  );
};

export default Services;
