"use client";

import { useState } from "react";
import { ProductCard } from "../components/ProductCard";

const FILTER_BUTTONS = [
  "Best Seller",
  "Keep Stylish",
  "Special Discount",
  "Official Store",
  "Coveted Product",
];


const PRODUCTS = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "UrbanEdge Men's Jeans Collection",
    price: 255000,
    oldPrice: 525000,
    sold: 9,
    total: 10,
    rating: 4.8,
    reviews: 324,
    description: "Premium quality jacket with superior comfort",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Essentials Men's Long-Sleeve Oxford Shirt",
    price: 99000,
    oldPrice: 150000,
    sold: 9,
    total: 10,
    rating: 4.6,
    reviews: 218,
    description: "Stylish and breathable summer essential",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    name: "OptiZoom Camera Shoulder Bag",
    price: 250000,
    oldPrice: 425000,
    sold: 5,
    total: 10,
    rating: 4.9,
    reviews: 456,
    description: "Durable and spacious camera bag",
  },
  {
    id: "4",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "StyleHaven Men's Fashionable Sneakers",
    price: 270000,
    oldPrice: 650000,
    sold: 8,
    total: 10,
    rating: 4.7,
    reviews: 189,
    description: "Elegant and comfortable heeled sandals",
  },
  {
    id: "5",
    image:
      "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    name: "Essential Long-Sleeve Crewneck Shirt for Men",
    price: "PKR270.000",
    oldPrice: "PKR650.000",
    sold: 8,
    total: 10,
    rating: 4.7,
    reviews: 189,
    description: "Elegant and comfortable heeled sandals",
  },
  {
    id: "6",
    image:
      "https://images.pexels.com/photos/998398/pexels-photo-998398.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "ClassicGent Men's Formal Shoes",
    price: "PKR250.000",
    oldPrice: "PKR425.000",
    sold: 5,
    total: 10,
    rating: 4.9,
    reviews: 456,
    description: "Durable and spacious camera bag",
  },
  {
    id: "7",
    name: "ChicCarry - Elegant Women's Tote Collection",
    image: "https://images.pexels.com/photos/3182366/pexels-photo-3182366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    sold: 500,
    total: 1000,
    price: 650000,
    reviews: 456,
    oldPrice: "PKR725000",
  },
  {
    id: "8",
    name: "Sophisticated Women's Parka Line",
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    sold: 100,
    total: 1000,
    price: 324000,
    reviews: 123,
    oldPrice: 650000,
  },
];

export function TodaysForYou() {
  const [activeFilter, setActiveFilter] = useState("Best Seller");

  return (
    <section className="w-full bg-gray-100">
      <div className="w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Today's For You!
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {FILTER_BUTTONS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-sm font-medium text-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="flex justify-center items-center py-12">
         <button className="py-2 px-6 secondary-2 text rounded-sm"> View All Products</button>
       </div>
        <hr className="border-t border-gray-300" />
      </div>
    </section>
  );
}
