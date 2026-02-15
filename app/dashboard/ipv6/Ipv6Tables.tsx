// app/dashboard/ipinfo/components/InfoCard.tsx
import Table, { Props } from "@/app/components/IPv6/Table";
import { Surface } from "@heroui/react";

const results: Props[] = [
  {
    location: "Austria, Vienna",
    country: "Austria",
    flagCode: "at",
    result: "IPv6 supported",
    time: 0.8,
    ipAddress: "2401:4900:1c01:8c84:38ed:89f8:fc34:18ac",
  },
  {
    location: "USA, Los Angeles",
    country: "USA",
    flagCode: "us",
    result: "IPv6 supported",
    time: 12.4,
    ipAddress: "2606:4700:4700::1111",
  },
  {
    location: "USA, Fremont",
    country: "USA",
    flagCode: "us",
    result: "IPv6 supported",
    time: 11.2,
    ipAddress: "2606:4700:4700::1001",
  },
  {
    location: "UK, Newcastle",
    country: "UK",
    flagCode: "gb",
    result: "IPv6 supported",
    time: 85.6,
    ipAddress: "2a06:98c0:1::3:1111",
  },
  {
    location: "Netherlands, Amsterdam",
    country: "Netherlands",
    flagCode: "nl",
    result: "IPv6 supported",
    time: 78.3,
    ipAddress: "2a06:98c1:2402:123::1111",
  },
  {
    location: "Switzerland, Zurich",
    country: "Switzerland",
    flagCode: "ch",
    result: "IPv6 supported",
    time: 82.1,
    ipAddress: "2001:620:4000::1111",
  },
  {
    location: "Brazil, Barueri",
    country: "Brazil",
    flagCode: "br",
    result: "IPv6 supported",
    time: 210.7,
    ipAddress: "2804:10:100::1111",
  },
  {
    location: "Paraguay, Ciudad del Este",
    country: "Paraguay",
    flagCode: "py",
    result: "IPv6 supported",
    time: 245.9,
    ipAddress: "2801:400::1111",
  },
  {
    location: "India, Mumbai",
    country: "India",
    flagCode: "in",
    result: "IPv6 supported",
    time: 45.2,
    ipAddress: "2405:8100:6c00::1111",
  },
  {
    location: "Australia, Sydney",
    country: "Australia",
    flagCode: "au",
    result: "IPv6 supported",
    time: 198.4,
    ipAddress: "2400:6180:100::1111",
  },
];

const IPv6Tables = () => {
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

export default IPv6Tables;
