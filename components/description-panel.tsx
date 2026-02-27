import { Surface } from "@heroui/react";

interface DescriptionPanelProps {
  title: string;
  description: string;
}

/**
 * Reusable description card shown on tool pages (Ping, HTTP, BGP, etc.).
 * Replaces the 8 duplicate `*Surface` / `*Card` components.
 */
export default function DescriptionPanel({ title, description }: DescriptionPanelProps) {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
      >
        <h2 className="flex justify-center px-4 font-bold text-xl">
          {title}
        </h2>
        <p className="mt-5 whitespace-pre-line">{description}</p>
      </Surface>
    </div>
  );
}
