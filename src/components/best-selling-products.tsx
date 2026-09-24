"use client";

import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Eye, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
];

export default function BestSellingProducts() {
  return (
    <section className="w-full bg-gray-100">
      <div className="container w-11/12 mx-auto py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Best Selling Products
          </h2>
          <button className="secondary-2 text px-8 py-2 text-lg rounded-sm">View All</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {PRODUCTS.map((product) => {
    const {
      id,
      name,
      image,
      description,
      rating,
      reviews,
      price,
      oldPrice,
      sold,
      total,
    } = product;

    return (
      <Card
        key={id}
        className="rounded-xl p-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-gray-100">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              width={300}
              height={200}
            />

            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs py-1 px-2 rounded-sm">
              -40%
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>

            {/* Quick View Button */}
            <button className="absolute top-14 right-3 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors">
              <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
            </button>

            {/* Add to Cart Button (Animated) */}
            <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm py-2 cursor-pointer opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
              Add to Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="px-4 py-4 space-y-3">
            {/* <p className="text-xs text-gray-500 line-clamp-1">{description}</p> */}

            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
              {name}
            </h3>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-gray-900">
                {rating}
              </span>
              <span className="text-xs text-gray-500">
                ({reviews || "0"})
              </span>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-red font-semibold text-sm">${price}</span>
              {oldPrice && (
                <span className="text-gray-400 line-through text-xs">
                  {oldPrice}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  })}
</div>


      </div>
        <hr className="border-t border-gray-300" />
    </section>
  );
}
