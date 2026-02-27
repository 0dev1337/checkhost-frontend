import ResultsList from "@/components/results-list";
import { MOCK_IPV6, IPV6_COLUMNS } from "@/lib/constants";

export default function Ipv6Page() {
  return (
    <div className="mt-5">
      <ResultsList
        title="IPv6 Connectivity Test"
        results={MOCK_IPV6}
        columns={IPV6_COLUMNS}
      />
    </div>
  );
}
