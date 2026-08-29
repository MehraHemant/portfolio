import { motion, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BiCodeAlt, BiWorld } from "react-icons/bi";
import "./index.scss";
import zen from "../../assets/project/Zen_Classes.webm";
import cfd from "../../assets/project/chaltifirtidukaan.png";
import bamkart from "../../assets/project/bamkart.png";
import crm_application from "../../assets/project/crm_application.webm";
import chat_app from "../../assets/project/chat_app.png";

const projects = [
  {
    id: "zen-classes",
    title: "Zen Classes",
    description: "A student dashboard where students can check their progress, class data, live classes link and more. The frontend, built with React, provides a smooth and responsive user interface, while the backend, built with Node.js, handles data management and server-side logic.",
    thumbnail: zen,
    isVideo: true,
    links: [
      { label: "Live Demo", url: "https://zen-student-portfolio-client.vercel.app/class", icon: BiWorld },
      { label: "Client Repo", url: "https://github.com/MehraHemant/zen-student-portfolio-client", icon: BiCodeAlt },
      { label: "Server Repo", url: "https://github.com/MehraHemant/zen-portal-backend", icon: BiCodeAlt },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    category: "Full Stack",
  },
  {
    id: "bamkart",
    title: "Bamkart",
    description: "BamKart is an innovative e-commerce platform built with Next.js to provide a seamless and lightning-fast shopping experience. Designed for modern consumers, BamKart offers a diverse range of products, an intuitive user interface, and smooth navigation to make online shopping effortless.",
    thumbnail: bamkart,
    isVideo: false,
    links: [
      { label: "Live Site", url: "https://www.bamkart.com/about", icon: BiWorld },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    category: "E-Commerce",
  },
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description: "Real-time chat application using React and Node.js with Socket.io for bi-directional communication. The app allows users to send and receive messages in real-time, The app is event-driven, enabling users to see messages as soon as they arrive, just like in WhatsApp group chats.",
    thumbnail: chat_app,
    isVideo: false,
    links: [
      { label: "Live Demo", url: "https://chat-app-pi-lime.vercel.app/", icon: BiWorld },
      { label: "Client Repo", url: "https://github.com/MehraHemant/Chat_App", icon: BiCodeAlt },
      { label: "Server Repo", url: "https://github.com/MehraHemant/Chat_App_Server", icon: BiCodeAlt },
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "Real-time",
  },
  {
    id: "crm-app",
    title: "CRM Application",
    description: "CRM application offers seamless customer experience management. The frontend is developed using React.js, providing a user-friendly interface. Backend functionality is managed using Node.js, which connects the application to a scalable and robust database.",
    thumbnail: crm_application,
    isVideo: true,
    links: [
      { label: "Live Demo", url: "https://crm-client-tau.vercel.app/login", icon: BiWorld },
      { label: "Client Repo", url: "https://github.com/MehraHemant/crm-client", icon: BiCodeAlt },
      { label: "Server Repo", url: "https://github.com/MehraHemant/crm-server", icon: BiCodeAlt },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    category: "Enterprise",
  },
  {
    id: "cfd",
    title: "Chalti Firti Dukaan",
    description: "A tech-driven \"Store on Wheels\" platform that combines traditional retail with mobile convenience. It enables brands to reach customers directly through mobile retail units. Built using Next.js for the frontend and SQL for database management, ensuring a seamless and scalable experience.",
    thumbnail: cfd,
    isVideo: false,
    links: [
      { label: "Live Site", url: "https://chaltifirtidukaan.com/", icon: BiWorld },
      { label: "Repository", url: "https://github.com/MehraHemant/chalti_firti_dukan", icon: BiCodeAlt },
    ],
    technologies: ["Next.js", "SQL", "TypeScript", "Tailwind", "Prisma"],
    category: "Retail Tech",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [videoRefs, setVideoRefs] = useState({});
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [scrollY]);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
    hover: {
      y: -8,
      scale: 1.01,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const thumbnailVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const playVideo = (id) => {
    const video = videoRefs[id];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const pauseVideo = (id) => {
    const video = videoRefs[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <motion.div className="projects-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="section-header" variants={cardVariants}>
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects I have built</h2>
          <p className="section-description">
            A collection of projects showcasing my expertise in building scalable web applications
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
              layout
              onMouseEnter={() => project.isVideo && playVideo(project.id)}
              onMouseLeave={() => project.isVideo && pauseVideo(project.id)}
            >
              <div className="project-thumbnail">
                {project.isVideo ? (
                  <video
                    ref={(el) => setVideoRefs((prev) => ({ ...prev, [project.id]: el }))}
                    src={project.thumbnail}
                    loop
                    muted
                    playsInline
                    className="project-video"
                  />
                ) : (
                  <motion.img
                    src={project.thumbnail}
                    alt={`${project.title} - Project thumbnail`}
                    className="project-image"
                    variants={thumbnailVariants}
                  />
                )}
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="project-category">{project.category}</span>
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <motion.a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <link.icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-techs">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
