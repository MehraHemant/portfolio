import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiPhoneCall, BiTime } from "react-icons/bi";
import { MdOutgoingMail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useInView } from "../../hooks/useAnimations";
import "./index.scss";

const Contact = () => {
  const [ref, isInView] = useInView({ once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const contactMethods = [
    {
      icon: MdOutgoingMail,
      title: "Email",
      value: "mehrahemu7@gmail.com",
      action: "mailto:mehrahemu7@gmail.com",
      description: "Best for project inquiries",
    },
    {
      icon: BiPhoneCall,
      title: "Phone",
      value: "+91 89549 69666",
      action: "tel:+918954969666",
      description: "Available 10am - 6pm IST",
    },
    {
      icon: MdLocationOn,
      title: "Location",
      value: "India",
      action: null,
      description: "Remote work worldwide",
    },
    {
      icon: BiTime,
      title: "Availability",
      value: "Open to opportunities",
      action: null,
      description: "Full-time & Freelance",
    },
  ];

  const socialLinks = [
    {
      icon: BsGithub,
      label: "GitHub",
      href: "https://github.com/mehrahemant",
      color: "#24292e",
    },
    {
      icon: BsLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hemant-mehra-09b98612b",
      color: "#0077b5",
    },
    {
      icon: BsTwitter,
      label: "Twitter",
      href: "https://twitter.com/hemant_mhra",
      color: "#1da1f2",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      await emailjs.send(
        "service_ztobtmt",
        "template_ev9l1p1",
        {
          from_name: formData.name,
          message: `${formData.message}, <br/> contact-number: ${formData.number}, contact-email: ${formData.email}`,
        },
        "Z94NObITapB4VhnXu"
      );
      setStatus("success");
      setFormData({ name: "", email: "", number: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
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

  const statusVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title" ref={ref}>
      <div className="container">
        <motion.header
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 id="contact-title" className="section-title" variants={cardVariants}>
            Get In Touch
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            Have a project in mind? Let&apos;s build something amazing together.
          </motion.p>
        </motion.header>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.div className="contact-intro card" variants={cardVariants}>
              <h3>Let&apos;s Start a Conversation</h3>
              <p>
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Whether you have a
                specific project in mind or just want to say hello, feel free to
                reach out.
              </p>
<motion.div className="response-time flex gap-4" variants={containerVariants}>
                  <motion.div className="response-item" variants={cardVariants} whileHover={{ y: -4 }}>
                    <span className="response-value text-gradient">{"<"} 24h</span>
                    <span className="response-label">Response Time</span>
                  </motion.div>
                  <motion.div className="response-item" variants={cardVariants} whileHover={{ y: -4 }}>
                    <span className="response-value text-gradient">100%</span>
                    <span className="response-label">Read Rate</span>
                  </motion.div>
                </motion.div>
            </motion.div>

            <motion.div className="contact-methods" variants={cardVariants}>
              <h3>Ways to Connect</h3>
              <motion.div className="methods-grid grid grid-2" variants={containerVariants}>
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    className="method-card card card-interactive"
                    target={method.action ? "_blank" : undefined}
                    rel={method.action ? "noopener noreferrer" : undefined}
                    variants={cardVariants}
                    whileHover={{ y: -4, boxShadow: "var(--shadow-lg)" }}
                  >
                    <div className="method-icon" style={{ color: "var(--color-accent)" }}>
                      <method.icon size={24} aria-hidden="true" />
                    </div>
                    <div className="method-content">
                      <h4>{method.title}</h4>
                      <p className="method-value">{method.value}</p>
                      <p className="method-description">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="social-section card" variants={cardVariants}>
              <h3>Follow My Work</h3>
              <p className="social-desc">Stay updated with my latest projects and thoughts</p>
              <motion.div className="social-grid flex gap-3" variants={containerVariants}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn btn btn-secondary"
                    style={{ borderColor: social.color }}
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <social.icon size={20} aria-hidden="true" style={{ color: social.color }} />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants} transition={{ delay: 0.2 }}>
            <motion.form
              className="contact-form card"
              onSubmit={handleSubmit}
              noValidate
              variants={cardVariants}
            >
              <h3>Send a Message</h3>
              <p className="form-desc">I&apos;ll get back to you as soon as possible.</p>

              <div className="form-row grid grid-2">
                <motion.div className="input-group" variants={itemVariants}>
                  <label htmlFor="name" className="input-label">
                    Name <span className="required">*</span>
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    className={`input-field ${errors.name ? "error" : ""}`}
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    disabled={status === "sending"}
                    whileFocus={{ borderColor: "var(--color-accent)" }}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        id="name-error"
                        className="input-error"
                        role="alert"
                        variants={statusVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div className="input-group" variants={itemVariants}>
                  <label htmlFor="email" className="input-label">
                    Email <span className="required">*</span>
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    className={`input-field ${errors.email ? "error" : ""}`}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    disabled={status === "sending"}
                    whileFocus={{ borderColor: "var(--color-accent)" }}
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        id="email-error"
                        className="input-error"
                        role="alert"
                        variants={statusVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              <motion.div className="input-group" variants={itemVariants}>
                <label htmlFor="number" className="input-label">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  id="number"
                  name="number"
                  className="input-field"
                  placeholder="+91 98765 43210"
                  value={formData.number}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  whileFocus={{ borderColor: "var(--color-accent)" }}
                />
              </motion.div>

              <motion.div className="input-group" variants={itemVariants}>
                <label htmlFor="message" className="input-label">
                  Message <span className="required">*</span>
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  className={`input-field ${errors.message ? "error" : ""}`}
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  disabled={status === "sending"}
                  whileFocus={{ borderColor: "var(--color-accent)" }}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.span
                      id="message-error"
                      className="input-error"
                      role="alert"
                      variants={statusVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {errors.message}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              <AnimatePresence mode="wait">
                {status !== "idle" && (
                  <motion.div
                    className={`form-status ${status}`}
                    role="status"
                    aria-live="polite"
                    variants={statusVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {status === "sending" && (
                      <div className="status-sending flex gap-2">
                        <motion.span
                          className="spinner"
                          aria-hidden="true"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </div>
                    )}
                    {status === "success" && (
                      <div className="status-success flex gap-2">
                        <motion.svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </motion.svg>
                        Message sent successfully! I&apos;ll get back to you soon.
                      </div>
                    )}
                    {status === "error" && (
                      <div className="status-error flex gap-2">
                        <motion.svg
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </motion.svg>
                        Failed to send message. Please try again or email me directly.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={status === "sending"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                whileDisabled={{ opacity: 0.7 }}
              >
                {status === "sending" ? (
                  <>
                    <motion.span
                      className="spinner"
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;