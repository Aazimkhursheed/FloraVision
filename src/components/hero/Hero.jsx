import HeroLeft from "../heroLeft/HeroLeft";
import HeroCenter from "../heroCenter/HeroCenter";
import HeroRight from "../heroRight/HeroRight";

function Hero() {
  return (
    <section className="mx-auto max-w-[1380px] px-8 pt-10">

      <div className="grid grid-cols-[1.15fr_1fr_0.85fr] items-start gap-10">

        <HeroLeft />

        <HeroCenter />

        <HeroRight />

      </div>

    </section>
  );
}

export default Hero;