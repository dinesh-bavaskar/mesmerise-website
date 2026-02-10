import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCogs,
  FaTools,
  FaRocket,
} from "react-icons/fa";
import "./About.css";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const cards = [
    {
      title: "Consulting",
      icon: <FaLightbulb />,
      items: [
        "Identify and bridge gaps to recommend the optimal MOM/MES solution.",
        "Maximize ROI by optimizing processes and reducing costs.",
      ],
    },
    {
      title: "Design, Development & Delivery",
      icon: <FaCogs />,
      items: [
        "Customized MOM/MES solutions integrated with existing systems.",
        "Faster time to value with smooth implementation.",
      ],
    },
    {
      title: "Support & Maintenance",
      icon: <FaTools />,
      items: [
        "Continuous monitoring and technical support.",
        "Long-term system stability and performance.",
      ],
    },
    {
      title: "Enhancements",
      icon: <FaRocket />,
      items: [
        "Scalable improvements as requirements evolve.",
        "Future-proof operations with continuous innovation.",
      ],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-content">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          How can we help you?
        </motion.h2>

        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Our mission is to foster a more intelligent, interconnected, and
          productive world by connecting human creativity with technological
          potential.
        </motion.p>

        <div className="about-cards">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="about-card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="about-card-header">
                <div className="about-icon">{card.icon}</div>
                <h3>{card.title}</h3>
              </div>

              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
