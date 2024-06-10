const ProductGroupLayout = ({ children }) => {
  return (
    <div className="grid gap-3 grid-cols-1  min-[1260px]:grid-cols-3">
      {children}
    </div>
  );
};

export default ProductGroupLayout;
