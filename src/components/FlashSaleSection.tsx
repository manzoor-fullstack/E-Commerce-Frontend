import { CarouselSpacing } from "./CarouselSpacing";

 const products = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
      name: "EliteShield Performance Men's Jackets",
      price: "PKR255.000",
      oldPrice: "PKR525.000",
      sold: 9,
      total: 10,
      rating: 4.8,
      reviews: 324,
      description: "Premium quality jacket with superior comfort",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
      name: "Gentlemen's Summer Gray Hat",
      price: "PKR99.000",
      oldPrice: "PKR150.000",
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
      price: "PKR250.000",
      oldPrice: "PKR425.000",
      sold: 5,
      total: 10,
      rating: 4.9,
      reviews: 456,
      description: "Durable and spacious camera bag",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=400&q=80",
      name: "Cloudy Chic - Grey Peep Heeled Sandals",
      price: "PKR270.000",
      oldPrice: "PKR650.000",
      sold: 8,
      total: 10,
      rating: 4.7,
      reviews: 189,
      description: "Elegant and comfortable heeled sandals",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1514995669114-6081e934b693?auto=format&fit=crop&w=400&q=80",
      name: "Cloudy Chic - Grey Peep Heeled Sandals",
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
        "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
      name: "OptiZoom Camera Shoulder Bag",
      price: "PKR250.000",
      oldPrice: "PKR425.000",
      sold: 5,
      total: 10,
      rating: 4.9,
      reviews: 456,
      description: "Durable and spacious camera bag",
    },
  ];

export default function FlashSaleSection() {
  return (
    <>
      <section className="flash-sale-section bg-gray-100">
        <div className="container w-11/12 mx-auto py-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold mb-2">Flash Sale</h2>
            <div className="font-mono text-white text-lg font-bold rounded-full text-center secondary-2 p-2 w-10 h-10">
              08
            </div>
            <span className="font-bold text-xl">:</span>
            <div className="font-mono text-white text-lg font-bold rounded-full text-center secondary-2 p-2 w-10 h-10">
              17
            </div>
            <span className="font-bold text-xl">:</span>
            <div className="font-mono text-white text-lg font-bold rounded-full text-center secondary-2 p-2 w-10 h-10">
              56
            </div>
          </div>
          <CarouselSpacing 
          products={products}
          />
          <hr className="border-t border-gray-300" />
        </div>
      </section>
    </>
  );
}
