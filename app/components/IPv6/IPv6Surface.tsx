// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Check whether a website or server supports IPv6 from locations worldwide.

Instantly verify IPv6 availability without complex setup or local testing. Our online tool tests your hostname from multiple global points and reports IPv6 readiness clearly.

Be future-ready. Go IPv6 with confidence.

Examples:
google.com
cloudflare.com
ipv6-test.com
`;

const IPv6Surface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          IPv6 Connectivity Test
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default IPv6Surface;
