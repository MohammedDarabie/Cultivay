import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/contact"}>Contact</Link>
      <br></br>
      <Link to={"/whoweare"}>Who we are</Link>
    </div>
  );
};

export default Home;
