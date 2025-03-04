import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow px-12 pt-20">
      <div className="flex flex-wrap gap-24 mb-16">
        <NavLinks />

        <ContactInfo />
      </div>

      <hr className=" bg-gray-300 h-px border-0 my-5" />

      <SocialLinks />

      <hr className=" bg-gray-300 h-px border-0 mb-3 mt-5" />

      <p className="container mx-auto  py-4 text-center text-gray-300 ease-out duration-300">
        &copy; 2024 OneShop
      </p>
    </footer>
  );
};

const NavLinks = () => {
  const navlist = [
    { to: "", title: "About us" },
    { to: "", title: "Contact us" },
    { to: "", title: "" },
  ];
  return (
    <div className=" w-fit">
      <Logo />
      <hr className=" w-24 bg-red-500 h-[2px] border-0 mb-3 mt-5" />
      <div className="flex flex-col text-white text-xl">
        {navlist.map((link, index) => (
          <Link
            to={link.to}
            key={index}
            className="hover:text-red-500 mb-3 ease-out duration-300 cursor-pointer"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-3 ">
        <LogoContainer>
          <FaFacebookF />
        </LogoContainer>
        <LogoContainer>
          <FaTwitter />
        </LogoContainer>
        <LogoContainer>
          <FaLinkedinIn />
        </LogoContainer>
        <LogoContainer>
          <FaGithub />
        </LogoContainer>
      </div>
    </div>
  );
};

const LogoContainer = ({ children }) => {
  return (
    <div className="text-xl text-gray-400 hover:text-primary-600 hover:border-primary-500 cursor-pointer border-2 border-gray-400 p-2 rounded-full">
      {children}
    </div>
  );
};

export default Footer;
