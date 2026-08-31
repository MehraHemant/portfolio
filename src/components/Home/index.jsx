import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import AnimatedLetters from "../AnimatedLetters";
import { useInView, useReducedMotion } from "../../hooks/useAnimations";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const prefersReducedMotion = useReducedMotion();
  const [ref, isInView] = useInView({ once: true });

  useEffect(() => {
    if (!prefersReducedMotion) {
      const timer = setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion]);

  const jobArray = [
    "W", "e", "b", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r", "."
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-12, 12, -12],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section id="home" className="section hero" aria-labelledby="home-title" ref={ref}>
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="hero-content" variants={itemVariants}>
            <motion.div className="hero-badge" variants={itemVariants}>
              <span className="badge">Available for freelance & full-time</span>
            </motion.div>

            <motion.h1 id="home-title" className="hero-title" variants={itemVariants}>
              Hi, I&apos;m <span className="text-gradient">Hemant Mehra</span>
            </motion.h1>

            <motion.div className="hero-subtitle" variants={itemVariants}>
              <p className="lead">
                Passionate <strong>MERN Stack Developer</strong> crafting
                scalable web applications with clean code & modern architecture.
              </p>
            </motion.div>

            <motion.div className="hero-role" variants={itemVariants}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                index={1}
              />
            </motion.div>

            <motion.div className="hero-actions flex gap-3" variants={itemVariants}>
              <Link to="/contact" className="btn btn-primary">
                Let&apos;s Work Together
                <BiLinkExternal size={18} aria-hidden="true" />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Projects
              </Link>
            </motion.div>

            <motion.div className="hero-stats grid grid-4" variants={itemVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card card text-center"
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="stat-value text-gradient">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="hero-tech" variants={itemVariants}>
              <h3 className="tech-label">Tech Stack</h3>
              <div className="tech-tags flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="tech-tag badge"
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 0.03}s` }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech.icon} {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" variants={itemVariants} transition={{ delay: 0.3 }}>
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <motion.div className="code-window" variants={itemVariants} whileHover={{ y: -8 }}>
                  <div className="window-header">
                    <div className="window-controls">
                      <span className="control close" />
                      <span className="control minimize" />
                      <span className="control maximize" />
                    </div>
                    <div className="window-title">portfolio.jsx</div>
                  </div>
                  <div className="window-body">
                    <pre className="code-preview"><code>{`const developer = {
  name: "Hemant Mehra",
  role: "MERN Stack Developer",
  stack: ["React", "Node.js", "TypeScript", "MongoDB"],
  currently: "Building scalable apps",
  openToWork: true
};`}</code></pre>
                  </div>
                </motion.div>
                <div className="floating-cards">
                  {[
                    { icon: "⚡", title: "Real-time Apps", desc: "Socket.io, WebSockets" },
                    { icon: "🔐", title: "Auth & Security", desc: "JWT, OAuth2, bcrypt" },
                    { icon: "🚀", title: "Deployment", desc: "Vercel, Docker, AWS" },
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      className="float-card card"
                      animate={floatVariants}
                      style={{ transitionDelay: `${index * 1}s` }}
                    >
                      <div className="float-icon">{card.icon}</div>
                      <div className="float-content">
                        <strong>{card.title}</strong>
                        <span>{card.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          aria-hidden="true"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;