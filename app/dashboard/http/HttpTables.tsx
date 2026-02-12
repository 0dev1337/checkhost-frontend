// app/dashboard/ipinfo/components/InfoCard.tsx
import Table, { Props } from "@/app/components/Http/Table";
import { Surface } from "@heroui/react";

const results: Props[] = [
  {
    location: "United States, New York",
    country: "United States",
    flagCode: "us",
    result: "OK",
    time: 0.123,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "United Kingdom, London",
    country: "United Kingdom",
    flagCode: "gb",
    result: "OK",
    time: 0.089,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "Germany, Frankfurt",
    country: "Germany",
    flagCode: "de",
    result: "OK",
    time: 0.045,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "Singapore, Singapore",
    country: "Singapore",
    flagCode: "sg",
    result: "Timeout",
    time: 5.0,
    code: 0,
    ipAddress: "N/A",
  },
  {
    location: "Japan, Tokyo",
    country: "Japan",
    flagCode: "jp",
    result: "OK",
    time: 0.156,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "Brazil, Sao Paulo",
    country: "Brazil",
    flagCode: "br",
    result: "OK",
    time: 0.234,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "Australia, Sydney",
    country: "Australia",
    flagCode: "au",
    result: "Redirect",
    time: 0.312,
    code: 301,
    ipAddress: "104.26.10.228",
  },
  {
    location: "Canada, Toronto",
    country: "Canada",
    flagCode: "ca",
    result: "OK",
    time: 0.078,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "India, Mumbai",
    country: "India",
    flagCode: "in",
    result: "OK",
    time: 0.198,
    code: 200,
    ipAddress: "104.26.10.228",
  },
  {
    location: "France, Paris",
    country: "France",
    flagCode: "fr",
    result: "Error",
    time: 2.456,
    code: 500,
    ipAddress: "104.26.10.228",
  },
];

const HttpTables = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          HTTP Server
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

export default HttpTables;
