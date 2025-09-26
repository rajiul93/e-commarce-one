import dynamic from "next/dynamic";
import SecondHeader from "@/components/ui/modiule/second-headeer/second_header";
import BannerHome from "./home/banner";
import { deals } from "@/data/deals";

// Dynamic imports for heavy components
const CategorySlider = dynamic(() => import("./home/categorySlider"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
  // Removed ssr: false - not allowed in server components
});

const TodayDealsSection = dynamic(() => import("./home/todayDealsSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

const PromoCards = dynamic(() => import("./home/promoCards"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
});

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