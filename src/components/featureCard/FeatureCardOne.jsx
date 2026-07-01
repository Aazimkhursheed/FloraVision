import FeatureCard from "../featureCard/FeatureCard";
import { plantainLilies } from "../../assets/images";

function FeatureCardOne() {
  return (
    <div className="relative z-30 -mt-28">
      <FeatureCard
        image={plantainLilies}
        title="For Your Desks Decorations"
        description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference."
        price="Rs. 599/-"
        imageClassName="w-[340px] -translate-y-10"
      />
    </div>
  );
}

export default FeatureCardOne;