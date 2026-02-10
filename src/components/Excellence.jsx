import { motion } from "framer-motion";
import "./Excellence.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Excellence = () => {
  return (
    <section id="services" className="excellence">
      {/* CONTAINER (NEW – ALIGNMENT FIX) */}
      <div className="excellence-container">
        {/* TITLE */}
        <motion.h2
          className="excellence-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Empowering Manufacturing Excellence
        </motion.h2>

        <motion.p
          className="excellence-desc"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          At Mesmerise Soft Tech, we deliver intelligent manufacturing solutions
          that enhance efficiency, visibility, and decision-making.
        </motion.p>

        {/* CARDS */}
        <motion.div
          className="excellence-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "Controls & Automation",
            "Data Integration & IT-OT Connectivity",
            "Standard MES Solutions",
            "Bespoke Solutions",
            "Data Analytics & Cloud Integration",
            "Actionable Insights & Dashboards",
          ].map((title, i) => (
            <motion.div
              key={i}
              className="excellence-card premium-float"
              variants={cardAnim}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <h3>{title}</h3>
              <p>
                Delivering tailored solutions to drive efficiency, scalability,
                and real-time intelligence across manufacturing operations.
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CERTIFICATION */}
       {/* CERTIFICATION */}
<motion.div
  className="certification"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h4>We are Certified Integrator for Ignition</h4>

  {/* ✅ ADD THIS IMAGE */}
  <img
    src="/integrator.png"
    alt="Ignition Certified Integrator"
    className="integrator-logo"
  />

  <div className="badge premium-pulse">
    Ignition® Certified Integrator
  </div>
</motion.div>


        {/* CLIENTS */}
        <motion.div
          className="clients"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Our Clients</h3>
          <p>
            Trusted by global leaders across Automotive, Life Sciences, and
            Manufacturing.
          </p>

          {/* LOGO SLIDER */}
          <div className="logo-slider">
            <div className="logo-track">
              {[
                "/p1.png",
                "/p2.png",
                "/p3.png",
                "/p4.png",
                "/p5.png",
                "/p6.png",
                "/p7.png",
                "/p8.png",
              ]
                .concat([
                  "/p1.png",
                  "/p2.png",
                  "/p3.png",
                  "/p4.png",
                  "/p5.png",
                  "/p6.png",
                  "/p7.png",
                  "/p8.png",
                ])
                .map((logo, i) => (
                  <div className="logo-slide" key={i}>
                    <img src={logo} alt="Client Logo" />
                  </div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Excellence;
