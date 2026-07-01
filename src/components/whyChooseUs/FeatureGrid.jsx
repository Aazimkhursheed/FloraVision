import features from "../../data/features";
import FeatureCard from "./FeatureCard";

function FeatureGrid() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-8">

      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}

    </div>
  );
}

export default FeatureGrid;