import { Link } from "react-router-dom";

import logo from "../../../../assets/Contact/Group541.png";
import backgroundImage from "../../../../assets/HomePage/Home2.png";
const Landing2 = () => {
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
        <div className=" flex w-[90%] md:w-[80%] lg:w-[50%] mx-auto">
          <div className="flex text-custom-beige font-extrabold text-2xl lg:text-5xl mt-64 ">
            <p>
              Where Every Child Finds <br />
              Their Own Learning Journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
