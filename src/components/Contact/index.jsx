import { motion } from "framer-motion";
import { useState } from "react";
import { BiMessage, BiPhoneCall, BiEnvelope } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import "./index.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

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
      setFormStatus("success");
      setFormData({ name: "", email: "", number: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, type: "spring", stiffness: 100 },
    }),
  };

  const contactMethods = [
    {
      label: "Email",
      value: "mehrahemu7@gmail.com",
      href: "mailto:mehrahemu7@gmail.com",
      icon: MdOutgoingMail,
      color: "#ea4335",
    },
    {
      label: "GitHub",
      value: "mehrahemant",
      href: "https://www.github.com/mehrahemant",
      icon: BsGithub,
      color: "#333",
    },
    {
      label: "LinkedIn",
      value: "hemant-mehra",
      href: "https://www.linkedin.com/in/hemant-mehra-09b98612b",
      icon: BsLinkedin,
      color: "#0077b5",
    },
    {
      label: "WhatsApp",
      value: "+91 8954969666",
      href: "https://wa.me/918954969666",
      icon: FaWhatsapp,
      color: "#25d366",
    },
    {
      label: "Phone",
      value: "+91 8954969666",
      href: "tel:+918954969666",
      icon: BiPhoneCall,
      color: "#34a853",
    },
  ];

  const inputFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your name", icon: BsFillPersonFill, required: true },
    { name: "email", label: "Email", type: "email", placeholder: "your@email.com", icon: MdOutgoingMail, required: true },
    { name: "number", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", icon: BiPhoneCall, required: false },
    { name: "message", label: "Message", type: "textarea", placeholder: "Tell me about your project...", icon: BiMessage, required: true },
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div className="contact-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="contact-header" variants={sectionVariants}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let us work together</h2>
          <p className="section-description">
            Have a project in mind? I would love to hear about it. Send me a message and I will get back to you soon.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div className="contact-form-wrapper" variants={sectionVariants}>
            <motion.form className="contact-form" onSubmit={handleSubmit} noValidate>
              {inputFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  className="form-field-wrapper"
                  variants={fieldVariants}
                  custom={index}
                >
                  {field.type === "textarea" ? (
                    <>
                      <motion.textarea
                        name={field.name}
                        id={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="form-input"
                        rows={5}
                        aria-describedby={`${field.name}-error`}
                      />
                      <label htmlFor={field.name} className="form-label">
                        {field.label}
                      </label>
                    </>
                  ) : (
                    <>
                      <motion.input
                        name={field.name}
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="form-input"
                        aria-describedby={`${field.name}-error`}
                      />
                      <label htmlFor={field.name} className="form-label">
                        {field.label}
                      </label>
                    </>
                  )}
                  <motion.div className="form-focus-ring" />
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={formStatus === "submitting"}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === "submitting" && (
                  <motion.span
                    className="spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                )}
                {formStatus !== "submitting" && "Send Message"}
              </motion.button>

              {formStatus === "success" && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <BiEnvelope className="status-icon" />
                  <span>Message sent successfully! I will get back to you soon.</span>
                </motion.div>
              )}

              {formStatus === "error" && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <BiMessage className="status-icon" />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </motion.form>
          </motion.div>

          <motion.div className="contact-info-wrapper" variants={sectionVariants}>
            <div className="contact-info-card">
              <h3 className="info-title">Other ways to connect</h3>
              <p className="info-description">
                Prefer a direct conversation? Feel free to reach out through any of these channels.
              </p>

              <ul className="contact-methods" role="list">
                {contactMethods.map((method, index) => (
                  <motion.li
                    key={method.label}
                    className="contact-method"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 100 }}
                    whileHover={{ x: 8 }}
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-link"
                      style={{ "--method-color": method.color }}
                    >
                      <span className="method-icon">
                        <method.icon size={22} style={{ color: method.color }} />
                      </span>
                      <div className="method-content">
                        <span className="method-label">{method.label}</span>
                        <span className="method-value">{method.value}</span>
                      </div>
                      <span className="method-arrow">
                        <BiEnvelope size={18} style={{ transform: "rotate(-45deg)" }} />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="availability">
                <div className="availability-indicator">
                  <span className="status-dot" />
                  <span>Currently available for freelance</span>
                </div>
                <p className="availability-note">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
