import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

type Deal = {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  rating?: number;
  reviews?: string;
};

interface TodayDealsSectionProps {
  title: string;
  products: Deal[];
}

const TodayDealsSection: React.FC<TodayDealsSectionProps> = React.memo(({ title, products }) => {
  return (
    <div className="container mx-auto px-4 lg:px-0  mt-2 md:mt-4 lg:mt-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Link href="/all-deals" className="text-primary hover:text-primary text-sm">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((deal, index) => (
          <div
            key={index}
            className="border rounded-sm lg:rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={deal.image}
                alt={deal.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
              <span className="absolute top-2 right-2 bg-primary/10 text-gray-700 text-xs flex justify-center items-center h-6 w-6 rounded-full z-10">
                <FaRegHeart className="text-sm" />
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-sm text-gray-600 line-clamp-2">{deal.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-lg font-bold text-gray-900">{deal.price}</span>
                {deal.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {deal.originalPrice}
                  </span>
                )}
              </div>

              {deal.rating && (
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-gray-600 text-sm ml-1">{deal.rating}</span>
                  <span className="text-gray-500 text-xs ml-1">{deal.reviews}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

TodayDealsSection.displayName = 'TodayDealsSection';

export default TodayDealsSection;
