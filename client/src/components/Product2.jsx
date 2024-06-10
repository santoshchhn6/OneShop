const Product2 = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="bg-white border border-slate-300 min-w-[250px] w-[250px]  rounded-lg shadow-md p-3 space-y-2 cursor-pointer">
      <img
        src={image}
        alt=""
        className=" aspect-square object-contain mx-auto"
      />
      <p className="line-clamp-1">{title}</p>
      <p className="font-bold text-2xl text-slate-800">$ {price}</p>
    </div>
  );
};

export default Product2;
