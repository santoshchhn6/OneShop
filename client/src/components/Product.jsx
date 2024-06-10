const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className="bg-white border border-slate-300 w-full min-w-[180px]  max-w-[550px] rounded-lg shadow-md p-3 space-y-2 cursor-pointer">
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

export default Product;
