import FeatureGrid from "./FeatureGrid";

function WhyChooseUs() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-8">

      <p className="text-center text-sm uppercase tracking-[8px] text-green-400">
        WHY CHOOSE US
      </p>

      <h2 className="mt-3 text-center text-6xl font-semibold text-white">
        We Care About Every Plant
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-9 text-gray-300">
        Every order is handled with care to ensure your plants arrive
        healthy, fresh, and ready to brighten your home or workspace.
      </p>

      <FeatureGrid />

    </section>
  );
}

export default WhyChooseUs;