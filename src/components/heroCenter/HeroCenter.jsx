import { FaStar } from "react-icons/fa";
import { heroPlant, ronnie } from "../../assets/images";

function HeroCenter() {
  return (
    <div className="relative flex h-[560px] items-start justify-center">

      {/* Background Glow */}
      <div className="absolute top-12 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[120px]" />

      {/* Hero Plant */}
      <img
        src={heroPlant}
        alt="Hero Plant"
        className="relative z-10 mt-2 w-[520px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)]"
      />

      {/* Floating Review Card */}
      <div className="absolute left-0 top-[250px] z-20 w-[240px] rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.35)]">

        <div className="flex items-center gap-3">

          <img
            src={ronnie}
            alt="Ronnie Hamill"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>

            <h4 className="text-[16px] font-semibold text-white">
              Ronnie Hamill
            </h4>

            <div className="mt-1 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className="text-[11px] text-yellow-400"
                />
              ))}
            </div>

          </div>

        </div>

        <p className="mt-4 text-[13px] leading-6 text-gray-300">
          I can't express how thrilled I am with my new natural plants.
          They bring such a fresh and vibrant energy to my home.
        </p>

      </div>

      {/* Bottom Heading */}
      <h2 className="absolute bottom-2 text-[48px] font-semibold tracking-tight text-white">
        Our Trendy Plants
      </h2>

    </div>
  );
}

export default HeroCenter;