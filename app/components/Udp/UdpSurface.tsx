// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Check UDP connection to any port of any IP or website from different places.

For example you could check a DNS or game server for availability from many countries.

Examples:

8.8.8.8:53
domain://1.1.1.1
freebsd.org:44444
`;

const UdpSurface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          TCP connect
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default UdpSurface;
