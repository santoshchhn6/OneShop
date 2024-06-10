import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import { padding } from "../styles/padding";
import ProductList from "../components/ProductList";
import PopularElectronics from "../components/PopularProducts/PopularElectronics";
import PopularKitchenProducts from "../components/PopularProducts/PopularKitchenProducts";
import PopularHealthcareProducts from "../components/PopularProducts/PopularHealthcareProducts";
import BestOfShoes from "../components/PopularProducts/BestOfShoes";
import ProductGroupLayout from "../components/ProductGroupLayout";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.username) navigate("/login");
    toast(`Welcome ${user?.username}`, {
      position: "top-right",
    });
  }, [navigate]);

  return (
    <div className="">
      <Banner />
      <div className={`space-y-5 ${padding} `}>
        <PopularElectronics />
        <PopularKitchenProducts />
        <PopularHealthcareProducts />
        <ProductGroupLayout>
          <BestOfShoes />
          <BestOfShoes />
          <BestOfShoes />
        </ProductGroupLayout>
        <ProductGroupLayout>
          <BestOfShoes />
          <BestOfShoes />
          <BestOfShoes />
        </ProductGroupLayout>
        <PopularElectronics />
        <PopularKitchenProducts />
        <PopularHealthcareProducts />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
