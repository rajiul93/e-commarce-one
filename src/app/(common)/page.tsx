import SecondHeader from "@/components/ui/modiule/second-headeer/second_header";
import BannerHome from "./home/banner";
import CategorySlider from "./home/categorySlider";

export default function Home() {
  return (
    <section>
      <SecondHeader />
      <BannerHome />
      <CategorySlider />
    </section>
  );
}
