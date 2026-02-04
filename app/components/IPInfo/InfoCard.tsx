// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Here you could get geographical location of any hostname or IP address:

- Country
- Region/State
- City
- ZIP/Postal code
- Time zone
- Local time
- IP range
- Organization
- ISP
This service is useful when you want to know a location of your site or server, or just any IP address. Make website monitoring more comfortable.

Examples:

87.250.250.3
www.google.com
check-host.net
`;

const InfoCard = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          IP and Website Location
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default InfoCard;
