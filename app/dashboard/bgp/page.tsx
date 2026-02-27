import ResultsList from "@/components/results-list";
import { MOCK_BGP, BGP_COLUMNS } from "@/lib/constants";

export default function BgpPage() {
  return (
    <div className="mt-5">
      <ResultsList
        title="BGP Path Lookup"
        results={MOCK_BGP}
        columns={BGP_COLUMNS}
      />
    </div>
  );
}
