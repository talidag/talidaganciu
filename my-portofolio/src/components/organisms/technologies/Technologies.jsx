import "./Technologies.scss";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGithub,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTerminal,
  faTabletScreenButton,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Hr from "../../atoms/hr/Hr";

const Technologies = () => {
  return (
    <div className="main">
      <h1 className="main__title">Skills & Tools</h1>
      <p className="main__p">
        The skills, tools and technologies I use to bring your products to life:
      </p>
      <div className="technologies">
        <div className="technology">
          <FontAwesomeIcon icon={faHtml5} className="technology__icon" />
          <p className="technology__name">HTML</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faCss3Alt} className="technology__icon" />
          <p className="technology__name">CSS</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faJs} className="technology__icon" />
          <p className="technology__name">JavaScript</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faReact} className="technology__icon" />
          <p className="technology__name">React</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faGithub} className="technology__icon" />
          <p className="technology__name">GitHub</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faSass} className="technology__icon" />
          <p className="technology__name">Sass</p>
        </div>
        <div className="technology">
          <FontAwesomeIcon icon={faTerminal} className="technology__icon" />
          <p className="technology__name">Command Line</p>
        </div>

        <div className="technology">
          <FontAwesomeIcon
            icon={faTabletScreenButton}
            className="technology__icon"
          />
          <p className="technology__name">Responsive Websites</p>
        </div>
      </div>
      <Hr />
    </div>
  );
};

export default Technologies;
