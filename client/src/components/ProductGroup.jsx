import Product from "./Product";

const ProductGroup = ({ title, data }) => {
  return (
    <div className="bg-white p-3 shadow-md rounded-lg">
      <h1 className="my-2 font-bold text-2xl">{title}</h1>
      <div className="grid gap-3 grid-cols-1 min-[440px]:grid-cols-2 min-[840px]:grid-cols-4  min-[1250px]:grid-cols-2 ">
        {data?.map((e) => (
          <Product key={e.id} {...e} />
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
