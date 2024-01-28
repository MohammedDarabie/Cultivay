import { useEffect } from "react";
import Header from "./Components/Header";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default Contact;
