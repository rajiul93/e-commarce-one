import Image from "next/image";

const ProductBanner = () => {
  return (
    <div className="relative   w-full h-48  mt-2 md:mt-4  rounded-lg overflow-hidden bg-primary/10">
      <Image
        src="https://via.placeholder.com/1600x600?text=Product+Banner"
        alt="product banner"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover"
      />
    </div>
  );
};
export default ProductBanner;
