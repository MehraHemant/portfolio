import { motion } from "framer-motion";
import {
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiAmazonaws,
  SiGit,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiJest,
} from "react-icons/si";
import { useInView } from "../../hooks/useAnimations";
import "./index.scss";

const About = () => {
  const [ref, isInView] = useInView({ once: true });

  const skills = [
    { category: "Frontend", icon: DiReact, color: "#61dafb", items: [
      { name: "React", icon: DiReact, level: 95 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "HTML5/CSS3", icon: DiHtml5, level: 95 },
      { name: "JavaScript (ES6+)", icon: DiJavascript1, level: 95 },
    ]},
    { category: "Backend", icon: DiNodejs, color: "#3c873a", items: [
      { name: "Node.js", icon: DiNodejs, level: 90 },
      { name: "Express.js", icon: DiNodejsSmall, level: 90 },
      { name: "MongoDB", icon: DiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "Redis", icon: SiRedis, level: 75 },
      { name: "GraphQL", icon: SiGraphql, level: 70 },
    ]},
    { category: "DevOps & Tools", icon: SiDocker, color: "#2496ed", items: [
      { name: "Docker", icon: SiDocker, level: 80 },
      { name: "AWS", icon: SiAmazonaws, level: 70 },
      { name: "Git/GitHub", icon: SiGit, level: 90 },
      { name: "Jest/Testing", icon: SiJest, level: 75 },
      { name: "CI/CD", icon: SiGit, level: 70 },
    ]},
  ];

  const experience = [
    {
      role: "MERN Stack Developer",
      company: "Freelance / Contract",
      period: "2021 - Present",
      description: "Building scalable web applications for clients across various industries. Specialized in React, Node.js, and cloud deployment.",
      achievements: [
        "Delivered 15+ production applications",
        "Reduced bundle sizes by 40% through optimization",
        "Implemented CI/CD pipelines for automated deployments",
        "Mentored junior developers on best practices",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Tech Startup",
      period: "2019 - 2021",
      description: "Developed responsive user interfaces and collaborated with backend teams to integrate APIs.",
      achievements: [
        "Built reusable component library used across 5 projects",
        "Improved page load performance by 60%",
        "Led migration from class to functional components with hooks",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "University Name",
      year: "2019",
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section" aria-labelledby="about-title" ref={ref}>
      <div className="container">
        <motion.header
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 id="about-title" className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Passionate developer turning coffee into code since 2019
          </motion.p>
        </motion.header>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="about-main" variants={itemVariants}>
            <motion.div className="about-intro card" variants={cardVariants}>
              <h3>Who Am I?</h3>
              <p>
                I&apos;m a <strong>MERN Stack Developer</strong> with 5+ years of experience
                building scalable, performant web applications. My journey started with
                curiosity about how things work on the web, and it evolved into a passion
                for crafting clean, maintainable code that solves real problems.
              </p>
              <p>
                I specialize in the <strong>React ecosystem</strong> (Next.js, TypeScript,
                Tailwind) and <strong>Node.js backend development</strong> (Express, MongoDB,
                PostgreSQL). I believe in writing tests, following best practices, and
                continuous learning.
              </p>
              <motion.div className="about-highlights grid grid-3" variants={containerVariants}>
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "15+", label: "Projects Delivered" },
                  { value: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="highlight"
                    variants={cardVariants}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="highlight-value text-gradient">{stat.value}</span>
                    <span className="highlight-label">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="experience-section" variants={cardVariants}>
              <h3>Experience</h3>
              <motion.div className="timeline" variants={containerVariants}>
                {experience.map((job, index) => (
                  <motion.article
                    key={index}
                    className="timeline-item card"
                    variants={cardVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="timeline-marker" />
                    <div className="timeline-content">
                      <div className="timeline-header flex-between">
                        <div>
                          <h4>{job.role}</h4>
                          <p className="timeline-company">{job.company}</p>
                        </div>
                        <time className="timeline-period">{job.period}</time>
                      </div>
                      <p className="timeline-description">{job.description}</p>
                      <ul className="timeline-achievements">
                        {job.achievements.map((achievement, i) => (
                          <motion.li key={i} variants={skillItemVariants}>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="education-section" variants={cardVariants}>
              <h3>Education</h3>
              <motion.div className="education-list" variants={containerVariants}>
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="education-item card"
                    variants={cardVariants}
                    whileHover={{ x: 4 }}
                  >
                    <div className="education-icon">🎓</div>
                    <div className="education-details">
                      <h4>{edu.degree}</h4>
                      <p className="education-school">{edu.school}</p>
                      <time className="education-year">{edu.year}</time>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.aside className="about-sidebar" variants={itemVariants} transition={{ delay: 0.2 }}>
            <motion.div className="skills-section card" variants={cardVariants}>
              <h3>Technical Skills</h3>
              <motion.div variants={containerVariants}>
                {skills.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    className="skill-category"
                    variants={cardVariants}
                  >
                    <div className="skill-category-header">
                      <span
                        className="skill-category-icon"
                        style={{ color: category.color }}
                      >
                        <category.icon size={20} aria-hidden="true" />
                      </span>
                      <h4>{category.category}</h4>
                    </div>
                    <motion.ul className="skill-list" variants={containerVariants}>
                      {category.items.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="skill-item"
                          variants={skillItemVariants}
                        >
                          <div className="skill-info flex-between">
                            <div className="skill-name flex gap-2">
                              <span
                                className="skill-icon"
                                style={{ color: category.color }}
                              >
                                <skill.icon size={16} aria-hidden="true" />
                              </span>
                              <span>{skill.name}</span>
                            </div>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div
                              className="skill-progress"
                              style={{ backgroundColor: category.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1, ease: "easeOut" }}
                              role="progressbar"
                              aria-valuenow={skill.level}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-label={`${skill.name} proficiency`}
                            />
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="soft-skills card" variants={cardVariants} transition={{ delay: 0.1 }}>
              <h3>Soft Skills</h3>
              <motion.ul className="soft-skills-list" variants={containerVariants}>
                {[
                  "Problem Solving",
                  "Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Adaptability",
                  "Continuous Learning",
                  "Code Review",
                  "Mentoring",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="soft-skill badge badge-primary"
                    variants={skillItemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default About;