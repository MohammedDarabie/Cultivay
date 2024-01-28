import Landing from "../../assets/About/banner-image.png";
import { useState, useEffect } from "react";
import Logo from "../../assets/Contact/Group541.png";
import Menu from "../../assets/Contact/menu.svg";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/About/01.svg";
import top from "../../assets/About/top.svg";
import bottom from "../../assets/About/bottom.svg";
import one from "../../assets/About/04.svg";
import two from "../../assets/About/06.svg";
import three from "../../assets/About/07.svg";
import values1 from "../../assets/About/011.svg";
import values2 from "../../assets/About/12.svg";
import values3 from "../../assets/About/013.svg";
import values4 from "../../assets/About/014.svg";
import values5 from "../../assets/About/015.svg";
import values6 from "../../assets/About/016.svg";
import Footerpic from "../../assets/About/017.svg";
import Group776 from "../../assets/Contact/Group776.png";
import instagram from "../../assets/Contact/instagram.svg";
import linkedin from "../../assets/Contact/linkedin-circle.svg";
import mail from "../../assets/Contact/mail.svg";
import website from "../../assets/Contact/website.svg";
const AboutUs = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleMenu = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div className="font-sans">
        {/* Header */}
        <header className="relative p-5">
          {/* Background Image with Filter */}
          <div
            style={{
              backgroundImage: `url(${Landing})`,
              height: "100vh",
              backgroundSize: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
            }}
          />

          {/* Nav Section */}
          {/* Nav Section */}
          <div className="flex justify-between items-center z-10 md:w-[90%] lg:w-[80%] mx-auto">
            <img src={Logo} alt="Student Logo" className="h-16 p-2  md:mx-0" />

            {/* Toggling menu visibility on smaller screens */}
            <img
              src={Menu}
              alt="Menu"
              className="h-10 text-black md:hidden"
              onClick={toggleMenu}
            />

            {/* Navigation items */}
            <nav
              className={`list-none ${
                hidden ? "hidden" : "flex"
              } flex-col md:flex-row justify-between space-x-0 md:space-x-8 lg:space-x-10 text-black font-bold`}
            >
              <Link to={"/"}>HOME</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/services"}>SERVICES</Link>
              <Link to={"/whoweare"}>WHO WE ARE</Link>
              <Link to={"/contact"}>CONTACT</Link>
            </nav>
          </div>

          {/* Landing Body Section */}
          <div className=" w-[75%] mx-auto lg:mt-40 mb-72 z-10 space-y-10">
            <img src={Logo1} className="lg:w-64" />
            <h1 className="text-custom-orange text-6xl md:text-7xl lg:text-[12rem] font-bold">
              ABOUT
              <br /> US
            </h1>
          </div>
        </header>
      </div>
      <section className="bg-[#efeeea]">
        <div>
          <img src={top} alt="Student Logo" className="" />
          <div className="bg-custom-orange w-full p-8">
            <div className="text-[#f2d499] w-[90%] lg:w-[70%]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-14 justify-center gap-x-0 md:gap-x-36 space-y-16 lg:space-y-0">
              {/* First Item */}
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <p className="text-4xl ">
                    Our <br /> Belief
                  </p>
                  <img src={one} className="mb-5" />
                </div>
                <p className="leading-7 text-xl">
                  At Cultivay, we believe that every child deserves a safe and
                  nurturing environment that encourages self- expression,
                  discovery experimentation, learning and self-reliance
                </p>
              </div>
              {/* Second Item */}
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <p className="text-4xl">
                    Our <br />
                    Approach
                  </p>
                  <img src={two} className="mb-5" />
                </div>
                <p className="leading-7 text-xl">
                  In our approach, we guide children to lead their own learning
                  journeys. Our collaborative interdisciplinary team works
                  diligently to provide innovative assessment and interventions
                  in various areas, including gross and fine motor skills,
                  social and communication skills, cognitive development
                  programs, and sensory integration
                </p>
              </div>
              {/* Third Item */}
              <div className="">
                <div className="flex justify-between items-center">
                  <p className="text-4xl">
                    Our <br /> Goal
                  </p>
                  <img src={three} className="mb-5" />
                </div>
                <p className="leading-7 text-xl">
                  Our primary goal is to foster the growth and development of
                  children and explore their unique potentials and abilities. We
                  encourage children to explore the world around them and most
                  importantly, discover their unique personality traits and
                  interests
                </p>
              </div>
            </div>
          </div>
          <img src={bottom} alt="Student Logo" className=" -mt-3" />
        </div>
      </section>
      <section className="bg-[#efeeea]">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto pt-20 space-y-28">
          <div className="space-y-10">
            <h1 className="text-6xl font-bold">
              Mission, <br />
              Vision, And Values
            </h1>
            <p className="text-2xl ">
              <b>Together</b>, we work tirelessly to achieve continuous <br />
              development in the lives of children, thereby <br /> contributing
              to building a better future for them.
            </p>
          </div>
          {/* Space 2 Divs */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="space-y-10">
              <h1 className="text-6xl text-custom-orange font-bold">
                Our <br />
                Mission
              </h1>
              <p className="text-2xl leading-9">
                At Cultivay, we believe that the highest level of learning{" "}
                <br />
                doesn’t just happen at the desk. Instead, it occurs in <br />{" "}
                everyday life through interactive activities, play, <br />
                exploration, and active engagement with the
                <br /> environment. We strive to be a source of inspiration for
                <br /> self-directed learning and to embrace children’s
                <br /> ownership of their educational paths.
              </p>
            </div>
            <div className="space-y-10">
              <h1 className="text-6xl text-custom-orange font-bold">
                Our <br />
                Vision
              </h1>
              <p className="text-2xl leading-9 ">
                To be the leading hub for childhood development in
                <br /> the region that firmly stands for inclusion, equity, and
                <br /> embracing diversity through holistic and specialized
                <br /> programs, cultivating children to become valued and
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto mt-20">
          <h1 className="text-6xl text-custom-orange font-bold my-14">
            Our <br /> Values
          </h1>
          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-96 space-y-5">
            {/* /* ------------------------------- First Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">Equity</div>

              <div className="flex items-center space-x-10">
                <img src={values1} />
                <p className="leading-7">
                  Equity is at the core of our mission. <br /> We strive to
                  provide equal opportunities <br /> for all children to thrive
                  and reach their
                  <br />
                  full potential
                </p>
              </div>
            </div>
            {/* /* ------------------------------- Second Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">
                Innovation
              </div>

              <div className="flex items-center space-x-10">
                <img src={values2} />
                <p className="leading-7">
                  We are committed to staying at the leading hub <br />
                  of childhood development. Continuously seeking <br />
                  Innovative approaches and advanced intervention <br />
                  Methods to ensure that our programs are effective <br />
                  and engaging, driving lasting improvements.
                </p>
              </div>
            </div>
            {/* /* ------------------------------- Third Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">
                Diversity + <br />
                Inclusion
              </div>

              <div className="flex items-center space-x-10">
                <img src={values3} />
                <p className="leading-7">
                  Our programs embrace children from <br />
                  All backgrounds, cultures, and abilities, <br />
                  Ensuring that each child feels welcomed, <br />
                  valued and respected.
                </p>
              </div>
            </div>
            {/* /* ------------------------------- Fourth Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">
                Development +
                <br />
                Empowerment
              </div>

              <div className="flex items-center space-x-10">
                <img src={values4} />
                <p className="leading-7">
                  Cultivay believes in nurturing children’s <br />
                  Curiosity and self direction, to enable them <br />
                  To become confident, self assured individuals, <br />
                  Ready to navigate the world with confidence.
                </p>
              </div>
            </div>
            {/* /* ------------------------------- Fifth Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">
                Individuality
              </div>

              <div className="flex items-center space-x-10">
                <img src={values5} />
                <p className="leading-7">
                  We respect and nurture each child’s <br />
                  unique abilities, challenges and <br />
                  interests, Tailoring our programs <br />
                  and services to meet their specific needs.
                </p>
              </div>
            </div>
            {/* /* ------------------------------- Sixth Value ------------------------------  */}
            <div className="text-custom-orange ">
              <div className="text-3xl font-bold z-10 leading-10">
                Child-Led Learning
              </div>

              <div className="flex items-center space-x-10">
                <img src={values6} />
                <p className="leading-7">
                  We prioritize the child’s interests, <br />
                  Curiosity, and unique learning style, <br />
                  And empower children to take charge <br />
                  Of their own learning journey. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#efeeea] pt-10">
        <img src={Footerpic} className="w-full" alt="footer" />
        <footer className=" -mt-2 flex flex-col md:flex-row bg-custom-green  justify-evenly items-center p-5">
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
      </section>
    </>
  );
};

export default AboutUs;
