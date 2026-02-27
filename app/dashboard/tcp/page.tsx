import ResultsList from "@/components/results-list";
import { MOCK_TCP, TCP_COLUMNS } from "@/lib/constants";

export default function TcpPage() {
  return (
    <div className="mt-5">
      <ResultsList
        title="TCP Connect"
        results={MOCK_TCP}
        columns={TCP_COLUMNS}
      />
    </div>
  );
}
