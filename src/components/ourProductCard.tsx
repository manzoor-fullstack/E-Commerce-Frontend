import { Card, CardContent } from "@/components/ui/card"
import { Eye, Heart, Star } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  id: string
  name: string
  image: string
  rating: number
  reviews: number
  price: number | string
  oldPrice?: number | string
  description: string
  isFavorited?: boolean
  isNew?: boolean
  discount?: string
  colors?: string[]
}

interface OurProductsCardProps {
  products: ProductCardProps[]
}

export function OurProductsCard({ products }: OurProductsCardProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {products.map((item, index) => (
          <div key={index}>
            <Card className="rounded-lg p-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border-0">
              <CardContent className="p-0">
                {/* Product Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={300}
                  />

                  {item.isNew && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded">
                      NEW
                    </div>
                  )}

                  {item.discount && (
                    <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold py-1 px-2 rounded">
                      {item.discount}
                    </div>
                  )}

                  {/* Heart Icon */}
                  <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>

                  {/* Eye Icon */}
                  <button className="absolute top-12 right-3 bg-white rounded-full p-2 shadow-md hover:bg-blue-100 transition-colors">
                    <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
                  </button>

                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white text-sm font-semibold py-2 cursor-pointer opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    Add to Cart
                  </button>
                </div>

                {/* Product Details */}
                <div className="px-4 py-4 space-y-3">
                  {/* Product Name */}
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">{item.name}</h3>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-bold text-base">${item.price}</span>
                    {item.oldPrice && <span className="text-gray-400 line-through text-sm">${item.oldPrice}</span>}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({item.reviews})</span>
                  </div>

                  {/* {item.colors && item.colors.length > 0 && (
                    <div className="flex items-center gap-2 pt-2">
                      {item.colors.map((color, idx) => (
                        <button
                          key={idx}
                          className="w-5 h-5 rounded-full border-2 border-gray-300 hover:border-gray-600 transition-colors"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  )} */}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* View All Products Button */}
      <div className="flex justify-center items-center py-8">
        <button className="py-2 px-8 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition-colors">
          View All Products
        </button>
      </div>
    </div>
  )
}
