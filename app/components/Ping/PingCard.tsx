// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Check the reachability of a host with Ping from USA, Canada, Europe and other places.

No need to ping manually website/server from different places. Ping hostname in automatic mode with our online service from many places around the world in one click.

Ping the world and be happy!

Examples:

4.2.2.2
one.one.one.one
www.google.com
`;

const PingCard = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          Ping Server
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default PingCard;
