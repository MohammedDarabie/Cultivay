import AboutSection from "./components/AboutSection";
import Form from "./components/Form";
import Founder from "./components/Founder";
import LandingSection from "./components/LandingSection";
import OurServices from "./components/OurServices";

const Home = () => {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <Founder />
      <OurServices />
      <Form />
    </div>
  );
};

export default Home;
