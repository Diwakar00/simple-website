import path1 from "../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <img className="about" src={path1} alt="about us img" />
    </div>
  );
};

export default About;
