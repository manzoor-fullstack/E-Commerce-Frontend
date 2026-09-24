"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  // Dummy slides (replace with your real banners)
  const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=80",
    title: "Step into Comfort",
    subtitle: "Discover the latest sneakers collection",
    button: "Shop Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1500&q=80",
    title: "Elevate Your Style",
    subtitle: "Trendy outfits for every season",
    button: "Explore Collection",
  },
  {
    image:
      "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=format&fit=crop&w=1500&q=80",
    title: "Accessories That Shine",
    subtitle: "Find the perfect finishing touch",
    button: "Shop Accessories",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618354691271-5b7ccf5c3561?auto=format&fit=crop&w=1500&q=80",
    title: "Smart Watches Collection",
    subtitle: "Stay connected in style with our new arrivals",
    button: "Shop Watches",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1500",
    title: "Classic Leather Bags",
    subtitle: "Carry elegance wherever you go",
    button: "View Collection",
  },
];


  return (
    <section className="hero-section relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-90"
                  priority
                />
                {/* Overlay content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/20"
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-3 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    {slide.button}
                  </Button>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <CarouselPrevious className="left-4 bg-white/60 hover:bg-white text-black" />
        <CarouselNext className="right-4 bg-white/60 hover:bg-white text-black" />
      </Carousel>

      {/* Dots indicator */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === i + 1 ? "bg-blue-600 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
