import Logo from "../../assets/Contact/Group541.png";
import Landing from "../../assets/WhoweAre/01.svg";
import smallLogo from "../../assets/WhoweAre/03.svg";
import afnanPic from "../../assets/WhoweAre/06.png";
import nourPic from "../../assets/WhoweAre/07.png";
import hands from "../../assets/WhoweAre/015.svg";
import Group776 from "../../assets/Contact/Group776.png";
import Menu from "../../assets/Contact/menu.svg";
import { useState } from "react";
import instagram from "../../assets/Contact/instagram.svg";
import linkedin from "../../assets/Contact/linkedin-circle.svg";
import mail from "../../assets/Contact/mail.svg";
import website from "../../assets/Contact/website.svg";
import { Link } from "react-router-dom";
const WhoWeAre = () => {
  const [hidden, setHidden] = useState(false);
  const toggleMenu = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <header className="p-5">
        <nav className="flex flex-col lg:flex-row justify-between space-x-10 items-center px-20">
          <div>
            <img className=" lg:h-16 p-2  md:mx-0" src={Logo}></img>
          </div>
          <img
            src={Menu}
            alt="Menu"
            className="h-10 text-black md:hidden mx-auto "
            onClick={toggleMenu}
          />
          <ul
            className={`list-none ${
              hidden ? "hidden" : "flex"
            } flex-col md:flex-row justify-between space-x-0 md:space-x-8 lg:space-x-10 text-black font-bold`}
          >
            <Link to={"/"}>HOME</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/programs"}>PROGRAMS</Link>
            <Link to={"/whoweare"}>WHO WE ARE</Link>
            <Link to={"/contact"}>CONTACT</Link>
          </ul>
        </nav>
      </header>
      <section className="">
        <div className="w-[90%] ml-auto flex justify-between mt-10 lg:mt-20">
          <div className=" mt-16">
            <img src={smallLogo} className=" lg:w-44" />
            <h1 className=" text-5xl md:text-7xl lg:text-9xl font-bold  text-[#7a9280]">
              WHO<br></br>WE<br></br>ARE
            </h1>
          </div>
          <div className="flex justify-between ">
            <div className=" h-full"></div>
            <img src={Landing} className="-mt-12 lg:-mt-48 lg:ml-48" />
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <main className="mb-12">
        <div className="w-[90%] mx-auto lg:space-y-36">
          {/* First Div */}
          <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-36 text-[#7a9280] w-[80%] mx-auto">
            <img src={afnanPic}></img>
            <div>
              <div className="space-y-5 my-5">
                <h1 className=" text-4xl lg:text-7xl font-bold">
                  Afnan Alamoudi
                </h1>
                <p className="text-xl lg:text-2xl font-semibold">
                  Hello, Im Afnan Alamoudi, Aboudis Mother,<br></br> and the
                  founder of Cultivay
                </p>
              </div>
              <div className="space-y-5 text-lg lg:text-2xl">
                <p>
                  The unconditional love emanating from Aboudis eyes gave me the
                  strength that I never knew I had, and it was the primary
                  motivation for the beginning of my Journey
                </p>
                <p>
                  Aboudis first smile was the starting point and the inspiration
                  behind establishing Cultivay. After a long journey of pursuing
                  experienced therapists around the world, each offering unique
                  intervention methods, I witnessed great benefits that had a
                  positive impact on my sons development.
                </p>
                <p>
                  From there, I decided to create Cultivay, a place that brings
                  together these experiences under one roof, to share my journey
                  to inspire parents and their children to reach their full
                  potential and achieve continuous growth in their lives.
                </p>
              </div>
            </div>
          </div>
          {/* Second div */}
          <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-36 text-[#7a9280] w-[80%] mx-auto">
            <div className="pb-5 md:pb-0">
              <div className="space-y-5 my-5">
                <h1 className="text-4xl lg:text-7xl font-bold">Nour Emad</h1>
                <p className="text-xl lg:text-2xl font-semibold">
                  Hello, Im Nour Emad, a Speech and Swallowing pathologist and
                  the clinical director at Cultivay.
                </p>
              </div>
              <div className="space-y-5 text-lg lg:text-2xl">
                <p>
                  Cultivay is unleashing my dream to be part of a passionate
                  team of professionals.
                </p>
                <p>
                  My role at Cultivay is to utilize my extensive experience and
                  both local and international accreditations. But most
                  importantly, my focus is on sharing what I have been learning
                  from the children Ive been working with since the very
                  beginning.
                </p>
                <p>
                  My core values revolve around equity and inclusion, ensuring
                </p>
              </div>
            </div>
            <img src={nourPic}></img>
          </div>
        </div>
      </main>
      <main className="bg-[#f2d499] text-[#7a9280] ">
        <div className="flex flex-col p-5 lg:p-14 w-[80%] mx-auto space-y-10">
          <h3 className="text-6xl font-bold">
            Our <br></br> Team
          </h3>
          <div className="flex flex-col lg:flex-row justify-between mx-auto space-y-5 md:space-y-0 space-x-0 lg:space-x-10">
            {/* Team Card #1 */}
            <div>
              <img src={nourPic} className="w-[300px]" alt="" />
              <div className="my-5 space-y-5">
                <h1 className="font-bold text-2xl">Sarah Ahmad</h1>
                <p className="border-b border-gray-700 w-fit py-2">
                  General Manager
                </p>
                <p>Hello Im Sara</p>
              </div>
            </div>
            {/* Team Card #2 */}
            <div>
              <img src={nourPic} className="w-[300px]" alt="" />
              <div className="my-5 space-y-5">
                <h1 className="font-bold text-2xl">Sarah Ahmad</h1>
                <p className="border-b border-gray-700 w-fit py-2">
                  General Manager
                </p>
                <p>Hello Im Sara</p>
              </div>
            </div>
            {/* Team Card #3 */}
            <div>
              <img src={nourPic} className="w-[300px]" alt="" />
              <div className="my-5 space-y-5">
                <h1 className="font-bold text-2xl">Sarah Ahmad</h1>
                <p className="border-b border-gray-700 w-fit py-2">
                  General Manager
                </p>
                <p>Hello Im Sara</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className="text-[#7a9280] overflow-hidden">
        <div className="w-[70%] mx-auto mt-48 space-y-10">
          <h1 className="text-6xl font-bold">Join Our Team</h1>
          <div className="my-5 space-y-5">
            <p>
              Ready to make a difference? <br /> Join Cultivay and be part of
              our <br />
              exceptional team. We value innovation, <br /> collaboration, and
              personal growth.
            </p>
            <p>
              Explore our openings and <br />
              make your mark today
            </p>
          </div>
          <button className="bg-[#f2d499] px-10 py-5 rounded-3xl font-bold">
            Upload Your CV
          </button>
        </div>
        <img src={hands} className="mx-auto -mb-16 " />
      </main>
      <footer className=" flex flex-col md:flex-row bg-custom-green  justify-evenly items-center p-5">
        <div className="mb-5">
          <img src={Group776} className="w-40" />
        </div>
        <nav className="font-bold grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-x-5  text-white">
          <a>
            <img src={mail} alt="Email" className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a>
            <img
              src={website}
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
          <a>
            <img
              src={linkedin}
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
          <a>
            <img
              src={instagram}
              alt="Email"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default WhoWeAre;
