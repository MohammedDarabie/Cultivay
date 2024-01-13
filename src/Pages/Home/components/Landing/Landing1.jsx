import { Link } from "react-router-dom";

import logo from "../../../../assets/Contact/Group541.png";
import backgroundImage from "../../../../assets/HomePage/home1.png";
const Landing1 = () => {
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
        <nav className="flex flex-col lg:flex-row gap-y-2 lg:gap-4  font-extrabold text-custom-green">
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
          <div className="flex flex-col justify-center items-center space-y-5 lg:space-y-12">
            <p className=" text-xl lg:text-4xl font-extrabold">
              “ To Take Children Seriously Is To <br />
              Value Them For Who They Are <br />
              Right Now Rather Than Adults In <br />
              The Making.”
            </p>
            <button className="px-7 py-3 bg-custom-orange text-white font-extrabold rounded-2xl shadow-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing1;
