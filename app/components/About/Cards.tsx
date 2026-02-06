import { Card, Link } from "@heroui/react";

export interface Props {
  title: string;
  description: string;
}

const Cards = ({ title, description }: Props) => {
  return (
    <Card className="" variant="secondary">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
