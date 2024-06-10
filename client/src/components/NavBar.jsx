import { useState } from "react";
import { CiGrid41, CiHeart, CiUser } from "react-icons/ci";
import { PiHouseLineLight, PiShoppingCartSimpleLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const activeStyle = "bg-white text-primary ";
  const inactiveStyle = "text-white";
  const hoverStyle =
    "hover:bg-white hover:text-primary cursor-pointer p-2 rounded-full duration-300 ease-in-out";
  return (
    <div className="md:hidden py-3 bg-primary  fixed bottom-0 left-0 w-screen px-3 flex justify-between items-center   text-5xl  ">
      <PiHouseLineLight
        className={`${hoverStyle} ${
          active === "home" ? activeStyle : inactiveStyle
        }`}
        onClick={() => {
          setActive("home");
          navigate("/");
        }}
      />
      <CiGrid41
        className={`${hoverStyle} ${
          active === "categories" ? activeStyle : inactiveStyle
        }`}
        onClick={() => {
          setActive("categories");
          navigate("/product_categories");
        }}
      />
      <CiHeart
        className={`${hoverStyle} ${
          active === "liked" ? activeStyle : inactiveStyle
        }`}
        onClick={() => {
          setActive("liked");
          navigate("/wishlist");
        }}
      />
      <PiShoppingCartSimpleLight
        className={`${hoverStyle} ${
          active === "cart" ? activeStyle : inactiveStyle
        }`}
        onClick={() => {
          setActive("cart");
          navigate("/cart");
        }}
      />
      <CiUser
        className={`${hoverStyle} ${
          active === "account" ? activeStyle : inactiveStyle
        }`}
        onClick={() => {
          setActive("account");
          navigate("/account");
        }}
      />
    </div>
  );
};

export default NavBar;
