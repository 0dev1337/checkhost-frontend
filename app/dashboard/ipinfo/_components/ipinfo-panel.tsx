"use client";

import React from "react";
import { Surface, Separator, Skeleton } from "@heroui/react";
import { Server, MapPin } from "lucide-react";
import { useInfo } from "@/hooks/use-info";
import type { IPAPI } from "@/lib/types";
import OSMMap from "@/components/osm-map";
import Whois from "./whois";

function toRows(
  obj: Partial<IPAPI> | null,
): Array<{ label: string; value: string }> {
  if (!obj) return [];

  const entries: Array<{ label: string; value: string }> = [];

  if (obj.query) entries.push({ label: "IP Address", value: obj.query });
  if (obj.isp) entries.push({ label: "ISP", value: obj.isp });
  if (obj.as) entries.push({ label: "AS", value: obj.as });
  if (obj.org) entries.push({ label: "Organization", value: obj.org });
  if (obj.country) entries.push({ label: "Country", value: obj.country });
  if (obj.city) entries.push({ label: "City", value: obj.city });
  if (obj.regionName) entries.push({ label: "Region", value: obj.regionName });
  if (obj.zip) entries.push({ label: "ZIP Code", value: obj.zip });
  if (obj.timezone) entries.push({ label: "Time zone", value: obj.timezone });

  return entries;
}

export default function IpInfoPanel() {
  const { data, loading, error } = useInfo();

  const infoObj = data?.ipapi ?? null;
  const realRows = infoObj ? toRows(infoObj) : [];
  const rows = loading
    ? Array.from({ length: 9 }, (_, i) => ({ label: `row-${i}`, value: "" }))
    : realRows;

  const lat = infoObj?.lat;
  const lon = infoObj?.lon;

  return (
    <div className="mt-5 space-y-5">
      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-5 items-start">
        {/* LEFT PANEL */}
        <Surface
          className="w-full min-w-0 rounded-none p-4 sm:p-6 border border-dashed border-indigo-300/40"
          variant="default">
          <div className="flex items-center gap-3 mb-4">
            <Server className="w-5 h-5 text-indigo-300" />
            <p className="text-xl font-bold">Host Information</p>
          </div>

          <Separator className="mb-2" />

          {error && (
            <p className="text-center py-8 text-danger">{error.message}</p>
          )}

          {!error && !loading && !infoObj && (
            <p className="text-center py-8 text-sm text-muted">
              No data available
            </p>
          )}

          {!error &&
            rows.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="flex items-start py-4 gap-4">
                  {loading ? (
                    <Skeleton className="h-5 w-28 rounded-md shrink-0" />
                  ) : (
                    <span className="w-28 text-sm text-muted shrink-0">
                      {item.label}
                    </span>
                  )}

                  {loading ? (
                    <Skeleton className="h-4 w-[60%] rounded-md" />
                  ) : (
                    <span className="text-sm font-medium break-all min-w-0">
                      {item.value}
                    </span>
                  )}
                </div>

                {index < rows.length - 1 && <Separator />}
              </React.Fragment>
            ))}
        </Surface>

        {/* RIGHT PANEL */}
        <Surface
          className="w-full rounded-none p-4 sm:p-6 border border-dashed border-indigo-300/40"
          variant="default">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-indigo-300" />
            <p className="text-xl font-bold">Location</p>
          </div>

          <Separator className="mb-4" />

          <div className="h-[467px]  overflow-hidden">
            {lat != null && lon != null && !loading ? (
              <OSMMap lat={lat} lon={lon} zoom={11} className="h-full w-full" />
            ) : (
              <div className="h-full w-full bg-white/5" />
            )}
          </div>
        </Surface>
      </div>

      {/* WHOIS */}
      <Whois />
    </div>
  );
}
