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
import handes from "../../assets/Services/Icons/09.svg";
import chess from "../../assets/Services/Images/03.png";
import dentist from "../../assets/Services/Images/04.png";
import sunray from "../../assets/Services/Icons/013.svg";
import paintdrop from "../../assets/Services/Icons/012.svg";
import paintingChild from "../../assets/Services/Images/05.png";
import fan from "../../assets/Services/Images/06.png";
import kidPainting from "../../assets/Services/Images/07.png";
import upper from "../../assets/Services/Icons/upper.svg";
import lower from "../../assets/Services/Icons/lower.svg";
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
      {/*------------------------------------- Occupational Therapy -------------------------------------*/}
      <div className="occupational flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:justify-between  ">
        {/* Left Side Div */}
        <div className="text-custom-orange">
          {/* Header Div */}
          <div className="flex space-x-6 mb-6 ">
            <div>
              <p className="text-md font-extralight">INTERVENTION PROGRAM</p>
              <h1 className="text-4xl font-bold ">
                Occupational <br />
                Therapy{" "}
              </h1>
            </div>
            <img src={handes} />
          </div>
          {/* Text Div */}
          <div className="flex flex-col space-y-5">
            <p>
              Occupational therapy aims to assist children <br />
              to reach their full potential in daily living <br />
              activities and fine motor skills.
            </p>
            <h1>
              <b>Activities may include :</b>
            </h1>
            <ul className="custom-bullet-list space-y-5">
              <li>
                <b>Self Care</b> <br /> Such as independent feeding, using the{" "}
                <br />
                toilet and getting dressed.{" "}
              </li>
              <li>
                <b>Recreational activities</b> <br /> such as sports and playing
                with friends.
              </li>
            </ul>
          </div>
        </div>
        {/* Right Side Div */}
        <div className=" w-full lg:w-2/3 flex justify-center lg:justify-end ">
          <img src={chess} className="" />
        </div>
      </div>
      {/*------------------------------------- Speech+Swallowing Therapy -------------------------------------*/}
      <div className="Speech flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:justify-between my-20 lg:my-60 ">
        {/* Left Side Div */}
        <div className=" w-full lg:w-2/3 flex justify-center lg:justify-start ">
          <img src={dentist} className="" />
        </div>
        {/* Right Side Div */}
        <div className="text-custom-orange">
          {/* Header Div */}
          <div className="flex space-x-6 mb-6 ">
            <div>
              <p className="text-md font-extralight">INTERVENTION PROGRAM</p>
              <h1 className="text-4xl font-bold ">
                Speech <br />+ Swallowing
              </h1>
            </div>
            <img src={handes} />
          </div>
          {/* Text Div */}
          <div className="flex flex-col space-y-5">
            <p className="leading-9">
              Speech and language therapy provide life-changing <br />
              treatment, support and care children and adults who <br />
              have difficulties with communication, cognitive skills, <br />
              voice, feeding and swallowing
            </p>
          </div>
        </div>
      </div>
      {/*------------------------------------- Intervention -------------------------------------*/}
      <div className=" my-40  lg:my-60">
        {/* Intervention Container */}
        <div className=" maincontainer2 ">
          {/* Left Side */}
          <div className="p-9 lg:pl-16 ">
            <div className="text-custom-orange">
              <h1 className="text-2xl lg:text-5xl font-bold">Entertainment</h1>
              <p className="font-extralight text-3xl">PROGRAM</p>
              <p className="lg:mt-6 lg:mb-4 text-sm lg:text-2xl">
                Each space at Cultivay was designed by our educators <br />
                and professionals experienced in childhood well- <br />
                being, all of whom firmly believe that children are <br />
                independent thinkers. The outdoor and indoor spaces <br />
                provide limitless potential for our children, inspiring <br />
                their young minds to become self directed, to create <br />
                lasting memories and to immerse themselves in the <br />
                world of imagination
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className=" h-full w-2/4 relative hidden lg:block">
            <img
              src={sunray}
              className="w-full absolute -top-14 left-[5rem] hidden lg:block"
            />
            <img src={paintdrop} className="absolute -top-14 left-[30rem]" />
            <img src={paintingChild} className="absolute -top-28 left-[5rem]" />
            <img />
          </div>
        </div>
      </div>
      {/*------------------------------------- Hands-On-Activity Therapy -------------------------------------*/}
      <div className="activities flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:justify-between  ">
        {/* Left Side Div */}
        <div className="text-custom-orange">
          {/* Header Div */}
          <div className="flex space-x-6 mb-6 ">
            <div>
              <p className="text-md font-extralight">INTERVENTION PROGRAM</p>
              <h1 className="text-4xl font-bold ">Hands-On Activities</h1>
            </div>
          </div>
          {/* Text Div */}
          <div className="flex flex-col space-y-5">
            <p>
              Hands-on activities are educational or recreational <br />
              tasks that require active engagement and manipulation <br />
              of objects or materials using one’s hands <br />
            </p>
            <p>
              These activities typically involve direct physical <br />
              interaction with the subject matter, allowing children <br />
              to explore, experiment, and learn through first-hand <br />
              experience. To enhance understanding, promote critical <br />
              thinking, and develop practical skills.
            </p>
          </div>
        </div>
        {/* Right Side Div */}
        <div className=" w-full lg:w-2/3 flex justify-center lg:justify-end ">
          <img src={fan} className="" />
        </div>
      </div>
      {/* /* ------------------------------- Kid Drawing ------------------------------  */}
      <div>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto relative my-20 lg:my-60 ">
          <div className="absolute lg:left-[20%]">
            <img src={kidPainting} />
          </div>
          <div className="bg-custom-beige flex justify-center items-center w-fit p-5 lg:p-10 rounded-3xl absolute lg:left-[60%] top-[10rem] lg:top-[18rem]">
            <p className="lg:leading-6 text-[#899b83]">
              By immersing children in tactile <br />
              experiences, hands-on activities foster <br />
              a deeper level of engagement, stimulate <br />
              sensory perception, and facilitate the <br />
              acquisition of knowledge and skills in a <br />
              more interactive and memorable manner
            </p>
          </div>
        </div>
      </div>
      {/* /* -------------------------------- Seprator --------------------------------  */}
      <div className="h-[50vh]"></div>
      {/* /* ------------------------------- Wavy Section ------------------------------  */}
      <div className="my-20">
        <img src={upper} />
        <div className=" bg-[#f5e3bd] h-[100vh]"></div>
        <img src={lower} />
      </div>
    </div>
  );
};

export default Services;
