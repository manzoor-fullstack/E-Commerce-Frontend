import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  price: number | string;
  oldPrice?: number | string;
  description: string;
  isFavorited?: boolean;
}

interface CarouselSpacingProps {
  products: ProductCardProps[];
}

export function CarouselSpacing({products}: CarouselSpacingProps) {
 

  return (

      <div className="relative">
        <Carousel className="w-full py-4" align="start" loop>
          {/* Button Container */}
          <div className="absolute -top-5 right-2 flex items-center gap-2 z-10">
            <CarouselPrevious className="static transform-none bg-white hover:bg-gray-100 text-gray-700 shadow p-2 rounded-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" />
            <CarouselNext className="static transform-none secondary-2 hover:bg-red-300 hover:text-white text-white shadow p-2 w-18 rounded-none transition-all duration-200 disabled:bg-red-400 disabled:opacity-50 disabled:cursor-not-allowed" />
          </div>

          <CarouselContent className="-ml-1">
            {products.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 px-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="">
                  <Card className="rounded-xl p-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div className="relative overflow-hidden bg-gray-100">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
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
                        <button
                          className="absolute bottom-0 left-0 right-0 bg-black text-white text-lg py-1.5 cursor-pointer opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                        >
                          Add to Cart
                        </button>
                      </div>

                      {/* Product Details */}
                      <div className="px-4 py-4 space-y-3">
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {item.description}
                        </p>

                        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
                          {item.name}
                        </h3>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < Math.floor(item.rating)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-gray-900">
                            {item.rating}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({item.reviews})
                          </span>
                        </div>

                        {/* Price Section */}
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-red-600 font-bold text-sm">
                            {item.price}
                          </span>
                          <span className="text-gray-400 line-through text-xs">
                            {item.oldPrice}
                          </span>
                        </div>

                        <hr className="my-2" />

                        {/* Progress bar */}
                        <div className="space-y-1.5">
                          <Progress value={(item.sold / item.total) * 100} />
                          <p className="text-xs text-gray-500 font-medium">
                            {item.sold}/{item.total} Sold
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
       <div className="flex justify-center items-center py-8">
         <button className="py-2 px-6 secondary-2 text rounded-sm"> View All Products</button>
       </div>
      </div>
  );
}
