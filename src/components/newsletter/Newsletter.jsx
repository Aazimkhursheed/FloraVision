function Newsletter() {
  return (
    <section className="mx-auto mt-32 max-w-7xl px-8">
      <div className="rounded-[42px] border border-white/10 bg-white/5 px-20 py-24 backdrop-blur-xl">

        {/* Heading */}
        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-green-400">
            Newsletter
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-tight text-white">
            Stay Updated With FloraVision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Subscribe to receive the latest plant collections, gardening tips,
            exclusive offers, and seasonal discounts delivered directly to your inbox.
          </p>

        </div>

        {/* Subscribe Form */}
        <div className="mx-auto mt-16 flex max-w-[720px] items-center rounded-2xl border border-white/10 bg-[#1b2a18] p-2">

          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent px-6 text-lg text-white placeholder:text-gray-400 outline-none"
          />

          <button
            className="rounded-xl bg-[#2ED573] px-8 py-4 font-semibold text-[#162414] transition-all duration-300 hover:scale-[1.03] hover:bg-[#45e67b]"
          >
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;