import Image from "next/image";

export default function NewArrival() {
  return (
    <section className="w-full bg-gray-100 py-12">
        <div className="container w-11/12 mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">New Arrival</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Big Card */}
        <div className="relative overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1630905119003-329447458f85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1161"
            alt="PlayStation 5"
            width={800}
            height={800}
            className="object-cover w-full h-[500px] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm text-gray-200 max-w-xs">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Top Right — Women's Collections */}
          <div className="relative overflow-hidden group sm:col-span-2">
            <Image
              src="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1000&q=80"
              alt="Women's Collections"
              width={800}
              height={400}
              className="object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm text-gray-200">
                Featured woman collections that give you another vibe.
              </p>
              <button className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Left — Speakers */}
          <div className="relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Speakers"
              width={400}
              height={400}
              className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">Speakers</h3>
              <p className="text-sm text-gray-200">Amazon wireless speakers</p>
              <button className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Bottom Right — Perfume */}
          <div className="relative overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1511923199659-1c16881689de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt="Perfume"
              width={400}
              height={400}
              className="object-cover w-full h-[240px] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-semibold">Perfume</h3>
              <p className="text-sm text-gray-200">GUCCI INTENSE OUD EDP</p>
              <button className="mt-3 text-sm font-semibold underline underline-offset-4 hover:text-gray-300 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
