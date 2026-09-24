import { FaTruck, FaHeadset, FaShieldAlt } from "react-icons/fa";

export default function ServiceFeatures() {
  const features = [
    {
      icon: <FaTruck size={28} />,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadset size={28} />,
      title: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "MONEY BACK GUARANTEE",
      text: "We return money within 30 days",
    },
  ];

  return (
    <section className="py-12 w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white">
                {feature.icon}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
