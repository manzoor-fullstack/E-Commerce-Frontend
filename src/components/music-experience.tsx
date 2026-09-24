import Image from "next/image";

export default function MusicExperience() {
  return (
    <section className="music-experience w-full py-12 bg-gray-100">
      <div className="container w-11/12 mx-auto py-12 bg-black">
        <div className="flex justify-center items-center w-11/12 mx-auto gap-4">
          {/* left side */}
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-8 mb-8">
              <span className="text-green">categories</span>
              <h1 className="text-6xl font-medium text space-x-1.5">
                Enhance Your <br /> Music Experience
              </h1>
              <div className="flex gap-6 items-center">
                <div className="flex flex-col justify-center items-center rounded-full w-[80] h-[80] text-center bg-white">
                  <p className="text-2xl font-medium">23</p>
                  <p className="text-sm font-normal font-sans">Hours</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-full w-[80] h-[80] bg-white">
                  <p className="text-2xl font-medium">05</p>
                  <p className="text-sm font-normal font-sans">Days</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-full w-[80] h-[80] bg-white">
                  <p className="text-2xl font-medium">45</p>
                  <p className="text-sm font-normal font-sans">Minutes</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-full w-[80] h-[80] bg-white">
                  <p className="text-2xl font-medium">22</p>
                  <p className="text-sm font-normal font-sans">Seconds</p>
                </div>
              </div>
            </div>
            <button className="px-12 py-2 btn-1 text rounded-sm cursor-pointer">
              Buy Now
            </button>
          </div>

          {/* right side */}
          <div className="flex-1 p-4">
            <div className="relative w-[520px] h-[500px]">
              <div className="absolute inset-0 bg-[#D9D9D9] opacity-30 blur-3xl rounded-full z-0"></div>

              <Image
                src="/music.png"
                alt="Music kit"
                width={600}
                height={100}
                className="relative w-full h-auto z-10 mx-auto mt-10 opacity-90 rotate-y-180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
