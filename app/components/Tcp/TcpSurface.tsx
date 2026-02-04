// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Make TCP connection to any port of any IP or website from different places. Check port status of server.

For example you could check a new SSH port of your server for availability from many countries. Website monitoring or any other services monitoring with this tool are able to make system administrator's day.

Examples:

4.2.2.2:53
http://bitcoin.org
ssmtp://smtp.gmail.com
https://1.1.1.1
`;

const TcpSurface = () => {
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

export default TcpSurface;
