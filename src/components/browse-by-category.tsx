"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Smartphone,
  Monitor,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  Shirt,
  Heart,
  Tv,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const categories: Category[] = [
  { id: "1", name: "Phones", icon: <Smartphone className="w-8 h-8" /> },
  { id: "2", name: "Computers", icon: <Monitor className="w-8 h-8" /> },
  { id: "3", name: "SmartWatch", icon: <Watch className="w-8 h-8" /> },
  {
    id: "4",
    name: "Camera",
    icon: <Camera className="w-8 h-8" />,
    featured: true,
  },
  { id: "5", name: "HeadPhones", icon: <Headphones className="w-8 h-8" /> },
  { id: "6", name: "Gaming", icon: <Gamepad2 className="w-8 h-8" /> },

  // New categories
  { id: "7", name: "Home Appliances", icon: <Tv className="w-8 h-8" /> },
  { id: "8", name: "Fashion", icon: <Shirt className="w-8 h-8" /> },
  { id: "9", name: "Beauty & Health", icon: <Heart className="w-8 h-8" /> },
];


export default function BrowseByCategory() {
  return (
    <>
      <section className="w-full bg-gray-100 ">
      <div className="container w-11/12 mx-auto py-8"> 
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Browse By Category
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative pt-8 pb-20">
          <Carousel className="w-full " align="start" loop>
            <div className="flex items-center absolute -top-12 right-2 gap-2">
             <CarouselPrevious className="static transform-none bg-white hover:bg-gray-100 text-gray-700 shadow p-2 rounded-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" />
            <CarouselNext className="static transform-none secondary-2 hover:bg-red-300 hover:text-white text-white shadow p-2 w-18 rounded-none transition-all duration-200 disabled:bg-red-400 disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
            <CarouselContent className="-ml-2">
              {categories.map((category, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                >
                  <div
                    className={`flex flex-col items-center justify-center p-6 sm:p-8 rounded-lg border transition-all duration-300 ${
                      category.featured
                        ? "secondary-2 text-white shadow-lg"
                        : "bg-white border-gray-200 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`mb-3 flex items-center justify-center rounded-full p-3 transition-colors ${
                        category.featured
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-700 hover:text-red-500"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <p
                      className={`text-sm sm:text-base font-medium text-center ${
                        category.featured ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {category.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <hr className="border-t border-gray-300" />
      </div>
      </section>
    </>
  );
}
