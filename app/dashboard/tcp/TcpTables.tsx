// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";
import Table, { Props } from "@/app/components/Tcp/Table";

const results: Props[] = [
  {
    location: "Austria, Vienna",
    country: "Austria",
    flagCode: "at",
    result: "4/4",
    time: 0.8,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Germany, Berlin",
    country: "Germany",
    flagCode: "de",
    result: "4/4",
    time: 1.2,
    ipAddress: "8.8.8.8",
  },
  {
    location: "United Kingdom, London",
    country: "United Kingdom",
    flagCode: "gb",
    result: "3/4",
    time: 2.5,
    ipAddress: "1.0.0.1",
  },
  {
    location: "France, Paris",
    country: "France",
    flagCode: "fr",
    result: "4/4",
    time: 1.8,
    ipAddress: "208.67.222.222",
  },
  {
    location: "Japan, Tokyo",
    country: "Japan",
    flagCode: "jp",
    result: "2/4",
    time: 3.6,
    ipAddress: "9.9.9.9",
  },
  {
    location: "United States, New York",
    country: "United States",
    flagCode: "us",
    result: "4/4",
    time: 0.5,
    ipAddress: "4.4.4.4",
  },
];

const TcpTables = () => {
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

export default TcpTables;
