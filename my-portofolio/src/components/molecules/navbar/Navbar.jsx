import NavbarItem from "../../atoms/navbar-item/NavbarItem";
import "./Navbar.scss";

const Navbar = () => {
  const socials = ["Github", "Linkedin", "Discord", "Envelope"];

  return (
    <div className="nav">
      <p className="nav__name">
        <a href="http://localhost:5174/" className="nav__name__link">
          talidaganciu
        </a>
      </p>
      <ul className="nav__items">
        {socials.map((social, index) => (
          <li className={`nav__item`} key={index}>
            <NavbarItem social={social} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
