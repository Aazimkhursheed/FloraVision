function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-green-500/40">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-3xl text-green-400">
        <Icon />
      </div>

      <h3 className="mt-8 text-3xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-5 text-lg leading-8 text-gray-300">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;