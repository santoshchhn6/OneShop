import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-300 text-gray-600  ">
      <Header />
      <div className="min-h-screen mt-[60px]">
        <Outlet />
      </div>
      <Footer />
      <NavBar />
    </div>
  );
};

export default Layout;
