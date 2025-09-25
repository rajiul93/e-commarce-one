"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";

const BannerHome = () => {
  // ✅ শুধু একবারই plugin বানাও
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
    })
  );

  return (
    <section className="w-full  md:flex gap-4">
      <div className="md:w-2/3 rounded-lg">
        <Carousel
          plugins={[plugin.current]}         // ✅ ref এর instance use করো
          onMouseEnter={plugin.current.stop}  // ✅ এখন একই instance এ stop/reset
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden rounded-lg shadow-sm p-0">
                  <CardContent className="p-0">
                    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]">
                      <Image
                        src={`https://via.placeholder.com/1600x600?text=Slide+${index}`}
                        alt={`Promotional slide ${index}`}
                        fill
                        priority={index === 1}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 flex items-center">
                        <div className="px-4 sm:px-8 md:px-10 lg:px-12">
                          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                            Big Savings on Electronics
                          </h3>
                          <p className="text-white/90 mt-1 text-sm sm:text-base max-w-xl">
                            Upgrade your setup with exclusive deals. Limited time offers.
                          </p>
                          <button className="mt-3 inline-flex items-center rounded-full bg-primary px-4 py-2 text-white text-sm sm:text-base hover:opacity-90">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="md:w-1/3 rounded-lg overflow-hidden">
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]">
          <Image
            src="https://via.placeholder.com/800x600?text=Side+Promo"
            alt="Side promotion"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 34vw, 34vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="p-4 sm:p-6">
              <h4 className="text-white text-lg sm:text-xl font-semibold">Weekend Flash Sale</h4>
              <p className="text-white/90 text-sm">Up to 50% off selected items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
