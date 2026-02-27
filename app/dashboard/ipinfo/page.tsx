import Results from "./_components/results";
import Whois from "./_components/whois";

export default function IpInfoPage() {
  return (
    <div className="mt-5 space-y-5">
      <Results />
      <Whois />
    </div>
  );
}
