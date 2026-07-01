import FeatureCard from "../featureCard/FeatureCard";
import { bluePotPlant } from "../../assets/images";

function FeatureCardTwo() {
  return (
    <div className="mt-6">
      <FeatureCard
        image={bluePotPlant}
        title="For Your Desks Decorations"
        description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming."
        price="Rs. 399/-"
        reverse
        imageClassName="w-[320px] translate-y-8"
      />
    </div>
  );
}

export default FeatureCardTwo;