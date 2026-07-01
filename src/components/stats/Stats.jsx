import stats from "../../data/stats";

function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">
      <div className="grid grid-cols-4 border-y border-white/10">

        {stats.map((item) => (
          <div
            key={item.id}
            className="py-12 text-center border-r last:border-r-0 border-white/10"
          >
            <h2 className="text-5xl font-bold text-white">
              {item.number}
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;