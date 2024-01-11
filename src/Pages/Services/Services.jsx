import { useState } from "react";
import logo from "../../assets/Contact/Group541.png";
import landingLogo from "../../assets/Services/Icons/01.svg";
import Img5 from "../../assets/Services/Icons/05.svg";
import Img4 from "../../assets/Services/Icons/04.svg";
import KidsPhoto1 from "../../assets/Services/Images/01.png";
import BrainLogo from "../../assets/Services/Icons/06.svg";
import pullUp from "../../assets/Services/Icons/07.svg";
import kidfoot from "../../assets/Services/Images/02.png";
import sun from "../../assets/Services/Icons/08.svg";
// import sunray from "../../assets/Services/Icons/013.svg";
// import paintdrop from "../../assets/Services/Icons/012.svg";
// import paintingChild from "../../assets/Services/Images/05.png";
// import handes from "../../assets/Services/Icons/09.svg";
// import chess from "../../assets/Services/Images/03.png";
// import dentist from "../../assets/Services/Images/04.png";
// import fan from "../../assets/Services/Images/06.png";
// import kidPainting from "../../assets/Services/Images/07.png";
// import upper from "../../assets/Services/Icons/upper.svg";
// import lower from "../../assets/Services/Icons/lower.svg";
// import garden from "../../assets/Services/Images/09.png";
// import Foam from "../../assets/Services/Images/011.png";
// import Leather from "../../assets/Services/Images/012.png";
// import SoltSand from "../../assets/Services/Images/013.png";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className=" w-[80%] mx-auto  flex items-center justify-between p-6 text-black">
        <img src={logo} alt="Logo" className="h-8 mr-4" />{" "}
        {/* Added margin-right */}
        <div
          className={` ${isOpen ? "flex" : "hidden"} md:flex md:items-center`}
        >
          {/* Changed flex-grow to flex for better control and added md:items-center */}
          <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto">
            {/* Added width control */}
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 block text-center md:inline"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-300 block text-center md:inline"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-300 block text-center md:inline"
              >
                PROGRAMS
              </Link>
            </li>
            <li>
              <Link
                to="/whoweare"
                className="hover:text-gray-300 block text-center md:inline"
              >
                WHO WE ARE
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 block text-center md:inline"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black my-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </nav>
      {/*------------------------------------- Landing Spot -------------------------------------*/}
      <div>
        <div className=" h-[40vh] w-[70%] mx-auto flex flex-col items-start justify-end  space-y-6 ">
          <img src={landingLogo} className="w-48" />
          <h1 className=" text-6xl lg:text-7xl text-custom-beige font-bold  md:pl-5">
            OUR <br /> SERVICES
          </h1>
        </div>
      </div>
      {/*------------------------------------- Intervention -------------------------------------*/}
      <div className=" my-20 lg:my-60">
        {/* Intervention Container */}
        <div className=" maincontainer ">
          {/* Left Side */}
          <div className="p-9 lg:pl-16 ">
            <div className="text-custom-orange">
              <h1 className="text-2xl lg:text-5xl font-bold">Intervention</h1>
              <p className="font-extralight text-3xl">PROGRAM</p>
              <p className="mt-6 mb-4">
                Our experienced interdisciplinary team provides <br />
                advanced, innovative assessment and intervention <br />
                methods in various areas, engaging children in <br />
                enjoyable ways to help them become lifelong learners.
              </p>
              <p className="font-bold">
                Our programs benefits all ages from birth to adulthood.
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className=" h-full w-2/4 relative hidden lg:block">
            <img
              src={Img5}
              className="w-full absolute bottom-0 right-0 hidden lg:block"
            />
            <img src={Img4} className="absolute top-[50%]" />
            <img />
          </div>
        </div>
      </div>
      {/*------------------------------------- Sensory Integration -------------------------------------*/}
      <div className="secondryContainer flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:justify-between  ">
        {/* Left Side Div */}
        <div className="text-custom-orange">
          {/* Header Div */}
          <div className="flex space-x-4 mb-6 ">
            <div>
              <p className="text-md font-extralight">INTERVENTION PROGRAM</p>
              <h1 className="text-4xl font-bold ">
                Sensory <br />
                Integration
              </h1>
            </div>
            <img src={BrainLogo} />
          </div>
          {/* Text Div */}
          <div className="flex flex-col space-y-5">
            <p>
              Sensory integration therapy aims to intervene with <br />
              children having sensory processing challenges, such <br />
              as having difficulty with organizing and responding <br />
              to information coming from our sense
            </p>
            <p>
              The child may be oversensitive, under-sensitive to <br />
              a sensory input, or both. and this may be evident in <br />
              his overall behaviour
            </p>
            <p>
              Sensory integration intervention includes structured <br />
              exposure to sensory input, movement therapy, Balance <br />
              treatments, together with carefully designed and <br />
              customized physical activities and accommodation
            </p>
          </div>
        </div>
        {/* Right Side Div */}
        <div className=" w-full lg:w-2/3 flex justify-center lg:justify-end ">
          <img src={KidsPhoto1} className="" />
        </div>
      </div>
      {/*------------------------------------- Physical Therapy -------------------------------------*/}
      <div className="physicalDiv">
        <div className="physicalInnerDiv">
          {/* Header */}
          <div className="h-1/3 flex items-center text-custom-beige">
            <div className="physicalHeader">
              <p className="text-sm font-extralight">INTERVENTION PROGRAM</p>
              <h1 className=" text-4xl font-bold leading-[3rem]">
                Physical <br />
                Therapy
              </h1>
            </div>
            <img src={pullUp} />
          </div>
          {/* TextBox */}
          <div className="h-2/3 border-t-4 border-custom-beige flex flex-col lg:flex-row lg:justify-between space-y-5 lg:space-y-0 py-5   text-white ">
            {/* Left Side */}
            <div className="space-y-5 ">
              <p className="text-custom-beige leading-8">
                Physical therapists work with children to identify <br />
                movement and gross motor difficulties. Aiming <br />
                to facilitate and achieve their full potential with <br />
                functional mobility
              </p>
              <p className="leading-8">
                Our Team can assess, diagnose and treat <br />
                a wide variety of movement disorders <br />
                and difficulties, such as :
              </p>
            </div>
            {/* Right Side */}
            <div className="">
              <ul className="space-y-5 leading-9 custom-bullet-list">
                <li>
                  Children who are having difficulty coordinating motor <br />
                  skills such as jumping or stair climbing
                </li>
                <li>
                  Babies who are slower to reach their motor milestones. <br />
                  eg: head control, sitting or walking
                </li>
                <li>
                  Children who use unusual patterns of movement. <br />
                  eg: bottom shuffling or toe walking
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Photo Section */}
        <div className="h-1/3 relative hidden lg:block">
          <img src={kidfoot} className="absolute left-80 top-9" />
          <img src={sun} className="absolute right-[38rem] top-[15rem]" />
          <img />
        </div>
      </div>
    </div>
  );
};

export default Services;
