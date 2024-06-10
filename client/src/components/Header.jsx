import Logo from "./Logo";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import SearchBar from "./SearchBar";
import { paddingX } from "../styles/padding";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div
      className={`z-50 border-b border-slate-300 shadow-xl fixed top-0 left-0 w-full bg-white flex gap-3 flex-col md:flex-row justify-center md:justify-between items-center  py-2 ${paddingX}`}
    >
      <Logo />

      <SearchBar />

      <Nav />
    </div>
  );
};

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:flex items-center gap-5 text-3xl">
      <CiHeart
        onClick={() => navigate("/wishlist")}
        className="hover:text-pink-600 cursor-pointer"
      />
      <PiShoppingCartSimpleLight
        onClick={() => navigate("/cart")}
        className="hover:text-blue-600 cursor-pointer"
      />
      <CiUser
        onClick={() => navigate("/account")}
        className="hover:text-orange-600 cursor-pointer"
      />
    </div>
  );
};

export default Header;
