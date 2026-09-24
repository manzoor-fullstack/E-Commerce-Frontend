import { Button } from "@/components/ui/button";
import HeroSection from "../components/HeroSection";
import FlashSaleSection from "../components/FlashSaleSection";
import { TodaysForYou } from "../components/Todays-for-you";
import BrowseByCategory from "../components/browse-by-category";
import BestSellingProducts from "../components/best-selling-products";
import MusicExperience from "../components/music-experience";
import OurProducts from "../components/our-products";
import NewArrival from "../components/newArrival";
import ServiceFeatures from "../components/serviceFeatures";


export default function Page() {
  return (
    <>
      <HeroSection />
      <FlashSaleSection />
      <TodaysForYou />
      <BrowseByCategory />
      <BestSellingProducts />
      <MusicExperience />
      <OurProducts />
      <NewArrival />
      <ServiceFeatures />
    </>
  )
}
