import { BsFillPersonFill } from "react-icons/bs";
import {
  AiFillHome,
  AiFillMail,
  AiFillCodeSandboxSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./index.scss";

const navItems = [
  { path: "/", icon: AiFillHome, label: "Home" },
  { path: "/about", icon: BsFillPersonFill, label: "About" },
  { path: "/projects", icon: AiFillCodeSandboxSquare, label: "Projects" },
  { path: "/contact", icon: AiFillMail, label: "Contact" },
];

const socialLinks = [
  { href: "https://www.github.com/mehrahemant", icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/hemant-mehra-09b98612b", icon: AiFillLinkedin, label: "LinkedIn" },
];

const sidebarVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Sidebar = () => {
  return (
    <motion.aside
      className="nav-bar"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="logo-wrapper">
        <NavLink to="/" className="logo" aria-label="Home">
          <span className="logo-text">HM</span>
        </NavLink>
      </div>
      <nav className="nav-menu" role="navigation" aria-label="Main navigation">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.navLink
                as={NavLink}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={item.label}
              >
                <item.icon className="nav-icon" aria-hidden="true" />
                <span className="nav-tooltip">{item.label}</span>
                <motion.span
                  className="nav-indicator"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.navLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="social-wrapper">
        <ul className="social-list" role="list" aria-label="Social links">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="social-icon" aria-hidden="true" />
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
