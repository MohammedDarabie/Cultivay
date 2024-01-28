import diversity from "../../../assets/HomePage/aboutrectangle/DIVERSITY.svg";
import INNOVATION from "../../../assets/HomePage/aboutrectangle/INNOVATION.svg";
import INDIVIDUALITY from "../../../assets/HomePage/aboutrectangle/INDIVIDUALITY.svg";
import empowerment from "../../../assets/HomePage/aboutrectangle/empowerment.svg";
import cultivay from "../../../assets/HomePage/aboutrectangle/cultivay.svg";
import icon11 from "../../../assets/HomePage/about/11.svg";
import icon12 from "../../../assets/HomePage/about/12.svg";
import icon21 from "../../../assets/HomePage/about/21.svg";
import icon22 from "../../../assets/HomePage/about/22.svg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <div className="h-[10vh] relative">
        {/* Rectangle */}
        <div className="absolute left-[23%] -top-12 bg-[#5f7766] w-[55%] mx-auto  rounded-3xl shadow-md">
          <div className=" hidden lg:flex  lg:flex-row justify-evenly px-12 py-9">
            <img src={diversity} />
            <img src={INNOVATION} />
            <img src={empowerment} />
            <img src={INDIVIDUALITY} />
          </div>
        </div>
      </div>
      <div>
        {/*----------------------------------------------- Logo Div -----------------------------------------------*/}
        <div className="my-24">
          <img className="mx-auto" src={cultivay} />
          <p className="text-center font-bold">
            Cultivay is a bilingual childhood <br></br>
            development center based in Jeddah, Saudi Arabia.
          </p>
        </div>
        {/*----------------------------------------------- What and Why Cultivay -----------------------------------------------*/}
        <div className="flex flex-col lg:flex-row justify-evenly w-[90%] lg:w-[50%] mx-auto mb-64 space-y-12 lg:space-y-0">
          {/* Left Side */}
          <div>
            {/* First Div */}
            <div className="text-[#566c5c] space-y-10 font-bold">
              <p className="font-bold text-5xl">
                What is <br /> Cultivay?
              </p>
              <div className="flex items-start space-x-4">
                <img className="" src={icon11} />
                <p>
                  Cultivay is a safe place where children can design, <br />
                  express, and explore, offering endless opportunities <br />
                  where they can learn about the world, relationships, <br />
                  and most importantly, themselves.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <img className="" src={icon12} />
                <p>
                  We follow a child-led approach, allowing children <br />
                  to truly lead their own learning journeys. We provide <br />
                  advanced and innovative evaluation and intervention <br />
                  approaches through an experienced interdisciplinary <br />
                  team of professionals
                </p>
              </div>
            </div>
            {/* Second Div */}
          </div>
          {/* Right Side */}
          <div className="text-[#566c5c] space-y-10 font-bold flex flex-col">
            <p className="font-bold text-5xl">
              Why <br /> Cultivay?
            </p>
            <div className="flex items-start space-x-4">
              <img className="" src={icon21} />
              <p>
                Our collaborative interdisciplinary team guide <br />
                children to lead their own learning journeys <br />
                to foster their growth and development, and <br />
                explore their unique potentials and abilities
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <img className="" src={icon22} />
              <p>
                We encourage children to explore the world <br />
                around them and most importantly, discover <br />
                their unique personality traits and interests
              </p>
            </div>
            <div className="mx-auto mt-5">
              <button className="bg-custom-beige px-12 py-5 rounded-3xl font-bold shadow-xl hover:shadow-2xl">
                <Link to={"/services"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
