import data from "../data.json";
import Product from "./Product";

const ProductList = () => {
  return (
    <div className="grid gap-3 grid-col-1 min-[550px]:grid-cols-2 min-[820px]:grid-cols-3 xl:grid-cols-4 min-[2300px]:grid-cols-5 min-[2900px]:grid-cols-6 justify-center">
      {data?.map((e) => (
        <Product key={e?.id} {...e} />
      ))}
    </div>
  );
};

export default ProductList;
