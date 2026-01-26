import { Button, ButtonGroup } from "@heroui/react";

const ActionButtons = () => {
  return (
    <ButtonGroup hideSeparator className="gap-3 text-muted">
      <Button variant="tertiary" className="rounded-md text-muted">
        Info
      </Button>
      <Button variant="secondary" className="rounded-md text-muted">
        Ping
      </Button>
      <Button variant="secondary" className="rounded-md text-muted">
        HTTP
      </Button>
      <Button variant="secondary" className="rounded-md text-muted">
        TCP Port
      </Button>
      <Button variant="secondary" className="rounded-md text-muted">
        Traceroute
      </Button>
      <Button variant="secondary" className="rounded-md text-muted">
        BGP
      </Button>
    </ButtonGroup>
  );
};

export default ActionButtons;
