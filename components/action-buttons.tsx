"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonGroup } from "@heroui/react";
import { NAV_TABS } from "@/lib/constants";

export default function ActionButtons() {
  const router = useRouter();

  return (
    <div className="w-full">
      {/* Mobile: wrapped button list */}
      <div className="sm:hidden w-full min-w-0">
        <div className="flex flex-wrap gap-2">
          {NAV_TABS.map((tab) => (
            <Button
              key={tab.href}
              variant="tertiary"
              className="whitespace-nowrap"
              onClick={() => router.push(tab.href)}>
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Desktop: grouped full-width */}
      <div className="hidden sm:block">
        <ButtonGroup
          fullWidth
          variant="ghost"
          className="w-full [&>button:first-child]:rounded-none [&>button:last-child]:rounded-none">
          {NAV_TABS.map((tab) => (
            <Button
              key={tab.href}
              className="flex-1 min-w-0"
              onClick={() => router.push(tab.href)}>
              {tab.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
