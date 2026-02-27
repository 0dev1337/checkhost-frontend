import { Surface } from "@heroui/react";
import { FEATURES } from "@/lib/constants";
import FeatureCard from "./feature-card";

/**
 * Grid of feature cards shown on the home page.
 */
export default function FeatureGrid() {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Surface>
    </div>
  );
}
