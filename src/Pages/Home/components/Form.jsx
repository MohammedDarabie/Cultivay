import { useState } from "react";
import painterKid from "../../../assets/HomePage/painterKid.svg";
import ray from "../../../assets/HomePage/rays.svg";
const Form = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formState);
  };
  return (
    <div className="">
      <div className=" w-[90%] md:w-[80%] lg:w-[60%] mx-auto my-24 flex flex-col lg:flex-row justify-between items-center">
        {/*----------------------------------------------- Left -----------------------------------------------*/}
        <div className="formContainer relative">
          <img src={ray} className="absolute -left-[4rem] -top-16" />
          <h1 className="text-custom-beige text-5xl font-extrabold leading-[3.5rem] ">
            Share your <br /> Thoughts with <br /> Cultivay!
          </h1>
          <form onSubmit={handleSubmit} className=" my-10 lg:w-[60%]">
            {/*----------------------------------------------- First and Last Name -----------------------------------------------*/}
            <div className="flex flex-col lg:flex-row justify-between lg:space-x-7">
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-md"
                />
              </div>
            </div>
            {/*----------------------------------------------- Phone and Email -----------------------------------------------*/}
            <div className="flex flex-col lg:flex-row justify-between lg:space-x-7">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-md"
                />
              </div>
            </div>
            {/*----------------------------------------------- Text Area -----------------------------------------------*/}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                className="w-full p-2 border border-black rounded-md h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mx-auto  bg-custom-beige hover:bg-custom-beige text-custom-green font-extrabold  py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
        {/*----------------------------------------------- Image -----------------------------------------------*/}
        <div className="flex-1 mx-12">
          <img src={painterKid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
