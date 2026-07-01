import ProductGrid from "./ProductGrid";

function TopSelling() {
  return (
    <section className="mx-auto mt-32 max-w-[1450px] px-10">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[7px] text-green-400">
          Plants Collection
        </p>

        <h2 className="mt-4 text-[58px] font-semibold leading-none text-white">
          Our Top Selling Plants
        </h2>

        <p className="mx-auto mt-7 max-w-3xl text-[18px] leading-8 text-gray-300">
          Discover our most loved indoor plants, carefully selected to
          bring freshness, beauty, and a healthier atmosphere into your
          living space.
        </p>

      </div>

      <ProductGrid />

    </section>
  );
}

export default TopSelling;