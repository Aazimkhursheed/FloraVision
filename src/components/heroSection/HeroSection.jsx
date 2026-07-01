import Hero from "../hero/Hero";
import FeatureCardOne from "../featureCard/FeatureCardOne";
import FeatureCardTwo from "../featureCardTwo/FeatureCardTwo";

function HeroSection() {
  return (
    <section className="relative">
      <Hero />
      <FeatureCardOne />
      <FeatureCardTwo />
    </section>
  );
}

export default HeroSection;