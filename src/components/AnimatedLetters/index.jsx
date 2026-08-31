import PropTypes from "prop-types";
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
};

export default AnimatedLetters;