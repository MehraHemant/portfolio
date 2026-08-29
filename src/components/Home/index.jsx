import { motion } from "framer-motion";
import "./index.scss";
import bgImg from "../../assets/img.png";
import resume from "../../assets/Resume.pdf";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="home-section">
      <motion.div className="home-container" variants={containerVariants} initial="hidden" animate="visible">
        <div className="home-content">
          <motion.div className="home-greeting" variants={itemVariants}>
            <motion.span className="greeting-text" variants={textVariants}>
              Hello, I am
            </motion.span>
          </motion.div>

          <motion.h1 className="home-name" variants={itemVariants}>
            <motion.span variants={textVariants}>Hemant Mehra</motion.span>
          </motion.h1>

          <motion.div className="home-role" variants={itemVariants}>
            <motion.span className="role-prefix" variants={textVariants}>
              Passionate
              <span className="text-gradient"> MERN Stack </span>
              Developer
            </motion.span>
            <motion.span className="role-divider" variants={textVariants} />
            <motion.span className="role-suffix" variants={textVariants}>
              Building scalable web applications
            </motion.span>
          </motion.div>

          <motion.div className="home-actions" variants={itemVariants}>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              variants={textVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="https://www.github.com/mehrahemant"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              variants={textVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              GitHub
            </motion.a>
          </motion.div>

          <motion.div className="home-stats" variants={itemVariants}>
            <motion.div className="stat" variants={textVariants}>
              <span className="stat-value">5+</span>
              <span className="stat-label">Projects</span>
            </motion.div>
            <motion.div className="stat" variants={textVariants}>
              <span className="stat-value">3+</span>
              <span className="stat-label">Years Exp</span>
            </motion.div>
            <motion.div className="stat" variants={textVariants}>
              <span className="stat-value">10+</span>
              <span className="stat-label">Technologies</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="home-visual" variants={itemVariants}>
          <motion.div
            className="visual-wrapper"
            animate={floatingVariants}
            style={{ willChange: "transform" }}
          >
            <img src={bgImg} alt="Hemant Mehra - MERN Stack Developer" className="profile-image" />
            <div className="visual-glow" />
          </motion.div>

          <motion.div
            className="tech-badges"
            variants={textVariants}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {["React", "Node.js", "MongoDB", "Next.js", "TypeScript", "Tailwind"].map((tech, i) => (
              <motion.span
                key={tech}
                className="tech-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + i * 0.1, type: "spring", stiffness: 100 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
