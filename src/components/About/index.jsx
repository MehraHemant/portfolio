import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import "./index.scss";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import node from "../../assets/icons/node.png";
import react from "../../assets/icons/react.png";
import mongo from "../../assets/icons/mongo.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-details">
        <h1>
          ABOUT ME
        </h1>
        <p>
          I'm very ambitious front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quite confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myeslf in one sentence that would be a sport
          fanatic and tech-obsessed!!!
        </p>
        <div id="skills">
          <h2 className="skills">Skills</h2>
          <ul className="skill-items">
            <li>
              <span className="icon">
                <DiHtml5 />
              </span>
              <span>HTML</span>
            </li>
            <li>
              <span className="icon">
                <DiCss3 />
              </span>
              <span>CSS</span>
            </li>
            <li>
              <span className="icon">
                <DiJavascript1 />
              </span>
              <span>JavaScript</span>
            </li>
            <li>
              <span className="icon">
                <DiReact />
              </span>
              <span>React</span>
            </li>
            <li>
              <span className="icon">
                <DiNodejsSmall />
              </span>
              <span>NodeJS</span>
            </li>
            <li>
              <span className="icon">
                <DiMongodb />
              </span>
              <span>MongoDB</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="stage-cube-count">
        <div className="cubespinner">
          <div className="face1">
            <img src={html} alt="HTML" />
          </div>
          <div className="face2">
            <img src={css} alt="CSS" />
          </div>
          <div className="face3">
            <img src={js} alt="JS" />
          </div>
          <div className="face4">
            <img src={react} alt="react" />
          </div>
          <div className="face5">
            <img src={node} alt="node" />
          </div>
          <div className="face6">
            <img src={mongo} alt="mongodb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
