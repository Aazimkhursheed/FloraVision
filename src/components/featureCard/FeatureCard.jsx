import { FaShoppingBag } from "react-icons/fa";

function FeatureCard({
  image,
  title,
  description,
  price,
  reverse = false,
  imageClassName = "",
}) {
  return (
    <section className="w-full max-w-6xl mx-auto">

      <div className="relative h-[350px] overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

        {/* Background Glow */}

        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[130px]" />

        <div
          className={`relative flex h-full items-center justify-between px-20 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >

          {/* Image */}

          <div className="flex w-[360px] justify-center">

            <img
              src={image}
              alt={title}
              className={`object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,.55)] ${imageClassName}`}
            />

          </div>

          {/* Content */}

          <div className="max-w-[470px]">

            <h2 className="text-[44px] font-semibold leading-tight text-white">
              {title}
            </h2>

            <p className="mt-5 text-[17px] leading-8 text-gray-300">
              {description}
            </p>

            <h3 className="mt-7 text-[42px] font-bold text-white">
              {price}
            </h3>

            <div className="mt-8 flex items-center gap-5">

              <button className="rounded-xl border border-white px-8 py-3 text-white transition-all duration-300 hover:bg-white hover:text-[#162414]">
                Explore
              </button>

              <button className="flex h-14 w-14 items-center justify-center rounded-xl border border-white text-white transition-all duration-300 hover:bg-white hover:text-[#162414]">
                <FaShoppingBag />
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeatureCard;