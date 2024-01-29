import InterventionProgramPic from "../../../assets/HomePage/intervention.jpeg";
import cultivayBg from "../../../assets/HomePage/cultivayBackground.svg";
import sensory from "../../../assets/HomePage/sensory.svg";
import speech from "../../../assets/HomePage/speech.svg";
import physical from "../../../assets/HomePage/physical.svg";
import occupational from "../../../assets/HomePage/occupational.svg";
import messyplay from "../../../assets/HomePage/messyplay.png";
import mudHouse from "../../../assets/HomePage/mudHouse.png";
import greenHouse from "../../../assets/HomePage/greenHouse.png";
import messy from "../../../assets/HomePage/messy.svg";
import mud from "../../../assets/HomePage/mud.svg";
import green from "../../../assets/HomePage/greenHouse.svg";
import homeendingpic from "../../../assets/HomePage/1.png";
import { Link } from "react-router-dom";
// import mudHouse from '../../../assets/HomePage/mudHouse.png'
const OurServices = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute -right-10 -z-10">
        <img src={cultivayBg} />
      </div>
      <div className="w-[90%] md:w-[70%] lg:w-[50%] mx-auto py-40">
        {/* Our Services Header */}
        <div className="text-custom-green space-y-5 ">
          <h1 className="font-extrabold text-5xl lg:text-7xl">
            Our <br /> Services
          </h1>
          <p className="font-bold">
            Each space at Cultivay was designed <br />
            by our educators and professionals <br />
            experienced in childhood well-being
          </p>
        </div>
        {/* Intervention Card */}
        <div className="interventionCard lg:w-[90%] mx-auto">
          {/* Text Side */}
          <div className=" p-5 lg:p-12 space-y-8">
            <h1 className="text-4xl lg:text-5xl my-5 lg:my-0 font-extrabold text-custom-beige">
              Intervention <br /> Program
            </h1>
            <p className="text-white font-bold">
              Our experienced interdisciplinary team provides <br />
              advanced and innovative assessment and intervention <br />
              methods in various areas, engaging children in <br />
              enjoyable ways to help them become lifelong learners
            </p>
          </div>
          {/* Photo Side */}
          <div className="overflow-hidden">
            <img
              src={InterventionProgramPic}
              className="lg:h-[25rem] rounded-r-xl "
            />
          </div>
        </div>
        {/* Therapy Types */}
        <div className="bg-[#eae6db] rounded-3xl shadow-2xl my-24 lg:my-0">
          <div className="w-[90%] mx-auto p-12 flex flex-col lg:flex-row space-y-10 lg:space-y-0  justify-evenly text-custom-green">
            {/* First */}
            <div className="flex flex-col justify-evenly items-center space-y-6">
              <img src={sensory} />
              <h1 className="font-extrabold">Sensory Integration</h1>
              <button className="font-bold px-5 py-3 bg-custom-beige rounded-xl shadow-2xl">
                <Link to={"/services"}>Read More</Link>
              </button>
            </div>
            {/* First */}
            <div className="flex flex-col justify-evenly items-center space-y-6">
              <img src={physical} />
              <h1 className="font-extrabold">Physical Therapy</h1>
              <button className="font-bold px-5 py-3 bg-custom-green text-custom-beige rounded-xl shadow-2xl">
                <Link to={"/services"}>Read More</Link>
              </button>
            </div>
            {/* First */}
            <div className="flex flex-col justify-evenly items-center space-y-6">
              <img src={occupational} />
              <h1 className="font-extrabold">Occupational Therapy</h1>
              <button className="font-bold px-5 py-3 bg-white rounded-xl shadow-2xl">
                <Link to={"/services"}>Read More</Link>
              </button>
            </div>
            {/* First */}
            <div className="flex flex-col justify-evenly items-center space-y-6">
              <img src={speech} />
              <h1 className="font-extrabold">Speech and Swallowing</h1>
              <button className="px-5 py-3 font-bold bg-custom-orange text-custom-beige rounded-xl shadow-2xl">
                <Link to={"/services"}>Read More</Link>
              </button>
            </div>
          </div>
        </div>
        {/* Card Number 2 */}
        <div className="Entertainment-based lg:w-[90%] mx-auto">
          {/* Text Side */}
          <div className=" p-5 lg:p-12 space-y-8">
            <h1 className="text-4xl lg:text-5xl my-5 lg:my-0 font-extrabold text-custom-beige">
              Entertainment-based <br />
              Learning Program
            </h1>
            <p className="text-white font-semibold">
              outdoor spaces and indoor spaces providing limitless <br />
              learning opportunities for the young minds.
            </p>
          </div>
        </div>
      </div>
      {/* Photos Slideshow */}
      <div className="flex flex-col  lg:flex-row justify-center items-center lg:space-x-12">
        <div>
          <img src={messyplay} className="mx-auto" />
          <div className="flex  justify-center  lg:space-x-5 items-center my-5">
            <img src={messy} />
            <h1 className="text-custom-green font-extrabold text-xl">
              Messy Play
            </h1>
          </div>
        </div>
        <div>
          <img src={mudHouse} className="mx-auto" />
          <div className="flex  justify-center lg:space-x-5 items-center my-5">
            <img src={mud} />
            <h1 className="text-custom-green font-extrabold text-xl">
              Mud House
            </h1>
          </div>
        </div>
        <div>
          <img src={greenHouse} className="mx-auto" />
          <div className="flex  justify-center lg:space-x-5 items-center my-5">
            <img src={green} />
            <h1 className="text-custom-green font-extrabold text-xl">
              Green House
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5 lg:my-24">
        <button className="mx-auto text-center bg-custom-beige text-custom-green font-extrabold px-5 py-3 rounded-3xl shadow-xl hover:shadow-2xl">
          Explore Mode
        </button>
      </div>
      <div className="">
        <img src={homeendingpic} className="w-[100%] mx-auto"></img>
      </div>
    </div>
  );
};

export default OurServices;
