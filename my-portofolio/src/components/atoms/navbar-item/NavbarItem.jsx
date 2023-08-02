import "./NavbarItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavbarItem = ({ social }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`nav__link ${social.toLowerCase()}`}
      href={
        social === "Github"
          ? "https://github.com/talidag"
          : social === "Linkedin"
          ? "https://www.linkedin.com/in/mihaela-talida-g-66532716a/"
          : social === "Discord"
          ? "https://www.discordapp.com/users/1123986908914139147"
          : "mailto:talida.ganciu@gmail.com"
      }
    >
      <FontAwesomeIcon
        icon={
          social === "Github"
            ? faGithub
            : social === "Linkedin"
            ? faLinkedin
            : social === "Discord"
            ? faDiscord
            : faEnvelope
        }
      />
    </a>
  );
};

export default NavbarItem;
