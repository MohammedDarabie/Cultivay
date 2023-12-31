import { useState } from "react";
import Landing from "../../../assets/Contact/kids-playing-table.png";
import Logo from "../../../assets/Contact/Group541.png";
import Logo1 from "../../../assets/Contact/Group650.png";
import emailLogo from "../../../assets/Contact/emailLogo.png";
import Phone from "../../../assets/Contact/Phone.png";
import WhatsApp from "../../../assets/Contact/WhatsApp.png";
import Location from "../../../assets/Contact/Location.png";
import Exclusion from "../../../assets/Contact/Exclusion.png";
import Menu from "../../../assets/Contact/menu.svg";
import Instagram from "../../../assets/Contact/Instagram.png";
import Group776 from "../../../assets/Contact/Group776.png";
import instagram from "../../../assets/Contact/instagram.svg";
import linkedin from "../../../assets/Contact/linkedin-circle.svg";
import mail from "../../../assets/Contact/mail.svg";
import website from "../../../assets/Contact/website.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [hidden, setHidden] = useState(false);
  const toggleMenu = () => {
    setHidden(!hidden);
  };
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="relative p-5">
        {/* Background Image with Filter */}
        <div
          style={{
            backgroundImage: `url(${Landing})`,
            backgroundSize: "cover",
            filter: "contrast(60%)",
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
            className="h-10 text-white md:hidden"
            onClick={toggleMenu}
          />

          {/* Navigation items */}
          <nav
            className={`list-none ${
              hidden ? "hidden" : "flex"
            } flex-col md:flex-row justify-between space-x-0 md:space-x-8 lg:space-x-10 text-white font-bold`}
          >
            <Link to={"/"}>HOME</Link>
            <Link to={"/about"}>ABOUT</Link>
            <Link to={"/services"}>SERVICES</Link>
            <Link to={"/whoweare"}>WHO WE ARE</Link>
            <Link to={"/contact"}>CONTACT</Link>
          </nav>
        </div>

        {/* Landing Body Section */}
        <div className="w-[75%] mx-auto mt-40 mb-72 z-10 space-y-10">
          <img src={Logo1} className="lg:w-44" />
          <h1 className=" text-6xl md:text-7xl lg:text-8xl font-bold text-custom-beige">
            CONTACT
            <br /> US
          </h1>
          <p className="text-3xl font-bold text-custom-beige">
            REACH OUT, WE&apos;VE GOT YOU
          </p>
        </div>
      </header>
      {/* --------------------------- MAIN -------------------- */}
      <main className="bg-white pt-72">
        {/* Overlapping Rectangular Box */}
        <div className="bg-custom-green w-[75%] mx-auto -mt-80  rounded-3xl shadow-2xl p-10 flex flex-col space-x-10">
          {/* Two Columns Layout */}
          <div className="space-y-24 mx-auto ">
            {/*  Fields */}
            <div className="flex-1 w-[60%] md:w-[90%] mx-auto">
              <ul className="grid lg:grid-cols-2 justify-center mx-auto gap-5 gap-x-0  md:gap-x-20">
                {/*--------------- First Feild ---------------*/}
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-custom-beige rounded-full p-8 relative"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <img
                      className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2"
                      src={Instagram}
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </div>
                  <p className="text-white font-bold">cultivay.sa</p>
                </div>
                {/*--------------- Second Feild ---------------*/}
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-custom-beige rounded-full p-8 relative"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <img
                      className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2"
                      src={WhatsApp}
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </div>
                  <p className="text-white font-bold">+966 55550000</p>
                </div>
                {/*--------------- Third Feild ---------------*/}
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-custom-beige rounded-full p-8 relative"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <img
                      className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2"
                      src={emailLogo}
                      style={{ width: "60px", height: "50px" }}
                    ></img>
                  </div>
                  <p className="text-white font-bold">info@cultivay.com</p>
                </div>
                {/*--------------- Fourth Feild ---------------*/}
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-custom-beige rounded-full p-8 relative"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <img
                      className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2"
                      src={Phone}
                      style={{ width: "50px", height: "50px" }}
                    ></img>
                  </div>
                  <p className="text-white font-bold">+966 55550000</p>
                </div>
                {/*--------------- Fivth Feild ---------------*/}
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-custom-beige rounded-full p-8 relative"
                    style={{ width: "25px", height: "25px" }}
                  >
                    <img
                      className="absolute top-10 left-10 transform -translate-x-1/2 -translate-y-1/2"
                      src={Location}
                      style={{ width: "45px", height: "50px" }}
                    ></img>
                  </div>
                  <p className="text-white font-bold">
                    Saudi Arabia, Khobar, Street 67
                  </p>
                </div>
              </ul>
            </div>
            {/* MAP */}
            <div className="w-auto md:h-[300px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.6568945035597!2d50.203817211275876!3d26.272796776938645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e82086e1ffb5%3A0x6607b67ca02dbd00!2sAl%20Khoubar%2C%20Al%20Khobar%20Al%20Janubiyah%2C%20Al%20Khobar!5e0!3m2!1sen!2ssa!4v1703703893259!5m2!1sen!2ssa"
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-20 ">
          <img src={Logo} className="mx-auto w-48 md:w-52 lg:w-80" />
        </div>
      </main>
      <img src={Exclusion} className="-mb-5" />
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
    </div>
  );
};

export default Header;
