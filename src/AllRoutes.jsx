import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import WhoWeAre from "./Pages/WhoWeAre/WhoWeAre";
export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
      </Routes>
    </BrowserRouter>
  );
};
