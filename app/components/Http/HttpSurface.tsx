// app/dashboard/ipinfo/components/InfoCard.tsx
import { Surface } from "@heroui/react";

const description = `Quick check any URL! HTTP or HTTPS with any ports. Check website availability and performance with responses from many servers in various countries. This is website monitoring in easy way!

Examples:

https://1.1.1.1
http://juick.com
https://www.fortify.net/sslcheck.html
http://納豆.例.jp


`;

const HttpSurface = () => {
  return (
    <div className='flex justify-center px-4'>
      <Surface
        variant='default'
        className='w-full max-w-4xl rounded-4xl p-4 sm:p-6'>
        <div className='flex justify-center px-4 font-bold text-xl'>
          Check website
        </div>
        <p className='mt-5' style={{ whiteSpace: "pre-line" }}>
          {description}
        </p>
      </Surface>
    </div>
  );
};

export default HttpSurface;
