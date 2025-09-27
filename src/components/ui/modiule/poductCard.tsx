import Image from "next/image"; 
import { TProduct } from "@/type/product.type";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      key={product.name}
      className="border rounded-sm lg:rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
        />
        <span className="absolute top-2 right-2 bg-primary/10 text-gray-700 text-xs flex justify-center items-center h-6 w-6 rounded-full z-10">
          <FaRegHeart className="text-sm" />
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm text-gray-600 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              {product.originalPrice}
            </span>
          )}
        </div>

        {product.rating && (
          <div className="flex items-center mt-1">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-600 text-sm ml-1">{product.rating}</span>
            <span className="text-gray-500 text-xs ml-1">
              {product.reviews}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
