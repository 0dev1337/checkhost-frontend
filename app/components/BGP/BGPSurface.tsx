// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `CAnalyze BGP routing information for any IP address or ASN worldwide.

No need to dig through raw routing tables. Instantly view prefixes, upstreams, peers, and announced routes using our simple BGP lookup tool.

Understand the routing. Control the traffic.

Examples:
8.8.8.8
AS15169
1.1.1.1
`;

const BGPSurface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          BGP Path Lookup
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default BGPSurface;
