import { Link } from "react-router-dom";
import logo from "../../../assets/Contact/Group541.png";
import "./LandingSection.css";
const LandingSection = () => {
  return (
    <div className="homelandingpage">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto pt-8 ">
        <header className="flex flex-col lg:flex-row justify-between items-center">
          <img src={logo} className="w-[12rem]" />
          <nav className=" space-x-5 lg:space-x-12 font-semibold">
            <Link to={"/"}>HOME</Link>
            <Link to={"about"}>ABOUT</Link>
            <Link to={"/services"}>SERVICES</Link>
            <Link to={"/whoweare"}>WHO WE ARE</Link>
            <Link to={"contact"}>CONTACT</Link>
          </nav>
        </header>
        <div className="relative h-[100%]">
          <div className="absolute left-5 right-0 lg:right-0 top-[10rem] lg:top-[16rem] flex flex-col">
            <p className="lg:text-5xl font-bold">
              “ To Take Children Seriously Is To <br />
              Value Them For Who They Are <br />
              Right Now Rather Than Adults In <br />
              The Making.”
            </p>
            <button className="mx-auto bg-[#bc756a] px-20 py-5 rounded-3xl text-white font-bold shadow-xl my-5 lg:my-12">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
