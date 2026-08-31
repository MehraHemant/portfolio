import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { useInView } from "../../hooks/useAnimations";
import "./index.scss";
import zen from "../../assets/project/Zen_Classes.webm";
import cfd from "../../assets/project/chaltifirtidukaan.png";
import bamkart from "../../assets/project/bamkart.png";
import crm_application from "../../assets/project/crm_application.webm";
import chat_app from "../../assets/project/chat_app.png";

const Project = () => {
  const [ref, isInView] = useInView({ once: true });
  const videoRefs = {
    zen: useRef(null),
    crm: useRef(null),
  };
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const projects = [
    {
      id: "zen",
      title: "Zen Classes",
      description: "A comprehensive student dashboard where students can track their progress, access class data, join live classes, and manage their learning journey. Built with a modern React frontend and Node.js backend.",
      image: zen,
      isVideo: true,
      videoRef: videoRefs.zen,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      links: {
        live: "https://zen-student-portfolio-client.vercel.app/class",
        clientRepo: "https://github.com/MehraHemant/zen-student-portfolio-client",
        serverRepo: "https://github.com/MehraHemant/zen-portal-backend",
      },
      featured: true,
    },
    {
      id: "bamkart",
      title: "Bamkart",
      description: "An innovative e-commerce platform built with Next.js providing a seamless and lightning-fast shopping experience. Features diverse product range, intuitive UI, and smooth navigation for effortless online shopping.",
      image: bamkart,
      isVideo: false,
      tags: ["Next.js", "React", "TypeScript", "PostgreSQL"],
      links: {
        live: "https://www.bamkart.com/about",
        clientRepo: "https://github.com/MehraHemant/bamkart",
      },
      featured: true,
    },
    {
      id: "chat",
      title: "Real-time Chat Application",
      description: "A real-time messaging application using React and Node.js with Socket.io for bi-directional communication. Supports instant messaging, group chats, and real-time message delivery similar to WhatsApp.",
      image: chat_app,
      isVideo: false,
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      links: {
        live: "https://chat-app-pi-lime.vercel.app/",
        clientRepo: "https://github.com/MehraHemant/Chat_App",
        serverRepo: "https://github.com/MehraHemant/Chat_App_Server",
      },
      featured: false,
    },
    {
      id: "crm",
      title: "CRM Application",
      description: "A comprehensive CRM solution offering seamless customer experience management. Frontend built with React.js for a user-friendly interface, backend with Node.js connecting to a scalable database.",
      image: crm_application,
      isVideo: true,
      videoRef: videoRefs.crm,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        live: "https://crm-client-tau.vercel.app/login",
        clientRepo: "https://github.com/MehraHemant/crm-client",
        serverRepo: "https://github.com/MehraHemant/crm-server",
      },
      featured: true,
    },
    {
      id: "cfd",
      title: "Chalti Firti Dukaan",
      description: "A tech-driven 'Store on Wheels' platform combining traditional retail with mobile convenience. Enables brands to reach customers directly through mobile retail units. Built with Next.js and SQL.",
      image: cfd,
      isVideo: false,
      tags: ["Next.js", "React", "SQL", "TypeScript"],
      links: {
        live: "https://chaltifirtidukaan.com/",
        clientRepo: "https://github.com/MehraHemant/chalti_firti_dukan",
      },
      featured: false,
    },
  ];

  const handleVideoHover = (projectId, isHovering) => {
    if (isHovering) {
      setHoveredVideo(projectId);
      videoRefs[projectId]?.current?.play().catch(() => {});
    } else {
      setHoveredVideo(null);
      videoRefs[projectId]?.current?.pause();
      if (videoRefs[projectId]?.current) {
        videoRefs[projectId].current.currentTime = 0;
      }
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="section" aria-labelledby="projects-title" ref={ref}>
      <div className="container">
        <motion.header
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 id="projects-title" className="section-title" variants={cardVariants}>
            Selected Projects
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            A collection of production applications I&apos;ve built and shipped
          </motion.p>
        </motion.header>

        <motion.div
          className="projects-grid grid grid-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className={`project-card card card-interactive ${project.featured ? "featured" : ""}`}
              variants={cardVariants}
              onMouseEnter={() => project.isVideo && handleVideoHover(project.id, true)}
              onMouseLeave={() => project.isVideo && handleVideoHover(project.id, false)}
              whileHover={{ y: -8, boxShadow: "var(--shadow-xl)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-media">
                {project.isVideo ? (
                  <video
                    ref={project.videoRef}
                    src={project.image}
                    loop
                    muted
                    playsInline
                    className={`project-video ${hoveredVideo === project.id ? "playing" : ""}`}
                    aria-label={`${project.title} demo`}
                  />
                ) : (
                  <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                )}
                {project.featured && (
                  <motion.span
                    className="project-badge badge badge-primary"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Featured
                  </motion.span>
                )}
                <motion.div
                  className="project-overlay"
                  variants={overlayVariants}
                  initial="hidden"
                  animate={hoveredVideo === project.id || !project.isVideo ? "visible" : "hidden"}
                >
                  <div className="project-links flex gap-2">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        aria-label={`View ${project.title} live demo`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <BiLinkExternal size={16} aria-hidden="true" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.links.clientRepo && (
                      <motion.a
                        href={project.links.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} client repository`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <AiFillGithub size={16} aria-hidden="true" />
                        Client Code
                      </motion.a>
                    )}
                    {project.links.serverRepo && (
                      <motion.a
                        href={project.links.serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        aria-label={`View ${project.title} server repository`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <AiFillGithub size={16} aria-hidden="true" />
                        Server Code
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </div>

              <div className="project-content">
                <div className="project-header flex-between">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="badge"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={cardVariants}>Want to see more of my work?</motion.p>
          <motion.a
            href="https://github.com/MehraHemant"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AiFillGithub size={18} aria-hidden="true" />
            View All Repositories on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;