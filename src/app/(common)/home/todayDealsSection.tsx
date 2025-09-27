import React from "react"; 
import Link from "next/link"; 
import { TProduct } from "@/type/product.type";
import ProductCard from "@/components/ui/modiule/poductCard";

interface TodayDealsSectionProps {
  category?: string;
  title: string;
  products: TProduct[];
}

const TodayDealsSection: React.FC<TodayDealsSectionProps> = React.memo(
  ({ title, products, category }) => {
    return (
      <div className="container mx-auto px-4 lg:px-0  mt-2 md:mt-4 lg:mt-6 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <Link
            href={`/product?categoroy=${category}`}
            className="text-primary hover:text-primary text-sm"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((deal, index) => (
            <ProductCard key={index} product={deal} />
          ))}
        </div>
      </div>
    );
  }
);

TodayDealsSection.displayName = "TodayDealsSection";

export default TodayDealsSection;
