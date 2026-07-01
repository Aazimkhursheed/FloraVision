import BestO2Card from "./BestO2Card";

function BestO2() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-8">

      {/* Section Heading */}

      <div className="mb-14 flex flex-col items-center">

        <div className="flex items-center gap-3">

          <span className="h-8 w-[3px] rounded-full bg-green-500"></span>

          <h2 className="text-[40px] font-semibold text-white tracking-tight">
            Our Best O2
          </h2>

        </div>

      </div>

      {/* Card */}

      <BestO2Card />

      {/* Pagination */}

      <div className="mt-8 flex justify-center gap-3">

        <span className="h-2.5 w-2.5 rounded-full bg-white"></span>

        <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>

        <span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>

      </div>

    </section>
  );
}

export default BestO2;