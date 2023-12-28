/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="px-4 md:px-7 lg:px-16">
      <Header />
      <div style={{ height: "100vh" }}>{children}</div>
      <Footer />
    </div>
  );
};
