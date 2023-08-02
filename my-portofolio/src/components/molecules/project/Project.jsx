import "./Project.scss";
import project from "../../../assets/project.png";
import Button from "../../atoms/button/Button";

const Project = () => {
  return (
    <div className="project">
      <img src={project} alt="" />
      <h2 className="project__title">TODO WEB APP</h2>
      <div className="project__buttons">
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default Project;
