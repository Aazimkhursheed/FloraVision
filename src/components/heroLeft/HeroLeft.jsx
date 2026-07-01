import { FaPlay } from "react-icons/fa";

function HeroLeft() {
  return (
    <div className="pt-16">

      <h1 className="max-w-[520px] text-[88px] font-bold leading-[0.95] tracking-[-3px] text-white">
        Earth's Exhale
      </h1>

      <p className="mt-6 max-w-[470px] text-[20px] leading-10 text-gray-300">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's
        natural environment and its essential role in sustaining life.
      </p>

      <div className="mt-10 flex items-center gap-7">

        <button className="rounded-xl border border-white px-9 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#162414]">
          Buy Now
        </button>

        <button className="flex items-center gap-4 group">

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#162414]">
            <FaPlay className="ml-1 text-sm" />
          </div>

          <span className="text-lg text-white">
            Live Demo...
          </span>

        </button>

      </div>

    </div>
  );
}

export default HeroLeft;