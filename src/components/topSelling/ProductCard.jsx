function ProductCard({ image, name, price }) {
  return (
    <div className="group overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/[0.07]">

      <div className="flex h-[240px] items-center justify-center overflow-hidden">

        <img
          src={image}
          alt={name}
          className="max-h-[190px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
        />

      </div>

      <h3 className="mt-7 text-[24px] font-semibold text-white">
        {name}
      </h3>

      <p className="mt-3 text-[20px] font-medium text-gray-300">
        {price}
      </p>

      <button className="mt-8 w-full rounded-xl border border-white py-3 text-[17px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#162414]">
        Buy Now
      </button>

    </div>
  );
}

export default ProductCard;