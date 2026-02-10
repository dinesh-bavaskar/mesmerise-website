import { motion } from "framer-motion";
import "./FinalCTA.css";

const logoWords = [
  { text: "MES", className: "logo-mes" },
  { text: "me", className: "logo-me" },
  { text: "Rise", className: "logo-rise" },
];

const FinalCTA = () => {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section id="contact" className="cta-section">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="cta-text">
            <h2>
              Would you like to start a Digital Transformation Journey with us?
            </h2>
            <p>
              Email us to get started with your Digital Transformation Journey.
              Mesmerise Soft Tech is excited to partner with you in transforming
              your manufacturing business.
            </p>
          </div>

          <motion.a
            href="mailto:contact@mesmerise.co.in"
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            EMAIL US
          </motion.a>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-grid">
          {/* LOGO + DESC */}
          <div className="footer-col">

            {/* ✅ WORD-BY-WORD LEFT → RIGHT LOGO */}
            <motion.h3 className="footer-logo">
              {logoWords.map((word, index) => (
                <motion.span
                  key={index}
                  className={word.className}
                  style={{ display: "inline-block", marginRight: "2px" }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.35,
                    ease: "easeOut",
                  }}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h3>

            <p>
              MESmeRise is a rapidly expanding consulting and digital solutions
              firm focused on elevating manufacturing efficiency, sustainability,
              and agility through digitization.
            </p>

            <div className="socials">
              <span>G</span>
              <span>in</span>
              <span>☎</span>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* BUSINESS */}
          <div className="footer-col">
            <h4>Business</h4>
            <ul>
              <li>Projects</li>
              <li>Our Team</li>
              <li>Facts</li>
              <li>Customers</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <p>
              City Avenue, 218, Near Jaguar Showroom, <br />
              Bhumkar Chowk, Wakad, Pune, <br />
              Maharashtra – 411057
            </p>
            <p className="contact">
              contact@mesmerise.co.in <br />
              +91 895 665 2694
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          Copyright © 2026{" "}
          <span>Mesmerise Soft Tech Private Limited</span> | Designed by{" "}
          <span>Marvel Digitals</span>
        </div>
      </footer>
    </>
  );
};

export default FinalCTA;
