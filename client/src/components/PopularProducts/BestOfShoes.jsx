import ProductGroup from "../ProductGroup";
import data from "../../data.json";

const BestOfShoes = () => {
  return <ProductGroup title="Best of Shoes" data={data?.slice(0, 4)} />;
};

export default BestOfShoes;
