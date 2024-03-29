import { BsFillPersonFill } from "react-icons/bs"; 
import {
  AiFillHome,
  AiFillMail,
  AiFillCodeSandboxSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import './index.scss';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
      </Link>
      <nav>
        <NavLink to="/">
          <AiFillHome />
        </NavLink>
        <NavLink to="/about">
          <BsFillPersonFill />
        </NavLink>
        <NavLink to="/projects">
          <AiFillCodeSandboxSquare />
        </NavLink>
        <NavLink to="/contact">
          <AiFillMail />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a href="https://www.github.com/mehrahemant" target="_blank" rel="noreferrer">
                <AiFillGithub/>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/hemant-mehra-09b98612b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                <AiFillLinkedin/>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
