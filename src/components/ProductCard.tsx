"use client";

import { useState } from "react";
import { Eye, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  price: number;
  oldPrice?: number;
  description: string;
  isFavorited?: boolean;
}

export function ProductCard({
  id,
  name,
  image,
  rating,
  reviews,
  sold,
  total,
  price,
  oldPrice,
  description,
  isFavorited = false,
}: ProductCardProps) {
  const [favorited, setFavorited] = useState(isFavorited);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const formatSold = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  return (
    // <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">

    //   <div className="relative bg-gray-200 aspect-square overflow-hidden">
    //     <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />

    //     <button
    //       onClick={() => setFavorited(!favorited)}
    //       className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
    //       aria-label="Add to wishlist"
    //     >
    //       <Heart size={20} className={favorited ? "fill-red-500 text-red-500" : "text-gray-400"} />
    //     </button>
    //   </div>

    //   <div className="p-4">
    //     <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">{name}</h3>

    //     {/* Rating and Sold */}
    //     <div className="flex items-center gap-1 mb-3">
    //       <div className="flex items-center gap-0.5">
    //         <Star size={14} className="fill-yellow-400 text-yellow-400" />
    //         <span className="text-xs font-medium text-gray-700">{rating}</span>
    //       </div>
    //       <span className="text-xs text-gray-500">{formatSold(sold)} Sold</span>
    //     </div>

    //     <div className="flex items-baseline gap-2">
    //       <span className="font-bold text-gray-900">{formatPrice(price)}</span>
    //       {originalPrice && <span className="text-xs text-gray-400 line-through">{formatPrice(originalPrice)}</span>}
    //     </div>
    //   </div>
    // </div>

    <div className="">
      <Card className="rounded-xl p-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-0">
          {/* Product Image */}
          <div className="relative overflow-hidden bg-gray-100">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-68 object-cover group-hover:scale-105 transition-transform duration-300"
              width={192}
              height={58}
            />
            <div className="absolute top-3 left-3 secondary-2 text py-1 px-2 rounded-sm">
              -40%
            </div>
            <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
            </button>

            <button className="absolute top-15 right-3 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors">
              <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500 " />
            </button>
            {/* Add to Cart Button (Animated) */}
            <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-lg py-1.5 cursor-pointer opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
              Add to Cart
            </button>
          </div>

          {/* Product Details */}
          <div className="px-4 py-4 space-y-3">
            <p className="text-xs text-gray-500 line-clamp-1">{description}</p>

            <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
              {name}
            </h3>

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
              <span className="text-xs text-gray-500">({reviews})</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-red-600 font-bold text-sm">{price}</span>
              <span className="text-gray-400 line-through text-xs">
                {oldPrice}
              </span>
            </div>

            <hr className="my-2" />

            {/* Progress bar */}
            <div className="space-y-1.5">
              <Progress value={(sold / total) * 100} />
              <p className="text-xs text-gray-500 font-medium">
                {sold}/{total} Sold
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
