import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import bg_img from "../../assets/img.png";
import resume from "../../assets/Resume.pdf";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  return (
    <div id="home">
      <div>
        <h1>
          Hi,
          <br />
          My name is Hemant
          <br />
          and I am a passionate <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={1}
          />
        </h1>
        <h3>MERN Stack Web Developer</h3>
        <br />
        <div className="btn_group">
          <button><a href={resume} download rel="noreferrer">Download Resume</a></button>
          <button
            onClick={() =>
              window.open("https://www.github.com/mehrahemant", "_blank")
            }
          >
            Visit Github
          </button>
        </div>
      </div>
      <img src={bg_img} alt="" />
    </div>
  );
};

export default Home;
