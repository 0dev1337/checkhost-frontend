// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";
import Cards, { Props } from "../../components/Ping/Table";
import Table from "../../components/Ping/Table";

const results: Props[] = [
  {
    location: "Austria, Vienna",
    country: "Austria",
    flagCode: "at",
    result: "4/4",
    rttMin: 0.8,
    rttAvg: 0.8,
    rttMax: 0.9,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Brazil, Sao Paulo",
    country: "Brazil",
    flagCode: "br",
    result: "4/4",
    rttMin: 1.6,
    rttAvg: 1.8,
    rttMax: 2.1,
    ipAddress: "1.1.1.1",
  },
  {
    location: "India, Kolkata",
    country: "India",
    flagCode: "in",
    result: "4/4",
    rttMin: 31.0,
    rttAvg: 31.2,
    rttMax: 31.3,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Germany, Frankfurt",
    country: "Germany",
    flagCode: "de",
    result: "4/4",
    rttMin: 1.4,
    rttAvg: 1.6,
    rttMax: 1.8,
    ipAddress: "1.1.1.1",
  },
  {
    location: "United States, New York",
    country: "United States",
    flagCode: "us",
    result: "4/4",
    rttMin: 2.3,
    rttAvg: 2.5,
    rttMax: 2.7,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Japan, Tokyo",
    country: "Japan",
    flagCode: "jp",
    result: "4/4",
    rttMin: 1.3,
    rttAvg: 1.3,
    rttMax: 1.3,
    ipAddress: "1.1.1.1",
  },
  {
    location: "United Kingdom, London",
    country: "United Kingdom",
    flagCode: "gb",
    result: "4/4",
    rttMin: 3.2,
    rttAvg: 3.4,
    rttMax: 3.6,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Singapore, Singapore",
    country: "Singapore",
    flagCode: "sg",
    result: "4/4",
    rttMin: 5.1,
    rttAvg: 5.3,
    rttMax: 5.5,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Australia, Sydney",
    country: "Australia",
    flagCode: "au",
    result: "4/4",
    rttMin: 12.5,
    rttAvg: 12.8,
    rttMax: 13.1,
    ipAddress: "1.1.1.1",
  },
  {
    location: "Canada, Toronto",
    country: "Canada",
    flagCode: "ca",
    result: "4/4",
    rttMin: 0.9,
    rttAvg: 1.0,
    rttMax: 1.1,
    ipAddress: "1.1.1.1",
  },
];

const PingTables = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          Ping Server
        </div>
        <div className='mt-5'>
          <div className='space-y-5'>
            {results.map((result, index) => (
              <Table key={index} {...result} />
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
};

export default PingTables;
