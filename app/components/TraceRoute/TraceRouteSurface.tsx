// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Trace the network path to a host with Traceroute from USA, Canada, Europe and other locations.

No need to run traceroute commands manually from different machines. Discover every hop between our global probes and your hostname automatically in one click.

See the route. Find the delay. Fix faster.

Examples:
4.2.2.2
one.one.one.one
www.google.com
`;

const TraceRouteSurface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          Traceroute
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default TraceRouteSurface;
