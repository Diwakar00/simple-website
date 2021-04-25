import path1 from "../../images/home.jfif";
import path2 from "../../images/home2.jfif";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Welcome To Our Site</h1>
      <img className="home" src={path1} alt="small home" />
      <img className="home" src={path2} alt="big home" />
    </div>
  );
};

export default Home;
