import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PromoCards = React.memo(() => {
  const cards = [
    {
      title: "Fresh and Healthy Vegetable",
      subtitle: "50% Save",
      image: "https://via.placeholder.com/300x400?text=Vegetables",
      link: "/shop/vegetables",
      bgColor: "bg-pink-300",
      textColor: "text-white",
    },
    {
      title: "Samsung Galaxy S24 FE",
      subtitle: "Galaxy AI is here",
      image: "https://via.placeholder.com/300x400?text=Samsung+S24+FE",
      link: "/shop/samsung",
      bgColor: "bg-blue-200",
      textColor: "text-gray-800",
    },
    {
      title: "عروض الكمية الضخمة",
      subtitle: "أفضل العروض اليومية",
      image: "https://via.placeholder.com/300x400?text=Pickles",
      link: "/shop/pickles",
      bgColor: "bg-red-300",
      textColor: "text-white",
    },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-0  mt-2 md:mt-4 lg:mt-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`overflow-hidden relative rounded-lg shadow-lg ${card.bgColor} transition-all duration-300 hover:shadow-xl p-0`}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                className="object-cover transition-opacity duration-500"
                priority={index === 0}
              />
            </div>

            <Button
              asChild
              variant="secondary"
              className="w-fit bg-primary text-white hover:bg-primary/80  absolute top-4/5 left-1/8 z-20"
            >
              <Link href={card.link} aria-label={`Shop ${card.title}`}>
                Shop now
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
});

PromoCards.displayName = 'PromoCards';

export default PromoCards;
