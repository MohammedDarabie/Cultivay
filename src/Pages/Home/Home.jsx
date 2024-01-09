import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/contact"}>Contact</Link>
      <br></br>
      <Link to={"/whoweare"}>Who we are</Link>
      <br></br>
      <Link to={"/about"}> About Us</Link>
      <br></br>
      <Link to={"/services"}>Services</Link>
    </div>
  );
};

export default Home;
