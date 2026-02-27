import DescriptionPanel from "@/components/description-panel";
import { DESCRIPTION_PANELS } from "@/lib/constants";

export default function RadbPage() {
  return (
    <div className="mt-5">
      <DescriptionPanel {...DESCRIPTION_PANELS.radb} />
    </div>
  );
}
