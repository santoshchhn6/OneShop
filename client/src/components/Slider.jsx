import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Product2 from "./Product2";
import useWindowSize from "../utils/useWindowSize";
import { useState } from "react";

const Slider = ({ title, data }) => {
  const [translate, setTranslate] = useState(300);
  const { width } = useWindowSize();
  const cardWidth = 250;
  const gap = 12;
  const totalDataLenth = data?.length * (cardWidth + gap);

  const handleOnLeftClick = () => {
    if (translate - width >= 0) {
      setTranslate(translate - width);
    }
    if (translate - 2 * width < 0) {
      setTranslate(0);
    }
  };
  const handleOnRightClick = () => {
    if (translate + width <= totalDataLenth) {
      setTranslate(translate + width);
    }
    if (translate + 2 * width > totalDataLenth) {
      setTranslate(totalDataLenth - width);
    }
  };

  return (
    <div className="bg-white rounded-lg p-3">
      <h1 className="my-5 font-bold text-2xl">{title}</h1>
      <div className=" relative ">
        <div className="overflow-hidden">
          <div
            className="flex gap-3 duration-500 ease-in-out"
            style={{ translate: `-${translate}px` }}
          >
            {data?.map((e) => (
              <Product2 key={e?.id} {...e} />
            ))}
          </div>
        </div>
        <SliderButton position={"left"} onClick={handleOnLeftClick} />
        <SliderButton position={"right"} onClick={handleOnRightClick} />
      </div>
    </div>
  );
};

const SliderButton = ({ position, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-1/2 translate-y-[-50%] bg-white shadow-md w-20 h-24 border border-slate-300 ${
        position === "left" ? "rounded-r-lg left-0" : "rounded-l-lg right-0"
      } text-4xl flex justify-center items-center hover:text-slate-400 cursor-pointer`}
    >
      {position === "left" ? (
        <MdOutlineArrowBackIos />
      ) : (
        <MdOutlineArrowForwardIos />
      )}
    </div>
  );
};

export default Slider;
