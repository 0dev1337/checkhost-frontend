"use client";
import { Button, ButtonGroup } from "@heroui/react";

const ActionButtons = () => {
  return (
    <ButtonGroup
      hideSeparator
      className='gap-4 text-muted flex flex-wrap w-full'>
      <Button
        variant='tertiary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/ipinfo")}>
        Info
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/ping")}>
        Ping
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/http")}>
        HTTP
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/tcp")}>
        TCP Port
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/traceroute")}>
        Traceroute
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/bgp")}>
        BGP
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/ipv6")}>
        IPv6
      </Button>
      <Button
        variant='secondary'
        className='rounded-md text-muted flex-1 min-w-fit'
        onClick={() => (window.location.href = "/dashboard/radb")}>
        Whois
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
