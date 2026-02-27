import { Card, Link } from "@heroui/react";
import type { Feature } from "@/lib/types";

/**
 * A single feature card displayed in the home-page grid.
 */
export default function FeatureCard({ title, description }: Feature) {
  return (
    <Card variant="secondary">
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label={`Learn more about ${title}`}
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
}
