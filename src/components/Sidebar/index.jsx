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
            <a href="" target="_blank" rel="noreferrer">
                <AiFillGithub/>
            </a>
        </li>
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <AiFillLinkedin/>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
