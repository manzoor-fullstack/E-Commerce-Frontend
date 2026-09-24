import { CarouselSpacing } from "./CarouselSpacing";
import { OurProductsCard } from "./ourProductCard";

const products = [
  {
    id: "1",
    name: "Breed Dry Dog Food",
    image: "/dog-food-package.png",
    rating: 3,
    reviews: 35,
    price: 100,
    description: "Premium dog food",
    isNew: false,
  },
  {
    id: "2",
    name: "CANON EOS DSLR Camera",
    image: "/dslr-camera.jpg",
    rating: 4,
    reviews: 95,
    price: 360,
    description: "Professional camera",
    isNew: false,
  },
  {
    id: "3",
    name: "ASUS FHD Gaming Laptop",
    image: "/gaming-laptop.png",
    rating: 5,
    reviews: 325,
    price: 700,
    description: "High performance laptop",
    isNew: false,
  },
  {
    id: "4",
    name: "Curology Product Set",
    image: "/skincare-products-display.png",
    rating: 4,
    reviews: 145,
    price: 500,
    description: "Skincare collection",
    isNew: false,
  },
  {
    id: "5",
    name: "Kids Electric Car",
    image: "/red-electric-car-toy.jpg",
    rating: 5,
    reviews: 65,
    price: 960,
    discount: "-40%",
    description: "Ride-on toy car",
    isNew: true,
    colors: ["#FF0000", "#DC143C"],
  },
  {
    id: "6",
    name: "Jr. Zoom Soccer Cleats",
    image: "/yellow-soccer-cleats.jpg",
    rating: 5,
    reviews: 35,
    price: 1160,
    description: "Youth soccer shoes",
    isNew: false,
    colors: ["#FFFF00", "#DC143C"],
  },
  {
    id: "7",
    name: "GP11 Shooter USB Gamepad",
    image: "/gaming-controller.png",
    rating: 4,
    reviews: 55,
    price: 660,
    description: "USB game controller",
    isNew: true,
    colors: ["#000000", "#DC143C"],
  },
  {
    id: "8",
    name: "Quilted Satin Jacket",
    image: "/green-quilted-jacket.jpg",
    rating: 4,
    reviews: 55,
    price: 660,
    description: "Premium jacket",
    isNew: false,
    colors: ["#1a4d3e", "#DC143C"],
  },
];



export default function OurProducts () {
    return (
        <>
          <section className="flash-sale-section bg-gray-100">
            <div className="container w-11/12 mx-auto py-12">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold mb-2">Explore Our Products</h2>
              </div>
              {/* <CarouselSpacing
              products={products}
              /> */}
              <OurProductsCard
              products={products}
              />
              <hr className="border-t border-gray-300" />
            </div>
          </section>
        </>
      );
}