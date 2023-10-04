import { BiLink } from "react-icons/bi";
import "./index.scss";
import portfolio from "../../assets/project/portfolio.webm";
import zen from "../../assets/project/Zen_Classes.webm";
import url_shortner from "../../assets/project/url_shortner.webm";
import { useRef } from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Project = () => {
  const video1 = useRef(0);
  const video2 = useRef(0);
  const video3 = useRef(0);
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
          <a href="">
            <BiLink /> https://portfolio.com
          </a>
          <p>
            It's a portfolio website, build in react with scss. It showcase my
            works and skills.
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
        <div className="project-details">
          <h2>Zen Classes</h2>
          <a href="">
            <BiLink /> https://portfolio.com
          </a>
          <p>
            A student dashboard where student can check there progress, class
            data, live classes link and etc. This app is built in react with
            Material UI.{" "}
          </p>
        </div>
        <video ref={video2} src={zen} loop muted />
      </div>
      <div
        className="project-items"
        onMouseEnter={(e) => {
          e.preventDefault();
          video3.current.play();
        }}
        onMouseLeave={(e) => {
          e.preventDefault();
          video3.current.pause();
          video3.current.currentTime = 0;
        }}
      >
        <video ref={video3} src={url_shortner} loop muted />
        <div className="project-details">
          <h2>Url_Shortner</h2>
          <a href="">
            <BiLink /> https://portfolio.com
          </a>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default Project;
