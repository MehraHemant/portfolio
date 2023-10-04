import { BiMessage, BiPhoneCall } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import "./index.scss";
import call from "../../assets/icons/call.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import insta from "../../assets/icons/insta.png";
import gmail from "../../assets/icons/gmail.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const layout = { name: "", email: "", number: "", message: "" };
  const [data, setData] = useState(layout);
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleMail = (e) => {
    e.preventDefault();
    console.log(data);
    emailjs
      .send(
        "service_ztobtmt",
        "template_ev9l1p1",
        {
          from_name: data.name,
          message: `${data.message}, <br/> contact-number: ${data.number}, contact-email: ${data.email}`,
        },
        "Z94NObITapB4VhnXu"
      )
      .then(
        (response) => {
          setData(layout);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div id="contact">
        <div className="form_container">
          <h1 className="">CONTACT ME</h1>
          <form onSubmit={handleMail}>
            <div className="form_group field">
              <input
                type="text"
                className="form_field"
                placeholder="Name"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
                required
              />
              <span className="form_icon">
                <BsFillPersonFill />
              </span>
              <label htmlFor="name" className="form_label">
                Name
              </label>
            </div>
            <div className="form_group field">
              <input
                type="input"
                className="form_field"
                placeholder="Email"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                required
              />
              <span className="form_icon">
                <MdOutgoingMail />
              </span>
              <label htmlFor="email" className="form_label">
                Email
              </label>
            </div>
            <div className="form_group field">
              <input
                type="input"
                className="form_field"
                placeholder="Number"
                name="number"
                id="number"
                value={data.number}
                onChange={handleChange}
              />
              <span className="form_icon">
                <BiPhoneCall />
              </span>
              <label htmlFor="number" className="form_label">
                Number
              </label>
            </div>
            <div className="form_group field">
              <textarea
                value={data.message}
                onChange={handleChange}
                rows={1}
                className="form_field"
                placeholder="Message"
                name="message"
                id="message"
              />
              <span className="form_icon">
                <BiMessage />
              </span>
              <label htmlFor="number" className="form_label">
                Message
              </label>
            </div>
            <div className="btn_field">
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="contact_me">
          <h1 className="second_heading">You can also contact me on</h1>
          <div className="contact_details">
            <img src={gmail} alt="" />
            <a href="mailto:mehrahemu7@gmail.com">mehrahemu7@gmail.com</a>
          </div>
          <div className="contact_details">
            <img src={insta} alt="" />
            <a href="">@hemant_mhra</a>
          </div>
          <div className="contact_details">
            <img src={whatsapp} alt="" />
            <a href="https://wa.me/918954969666">@Hemant</a>
          </div>
          <div className="contact_details">
            <img src={call} alt="" />
            <a href="tel: +91-8954969666">+91-8954969666</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
