"use client";
import { Button, ButtonGroup } from "@heroui/react";

const ActionButtons = () => {
  return (
    // let this container grow and not be limited by max-w
    <div className="w-full">
      <ButtonGroup
        fullWidth
        // remove max-width limiter, keep square edges
        className="w-full [&>button:first-child]:rounded-none [&>button:last-child]:rounded-none"
        variant="tertiary"
      >
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/ipinfo")}
        >
          Info
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/ping")}
        >
          Ping
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/http")}
        >
          HTTP
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/tcp")}
        >
          TCP Port
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/bgp")}
        >
          BGP
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/ipv6")}
        >
          IPv6
        </Button>
        <Button
          className="flex-1 min-w-0"
          onClick={() => (window.location.href = "/dashboard/radb")}
        >
          Whois
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ActionButtons;
