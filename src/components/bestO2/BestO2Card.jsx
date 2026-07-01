import { aglaonema } from "../../assets/images";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function BestO2Card() {
  return (
    <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="grid min-h-[410px] grid-cols-[42%_58%]">

        {/* Left Side */}

        <div className="relative">

          <img
            src={aglaonema}
            alt="Best O2 Plant"
            className="absolute -bottom-12 left-2 w-[520px] object-contain drop-shadow-[0_40px_55px_rgba(0,0,0,0.45)]"
          />

        </div>

        {/* Right Side */}

        <div className="flex flex-col justify-center py-10 pr-12">

          <h3 className="max-w-[320px] text-[28px] font-semibold leading-[1.35] text-white">
            We Have Small And Best O2 Plants Collection's
          </h3>

          <p className="mt-6 max-w-[470px] text-[15px] leading-9 text-gray-300">
            Oxygen-producing plants, often referred to as "O2 plants,"
            are those that release oxygen into the atmosphere through
            the process of photosynthesis.
          </p>

          <p className="mt-5 max-w-[470px] text-[15px] leading-9 text-gray-300">
            Many plants can help filter out pollutants and toxins from
            the air, such as formaldehyde, benzene, and
            trichloroethylene. This makes the air cleaner and healthier
            to breathe.
          </p>

          <div className="mt-10 flex max-w-[500px] items-center justify-between">

            <button className="rounded-lg border border-white px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#162414]">
              Explore
            </button>

            <div className="flex items-center gap-6">

              <FiArrowLeft className="cursor-pointer text-xl text-gray-400 transition hover:text-white" />

              <span className="text-sm font-medium text-gray-300">
                01/04
              </span>

              <FiArrowRight className="cursor-pointer text-xl text-white transition hover:text-green-400" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BestO2Card;