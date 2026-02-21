"use client";
import { Button, ButtonGroup } from "@heroui/react";

const tabs = [
  { label: "Info", href: "/dashboard/ipinfo" },
  { label: "Ping", href: "/dashboard/ping" },
  { label: "HTTP", href: "/dashboard/http" },
  { label: "TCP Port", href: "/dashboard/tcp" },
  { label: "BGP", href: "/dashboard/bgp" },
  { label: "IPv6", href: "/dashboard/ipv6" },
  { label: "Whois", href: "/dashboard/radb" },
];

export default function ActionButtons() {
  return (
    <div className="w-full">
      {/* Mobile: real horizontal scroller */}
      <div className="sm:hidden w-full min-w-0">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <Button
              key={t.href}
              variant="tertiary"
              className="whitespace-nowrap"
              onClick={() => (window.location.href = t.href)}
            >
              {t.label}
            </Button>
          ))}
        </div>
      </div>

      {/* sm+ : grouped full-width */}
      <div className="hidden sm:block">
        <ButtonGroup
          fullWidth
          variant="tertiary"
          className="w-full [&>button:first-child]:rounded-none [&>button:last-child]:rounded-none"
        >
          {tabs.map((t) => (
            <Button
              key={t.href}
              className="flex-1 min-w-0"
              onClick={() => (window.location.href = t.href)}
            >
              {t.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
