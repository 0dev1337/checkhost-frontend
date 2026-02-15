// app/dashboard/ipinfo/components/InfoCard.tsx
import Table, { Props } from "@/app/components/BGP/Table";
import { Surface } from "@heroui/react";

const results: Props[] = [
  {
    location: "Los Angeles, CA",
    country: "USA",
    flagCode: "US",
    result:
      "Arelion\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 1299 13335\nCommunities: 1299:35000",
    time: 0,
  },
  {
    location: "Fremont, CA",
    country: "USA",
    flagCode: "US",
    result:
      "Hurricane Electric\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 6939 13335\nCommunities: none",
    time: 0,
  },
  {
    location: "Los Angeles, CA",
    country: "USA",
    flagCode: "US",
    result:
      "Vultr\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 20473 13335\nCommunities: 20473:200 20473:13335 64515:44 20473:200:13335",
    time: 0,
  },
  {
    location: "Dallas, TX",
    country: "USA",
    flagCode: "US",
    result: "Swiftnode\nRouter offline",
    time: 0,
  },
  {
    location: "Grand Rapids, MI",
    country: "USA",
    flagCode: "US",
    result:
      "RackGenius\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 32002 13335\nCommunities: 13335:10116",
    time: 0,
  },
  {
    location: "Ciudad del Este",
    country: "Paraguay",
    flagCode: "PY",
    result:
      "Wind Net\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 269783 13335\nCommunities: none",
    time: 0,
  },
  {
    location: "Barueri",
    country: "Brazil",
    flagCode: "BR",
    result:
      "Migo Internet\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 263152 13335\nCommunities: 8880:101 13335:10097",
    time: 0,
  },
  {
    location: "Newcastle",
    country: "UK",
    flagCode: "GB",
    result:
      "FyfeWeb\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 212396 13335\nCommunities: 13335:10021 13335:19020 13335:20050 13335:20500 13335:20530 212396:4:1 212396:200:1",
    time: 0,
  },
  {
    location: "Amsterdam",
    country: "Netherlands",
    flagCode: "NL",
    result:
      "Route64\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 212895 13335\nCommunities: 13335:20500 13335:10020 13335:20530 13335:19020 13335:20050 212895:2:2",
    time: 0,
  },
  {
    location: "Zurich",
    country: "Switzerland",
    flagCode: "CH",
    result:
      "iFog\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 34927 13335\nCommunities: 34927:810 34927:830",
    time: 0,
  },
];

const BgpTables = () => {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
      >
        <div className="flex justify-center px-4 font-bold text-xl">
          Ping Server
        </div>
        <div className="mt-5">
          <div className="space-y-5">
            {results.map((result, index) => (
              <Table key={index} {...result} />
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
};

export default BgpTables;
