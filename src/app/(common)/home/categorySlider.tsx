"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategorySlider = () => {
  const categories = [
    { name: 'Electronics', image: 'https://via.placeholder.com/100?text=Electronics' },
    { name: 'Fashion', image: 'https://via.placeholder.com/100?text=Fashion' },
    { name: 'Luxury', image: 'https://via.placeholder.com/100?text=Luxury' },
    { name: 'Home Decor', image: 'https://via.placeholder.com/100?text=Home+Decor' },
    { name: 'Health & Beauty', image: 'https://via.placeholder.com/100?text=Health+&+Beauty' },
    { name: 'Groceries', image: 'https://via.placeholder.com/100?text=Groceries' },
    { name: 'Sneakers', image: 'https://via.placeholder.com/100?text=Sneakers' },
    { name: 'Electronics', image: 'https://via.placeholder.com/100?text=Electronics' },
    { name: 'Fashion', image: 'https://via.placeholder.com/100?text=Fashion' },
 
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Explore Popular Categories</h2>
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">View All</a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          340: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        className="category-swiper pb-10"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="flex flex-col h-40 items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="mt-2 text-sm text-gray-600">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        /* Move pagination bullets further down for this slider only */
        .category-swiper :global(.swiper-pagination) {
          bottom: -12px;
        }
      `}</style>
    </div>
  );
};

export default CategorySlider;
