import { aglaonema } from "../../assets/images";
import { FiChevronRight } from "react-icons/fi";

function HeroRight() {
  return (
    <div className="relative h-[420px] w-[315px] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

      {/* Plant */}
      <img
        src={aglaonema}
        alt="Aglaonema Plant"
        className="absolute left-1/2 top-[-28px] w-[245px] -translate-x-1/2 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
      />

      {/* Content */}
      <div className="absolute bottom-10 left-8 right-8">

        <p className="text-sm font-normal text-gray-400">
          Indoor Plant
        </p>

        <h2 className="mt-3 text-[22px] font-semibold leading-tight text-white">
          Aglaonema plant
        </h2>

        <div className="mt-8 flex items-center justify-between">

          <button className="rounded-xl border border-white/80 px-7 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#152516]">
            Buy Now
          </button>

          <button className="rounded-full p-2 text-white transition-all duration-300 hover:translate-x-1 hover:text-green-400">
            <FiChevronRight size={24} />
          </button>

        </div>

      </div>

      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">

        <span className="h-[3px] w-7 rounded-full bg-white"></span>

        <span className="h-2 w-2 rounded-full bg-white/40"></span>

        <span className="h-2 w-2 rounded-full bg-white/40"></span>

      </div>

    </div>
  );
}

export default HeroRight;