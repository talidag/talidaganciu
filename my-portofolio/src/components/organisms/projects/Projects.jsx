import "./Projects.scss";
import Button from "../../atoms/button/Button";
import Project from "../../molecules/project/Project";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__wrap">
        <h1 className="projects__title">Projects</h1>
        <Button />
      </div>
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
