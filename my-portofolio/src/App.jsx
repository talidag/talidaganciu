import Navbar from "./components/molecules/navbar/Navbar";
import Intro from "./components/organisms/intro/Intro";
import myImg from "./assets/myimg.png";
import Technologies from "./components/organisms/technologies/Technologies";
import Projects from "./components/organisms/projects/Projects";

function App() {
  return (
    <div className="app">
      <div className="nav__image">
        <Navbar />
        <img className="nav__img" src={myImg} alt="" />
      </div>
      <Intro />
      <Technologies />
      <Projects />
    </div>
  );
}

export default App;
