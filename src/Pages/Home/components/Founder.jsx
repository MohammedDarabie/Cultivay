import wave from "../../../assets/HomePage/wave.svg";
import holdingArms from "../../../assets/HomePage/holdingarms.png";
const Founder = () => {
  return (
    <div>
      <img src={wave} />
      <div className=" bg-[#7a9280] pb-24">
        <div className="flex flex-col-reverse space-y-12 lg:space-y-0 lg:flex-row gap-x-0 lg:gap-x-[9rem] w-[90%] md:w-[80%] lg:w-[60%] mx-auto justify-center items-center">
          {/* Left Div */}
          <div className="space-y-5">
            <h1 className="font-bold text-5xl text-custom-beige">
              The Founders <br /> Journey
            </h1>
            <p className="text-xl font-bold text-white">
              Hello, And Welcome To Cultivay! <br />
              I Am Afnan Alamoudi, Aboudi’s <br />
              Mother And The Founder Of Cultivay.
            </p>
            <p className="text-white font-semibold leading-9">
              The establishment of Cultivay was inspired by my son’s first{" "}
              <br />
              glance and his beautiful smile. My aim is to share my <br />
              experience, and create a welcoming environment where our <br />
              children can thrive and achieve their full potential, ensuring{" "}
              <br />
              that our services and activities meet their specific needs, <br />
              empower them, and help them achieve continuous growth.
            </p>
            <button className="px-12 py-5 bg-custom-beige text-custom-green font-extrabold rounded-3xl shadow-xl hover:shadow-2xl">
              Connect With Afnan
            </button>
          </div>
          {/* Right Div */}
          <div>
            <img src={holdingArms} className="mb-12 lg:mb-0 w-[30rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
