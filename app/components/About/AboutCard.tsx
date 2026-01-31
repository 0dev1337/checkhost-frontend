import React from "react";
import { Surface } from "@heroui/react";
import Cards, { Props } from "./Cards";

const items: Props[] = [
  {
    title: "Info",
    description:
      "helps to know geolocation data of IP address or hostname: country, region, city, ZIP/postal code, time zone, local time, IP range, ISP, organization.",
  },
  {
    title: "Ping",
    description:
      "allows to test the reachability of a host, to measure network latency and packets loss from different servers in the world.",
  },
  {
    title: "HTTP",
    description:
      "is for checking website's response performance and availability from many countries and datacenters.",
  },
  {
    title: "DNS",
    description:
      "is for retrieving A, AAAA and PTR records with TTL (time-to-live) from nameservers around the world for checking updates on DNS servers.",
  },
  {
    title: "TCP",
    description:
      "checks the possibility of a TCP connection to host's specified port.",
  },
  {
    title: "TraceRoute",
    description:
      "shows the path your data takes from your device to a destination",
  },
  {
    title: "BGP",
    description:
      "shows you who controls an IP address and how traffic is routed to it on the internet",
  },
  {
    title: "IPv6",
    description:
      "checks if the given host supports ipv6 connectivity by looking for AAAA records.",
  },
];

const AboutCard = () => {
  return (
    // w-full max-w-4xl sm:max-w-4xl rounded-4xl p-4 sm:p-6
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {items.map((item) => (
            <Cards
              title={item.title}
              description={item.description}
              key={item.title}
            />
          ))}
        </div>
      </Surface>
    </div>
  );
};

export default AboutCard;
