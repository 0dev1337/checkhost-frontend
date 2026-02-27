import ResultsList from "@/components/results-list";
import { MOCK_HTTP, HTTP_COLUMNS } from "@/lib/constants";

export default function HttpPage() {
  return (
    <div className="mt-5">
      <ResultsList
        title="HTTP Server"
        results={MOCK_HTTP}
        columns={HTTP_COLUMNS}
      />
    </div>
  );
}
