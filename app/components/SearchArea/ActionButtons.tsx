import { Button, ButtonGroup } from "@heroui/react";

const ActionButtons = () => {
  return (
    <ButtonGroup
      hideSeparator
      className="gap-4 text-muted flex flex-wrap w-full"
    >
      <Button
        variant="tertiary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        Info
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        Ping
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        HTTP
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        TCP Port
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        Traceroute
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        BGP
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        IPv6
      </Button>
      <Button
        variant="secondary"
        className="rounded-md text-muted flex-1 min-w-fit"
      >
        Whois
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
