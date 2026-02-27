import ResultsList from "@/components/results-list";
import { MOCK_PING, PING_COLUMNS } from "@/lib/constants";

export default function PingPage() {
  return (
    <div className="mt-5">
      <ResultsList
        title="Ping Server"
        results={MOCK_PING}
        columns={PING_COLUMNS}
      />
    </div>
  );
}
