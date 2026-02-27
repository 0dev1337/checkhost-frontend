"use client";

import React from "react";
import { Surface, Separator } from "@heroui/react";
import { Server } from "lucide-react";
import { useInfo } from "@/hooks/use-info";
import type { IPAPI, IPInfo } from "@/lib/types";

function toRows(obj: Partial<IPAPI> & Partial<IPInfo>) {
  if (!obj) return [];
  const entries: Array<{ label: string; value: string }> = [];
  if (obj.ip) entries.push({ label: "IP Address", value: obj.ip });
  if (obj.hostname !== undefined) entries.push({ label: "Reverse", value: obj.hostname ?? "" });
  if (obj.org !== undefined) entries.push({ label: "ISP", value: obj.org ?? "" });
  if (obj.org !== undefined) entries.push({ label: "Organization", value: obj.org ?? "" });
  if (obj.country !== undefined) entries.push({ label: "Country", value: obj.country ?? "" });
  if (obj.city !== undefined) entries.push({ label: "City", value: obj.city ?? "" });
  if (obj.region !== undefined) entries.push({ label: "Region", value: obj.region ?? "" });
  if (obj.timezone !== undefined) entries.push({ label: "Time zone", value: obj.timezone ?? "" });
  return entries;
}

export default function Results() {
  const { data, loading, error } = useInfo();

  const infoObj = data ? data.ipapi ?? data.ipinfo : null;
  const rows = infoObj ? toRows(infoObj) : [];

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center py-8 text-danger">
        Error: {error.message}
      </p>
    );
  }

  if (!infoObj) {
    return <p className="text-center py-8">No data available</p>;
  }

  return (
    <div className="flex justify-center px-4">
      <Surface
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6 border border-dashed border-indigo-300/40"
        variant="default"
      >
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-5 h-5 text-indigo-300" />
          <p className="text-xl font-bold">Host Information</p>
        </div>

        <Separator className="mb-2" />

        {rows.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex items-center py-4 gap-4">
              <span className="w-36 text-sm text-muted shrink-0">
                {item.label}
              </span>
              <span className="text-sm font-medium break-all">
                {item.value}
              </span>
            </div>
            {index < rows.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Surface>
    </div>
  );
}
