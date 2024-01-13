import { Link } from "react-router-dom";

import logo from "../../../../assets/Contact/Group541.png";
import backgroundImage from "../../../../assets/HomePage/Home3.png";
const Landing3 = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <header className="bg-transparent w-[90%] lg:w-[60%]  mx-auto pt-12 flex justify-between items-center">
        <div className="logo">
          {/* Place your logo here */}
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <nav className="flex flex-col lg:flex-row gap-4  font-extrabold text-white">
          <Link to="/" className="hover:text-blue-600">
            HOME
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            ABOUT
          </Link>
          <Link to="/services" className="hover:text-blue-600">
            SERVICES
          </Link>
          <Link to="/who-we-are" className="hover:text-blue-600">
            WHO WE ARE
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            CONTACT
          </Link>
        </nav>
      </header>
      <div>
        <div className=" flex justify-end items-center w-[90%] md:w-[80%] lg:w-[70%] mt-60 ">
          <div className="flex flex-col justify-center items-center space-y-12">
            <p className="font-extrabold text-4xl lg:text-6xl text-custom-beige">
              Weekly Events <br />+ Announcements
            </p>
            <p className="font-extralight lg:text-3xl text-white">
              COMING SOON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing3;
