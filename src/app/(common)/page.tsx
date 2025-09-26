import dynamic from "next/dynamic";
import SecondHeader from "@/components/ui/modiule/second-headeer/second_header";
import BannerHome from "./home/banner";

// Dynamic imports for heavy components
const CategorySlider = dynamic(() => import("./home/categorySlider"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>,
  ssr: false
});

const TodayDealsSection = dynamic(() => import("./home/todayDealsSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const PromoCards = dynamic(() => import("./home/promoCards"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});
  const deals = [
    {
      name: 'Samsung Galaxy S24 Ultra 12-GB Titanium Gray...',
      price: '999.99 AED',
      originalPrice: '(1,299)',
      image: 'https://via.placeholder.com/150?text=Samsung+S24',
      rating: 4.5,
      reviews: '(123)',
    },
    {
      name: 'Nike Jordan Brooklyn Fleece Men\'s Pullover Hoodie...',
      price: '45.00 AED',
      originalPrice: '(59)',
      image: 'https://via.placeholder.com/150?text=Nike+Hoodie',
      rating: 4.8,
      reviews: '(456)',
    },
    {
      name: 'Beanless Bag Inflatable Lounge Chair Grey',
      price: '32.00 AED',
      originalPrice: '(40)',
      image: 'https://via.placeholder.com/150?text=Beanbag',
      rating: 4.2,
      reviews: '(78)',
    },
    {
      name: 'Diamond Stud Earrings (1/3 ct. tw) in 14K White, Yellow or Rose Gold',
      price: '298.00 AED',
      image: 'https://via.placeholder.com/150?text=Earrings',
      rating: 4.9,
      reviews: '(45)',
    },
    {
      name: 'Nike Invincible 3 Premium',
      price: '190 AED',
      image: 'https://via.placeholder.com/150?text=Nike+Shoes',
      rating: 4.7,
      reviews: '(157)',
    },
  ];
export default function Home() {
  return (
    <section>
      <SecondHeader />
      <BannerHome />
      <CategorySlider />
      <TodayDealsSection products={deals} title="Today Best Deals For Yuou!"/>
      <PromoCards/>
      <TodayDealsSection products={deals} title="60% Off Or more On Winter-wear"/>
      <TodayDealsSection products={deals} title="Best Sellers In Beauty & Healts"/>
    </section>
  );
}
