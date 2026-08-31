import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiFillMail,
  AiFillCodeSandboxSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillPersonFill, BsSunFill, BsMoonFill, BsList, BsX } from "react-icons/bs";
import "./index.scss";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const navItems = [
    { path: "/", label: "Home", icon: AiFillHome },
    { path: "/about", label: "About", icon: BsFillPersonFill },
    { path: "/projects", label: "Projects", icon: AiFillCodeSandboxSquare },
    { path: "/contact", label: "Contact", icon: AiFillMail },
  ];

  const socialLinks = [
    {
      href: "https://github.com/mehrahemant",
      icon: AiFillGithub,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/hemant-mehra-09b98612b",
      icon: AiFillLinkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <div className="app">
      <header className={`header ${isScrolled ? "scrolled" : ""}`} role="banner">
        <div className="header-container container flex-between">
          <NavLink to="/" className="logo" aria-label="Hemant Mehra - Home">
            <span className="logo-mark">HM</span>
            <span className="logo-text">Hemant Mehra</span>
          </NavLink>

          <nav className="nav-desktop" aria-label="Main navigation">
            <ul className="nav-list flex gap-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link flex gap-2 ${isActive ? "active" : ""}`
                    }
                    onClick={closeMobileMenu}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    <item.icon size={20} aria-hidden="true" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions flex gap-3">
            <button
              className="btn btn-ghost theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
            >
              {theme === "dark" ? (
                <BsSunFill size={20} aria-hidden="true" />
              ) : (
                <BsMoonFill size={20} aria-hidden="true" />
              )}
            </button>

            <div className="social-links flex gap-2" role="list" aria-label="Social links">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link btn btn-ghost"
                  aria-label={social.label}
                >
                  <social.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>

            <button
              className="mobile-menu-btn btn btn-ghost"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <BsX size={24} aria-hidden="true" />
              ) : (
                <BsList size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `mobile-nav-link flex gap-3 ${isActive ? "active" : ""}`
                    }
                    onClick={closeMobileMenu}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    <item.icon size={24} aria-hidden="true" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mobile-social flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link flex gap-2"
                  aria-label={social.label}
                >
                  <social.icon size={22} aria-hidden="true" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}
      </header>

      <main className="main" id="main-content" role="main">
        <Outlet />
      </main>

      <footer className="footer" role="contentinfo">
        <div className="container flex-between">
          <p className="copyright">
            © {new Date().getFullYear()} Hemant Mehra. Built with React & Vite.
          </p>
          <p className="credit">
            Designed & Developed by Hemant Mehra
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;