import { BiLink } from "react-icons/bi";
import "./index.scss";
import zen from "../../assets/project/Zen_Classes.webm";
import cfd from "../../assets/project/chaltifirtidukaan.png";
import bamkart from "../../assets/project/bamkart.png";
import crm_application from "../../assets/project/crm_application.webm";
import chat_app from "../../assets/project/chat_app.png";
import { useRef } from "react";

const Project = () => {
  const video2 = useRef(0);
  const video4 = useRef(0);
  return (
    <div id="project">
      <h1>Projects</h1>
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
          <a href="https://zen-student-portfolio-client.vercel.app/class" rel="noreferrer"  target="_blank">
            <BiLink /> https://zen-student-portfolio-client.vercel.app/class
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/zen-student-portfolio-client"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/zen-student-portfolio-client
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/zen-portal-backend"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/zen-portal-backend
          </a>
          <p>
            A student dashboard where student can check there progress, class
            data, live classes link and etc. The front-end, built with React,
            provides a smooth and responsive user interface, while the back-end,
            built with Node.js, handles data management and server-side logic.
          </p>
        </div>
      </div>
      <div className="project-items">
      <img src={bamkart} />
        <div className="project-details">
          <h2>Bamkart</h2>
          <a
            href="https://www.bamkart.com/about"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink /> https://www.bamkart.com/about
          </a>
          <p>
            BamKart is an innovative e-commerce platform built with
            <b>Next.js</b> to provide a seamless and lightning-fast shopping
            experience. Designed for modern consumers, BamKart offers a diverse
            range of products, an intuitive user interface, and smooth
            navigation to make online shopping effortless.
          </p>
        </div>
      </div>
      <div className="project-items">
        <img src={chat_app} />
        <div className="project-details">
          <h2>Real-time chat application</h2>
          <a
            href="https://chat-app-pi-lime.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://chat-app-pi-lime.vercel.app/
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/Chat_App"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/Chat_App
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/Chat_App_Server"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/Chat_App_Server
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
          <a
            href="https://crm-client-tau.vercel.app/login"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://crm-client-tau.vercel.app/login
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/crm-client"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/crm-client
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/crm-server"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/crm-server
          </a>
          <p>
            CRM application offers seamless customer experience management. The
            frontend is developed using React.js, providing a user-friendly
            interface. Backend functionality is managed using Node.js, which
            connects the application to a scalable and robust database.
          </p>
        </div>
      </div>
      <div className="project-items">
        <img src={cfd} />
        <div className="project-details">
          <h2>Chalti Firti Dukaan</h2>
          <a
            href="https://chaltifirtidukaan.com/"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://chaltifirtidukaan.com/
          </a>
          <br/>
          <a
            href="https://github.com/MehraHemant/chalti_firti_dukan"
            rel="noreferrer"
            target="_blank"
          >
            <BiLink />
            https://github.com/MehraHemant/chalti_firti_dukan
          </a>
          <p>
            A tech-driven &ldquo;Store on Wheels &rdquo; platform that combines
            traditional retail with mobile convenience. It enables brands to
            reach customers directly through mobile retail units. Built using
            Next.js for the frontend and SQL for database management, ensuring a
            seamless and scalable experience.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
