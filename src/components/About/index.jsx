import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  
  DiReact,
} from "react-icons/di";
import { FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiPostgresql, SiGraphql } from "react-icons/si";
import "./index.scss";

const skills = [
  { name: "HTML5", icon: DiHtml5, color: "#e34c26", category: "frontend" },
  { name: "CSS3", icon: DiCss3, color: "#263de4", category: "frontend" },
  { name: "JavaScript", icon: DiJavascript1, color: "#f0db4f", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "frontend" },
  { name: "React", icon: DiReact, color: "#61dbfb", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", category: "frontend" },
  { name: "Redux", icon: SiRedux, color: "#764abc", category: "frontend" },
  { name: "Node.js", icon: FaNodeJs, color: "#3c873a", category: "backend" },
  { name: "Express", icon: SiExpress, color: "#000000", category: "backend" },
  { name: "MongoDB", icon: DiMongodb, color: "#589636", category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "database" },
  { name: "GraphQL", icon: SiGraphql, color: "#e10098", category: "backend" },
  { name: "Docker", icon: FaDocker, color: "#2496ed", category: "devops" },
  { name: "AWS", icon: FaAws, color: "#ff9900", category: "devops" },
  { name: "Git", icon: FaGitAlt, color: "#f05032", category: "tools" },
];

const experience = [
  {
    role: "MERN Stack Developer",
    company: "Bamkart",
    period: "2023 - Present",
    description: "Building scalable e-commerce platform with Next.js, leading frontend architecture and performance optimization.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Zen Classes",
    period: "2022 - 2023",
    description: "Developed student dashboard and portal with React and Node.js, implementing real-time features and authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2021 - 2022",
    description: "Built multiple client projects including CRM applications, chat apps, and e-commerce solutions.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
  },
];

const About = () => {
  const scrollY = useScroll();
  const cubeRef = useRef(null);

  const rotateX = useTransform(scrollY.scrollY, [0, 1000], [0, 360]);
  const rotateY = useTransform(scrollY.scrollY, [0, 1000], [0, 180]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  const cubeVariants = {
    animate: {
      rotateX: rotateX,
      rotateY: rotateY,
      transition: { duration: 0.1 },
    },
  };


  return (
    <section id="about" className="about-section">
      <motion.div className="about-container" variants={containerVariants} initial="hidden" animate="visible">
        <div className="about-content">
          <motion.div className="section-header" variants={sectionVariants}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Get to know me better</h2>
          </motion.div>

          <motion.div className="about-bio" variants={sectionVariants}>
            <motion.p variants={sectionVariants}>
              I am a passionate <span className="text-gradient">MERN Stack Developer</span> with 3+ years of experience
              building scalable web applications. I specialize in creating performant, user-centric solutions
              using modern technologies.
            </motion.p>
            <motion.p variants={sectionVariants}>
              My journey started with curiosity about how things work on the web, which evolved into a career
              crafting digital experiences. I am naturally curious, perpetually learning, and thrive on solving
              complex problems with clean, maintainable code.
            </motion.p>
            <motion.p variants={sectionVariants}>
              When I am not coding, you will find me exploring new technologies, contributing to open source,
              or enjoying a good sci-fi movie. I believe in continuous growth and sharing knowledge with the community.
            </motion.p>
          </motion.div>

          <motion.div className="experience-section" variants={sectionVariants}>
            <h3 className="subsection-title">Experience</h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  className="experience-item"
                  variants={sectionVariants}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 80 }}
                >
                  <div className="experience-marker" />
                  <div className="experience-content">
                    <div className="experience-header">
                      <h4 className="experience-role">{exp.role}</h4>
                      <span className="experience-period">{exp.period}</span>
                    </div>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-description">{exp.description}</p>
                    <div className="experience-techs">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="about-visual" variants={sectionVariants}>
          <motion.div
            ref={cubeRef}
            className="skills-cube"
            variants={cubeVariants}
            style={{ transformOrigin: "center center" }}
          >
            <div className="cube-face front">
              <div className="face-content">
                <span className="face-label">Frontend</span>
                {skills.filter(s => s.category === "frontend").map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={skillVariants}
                    custom={i}
                    style={{ "--skill-color": skill.color }}
                  >
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="cube-face back">
              <div className="face-content">
                <span className="face-label">Backend</span>
                {skills.filter(s => s.category === "backend").map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={skillVariants}
                    custom={i}
                    style={{ "--skill-color": skill.color }}
                  >
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="cube-face right">
              <div className="face-content">
                <span className="face-label">Database</span>
                {skills.filter(s => s.category === "database").map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={skillVariants}
                    custom={i}
                    style={{ "--skill-color": skill.color }}
                  >
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="cube-face left">
              <div className="face-content">
                <span className="face-label">DevOps & Tools</span>
                {skills.filter(s => s.category === "devops" || s.category === "tools").map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    variants={skillVariants}
                    custom={i}
                    style={{ "--skill-color": skill.color }}
                  >
                    <skill.icon className="skill-icon" style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="cube-face top">
              <div className="face-content center">
                <FaNodeJs className="cube-center-icon" style={{ color: "#3c873a" }} />
                <span className="center-label">Full Stack</span>
              </div>
            </div>
            <div className="cube-face bottom">
              <div className="face-content center">
                <DiReact className="cube-center-icon" style={{ color: "#61dbfb" }} />
                <span className="center-label">React Ecosystem</span>
              </div>
            </div>
          </motion.div>

          <div className="cube-controls">
            <p className="cube-hint">Scroll to rotate</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
