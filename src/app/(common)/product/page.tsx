import { Suspense } from "react";
import Products from "./poducts";
import ProductBanner from "./productBanner";

const Product = () => {
  return (
    <div className="px-4 lg:px-0">
      <ProductBanner />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
};
export default Product;
