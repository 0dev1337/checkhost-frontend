// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Get detailed Whois and RADB information for any IP address, ASN, or domain name.

No need to query multiple databases manually. Instantly retrieve registration details, routing objects, ownership, and contact information from global Whois and RADB sources in one place.

Know who owns it. Know how it’s routed.

Examples:
8.8.8.8
AS13335
example.com
`;

const RadbSurface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          Whois / RADB Lookup
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default RadbSurface;
