import Button from "../../atoms/button/Button";
import Hr from "../../atoms/hr/Hr";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__head">
        <h1 className="intro__header">Nice to meet you!</h1>
        <h1 className="intro__header__name">
          I'm <span className="intro__header--name">Talida Ganciu</span>
        </h1>
      </div>
      <p className="intro__text">
        I'm a dedicated mom on a journey of passion in front-end development. I
        create user-friendly websites, with a special focus on accessibility.
      </p>
      <Button />
      <Hr />
    </div>
  );
};

export default Intro;
