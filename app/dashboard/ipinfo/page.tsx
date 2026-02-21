import InfoCard from "@/app/components/IPInfo/InfoCard";
import Results from "./results";
import Whois from "./whois";

const page = () => {
  return (
    <div className="mt-5 space-y-5">
      <Results />
      <Whois />
    </div>
  );
};

export default page;
