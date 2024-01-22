import { BiLink } from "react-icons/bi";
import "./index.scss";
import portfolio from "../../assets/project/portfolio.webm";
import zen from "../../assets/project/Zen_Classes.webm";
import url_shortner from "../../assets/project/url_shortner.webm";
import crm_application from "../../assets/project/crm_application.webm";
import chat_app from "../../assets/project/chat_app.png"
import { useRef } from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Project = () => {
  const video1 = useRef(0);
  const video2 = useRef(0);
  const video3 = useRef(0);
  const video4 = useRef(0);
  return (
    <div id="project">
      <h1>Projects</h1>
      <div
        className="project-items"
        onMouseEnter={(e) => {
          e.preventDefault();
          video1.current.play();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          video1.current.pause();
          video1.current.currentTime = 0;
        }}
      >
        <video ref={video1} src={portfolio} loop muted />
        <div className="project-details">
          <h2>Portfolio</h2>
          <a href="https://portfolio-eta-sand-75.vercel.app/" target="_blank">
            <BiLink /> https://portfolio-eta-sand-75.vercel.app/
          </a>
          <p>
            It's a portfolio website, build in react with scss. It showcase my
            works and skills. It showcases my skills, projects, and contact
            information with a clean and modern design.
          </p>
        </div>
      </div>
      <div
        className="project-items"
        onMouseEnter={(e) => {
          e.preventDefault();
          video2.current.play();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          video2.current.pause();
          video2.current.currentTime = 0;
        }}
      >
        <video ref={video2} src={zen} loop muted />
        <div className="project-details">
          <h2>Zen Classes</h2>
          <a href="https://zen-student-portfolio-client.vercel.app/class">
            <BiLink /> https://zen-student-portfolio-client.vercel.app/class
          </a>
          <p>
            A student dashboard where student can check there progress, class
            data, live classes link and etc. The front-end, built with React,
            provides a smooth and responsive user interface, while the back-end,
            built with Node.js, handles data management and server-side logic.
          </p>
        </div>
      </div>
      <div
        className="project-items"
        // onMouseEnter={(e) => {
        //   e.preventDefault();
        //   video3.current?.play();
        // }}
        // onMouseLeave={(e) => {
        //   e.preventDefault();
        //   video3.current?.pause();
        //   video3.current?.currentTime = 0;
        // }}
      >
        {/* <video ref={video3} src={url_shortner} loop muted /> */}
        <img src={chat_app}/>
        <div className="project-details">
          <h2>Real-time chat application</h2>
          <a href="https://chat-app-pi-lime.vercel.app/" target="_blank">
            <BiLink />
            https://chat-app-pi-lime.vercel.app/
          </a>
          <p>
            real-time chat application, Used React and Node.js with Socket.io
            for bi-directional communication. The app allows users to send and
            receive messages in real-time, The app is event-driven, enabling
            users to see messages as soon as they arrive, just like in WhatsApp
            group chats. The code is available on GitHub for further
            exploration.
          </p>
        </div>
      </div>
      <div
        className="project-items"
        onMouseEnter={(e) => {
          e.preventDefault();
          video4.current.play();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          video4.current.pause();
          video4.current.currentTime = 0;
        }}
      >
        <video ref={video4} src={crm_application} loop muted />
        <div className="project-details">
          <h2>CRM application</h2>
          <a href="https://crm-client-tau.vercel.app/login" target="_blank">
            <BiLink />
            https://crm-client-tau.vercel.app/login
          </a>
          <p>
            CRM application offers seamless customer experience management. The
            frontend is developed using React.js, providing a user-friendly
            interface. Backend functionality is managed using Node.js, which
            connects the application to a scalable and robust database.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
