"use client";

import { Surface, Separator, Button } from "@heroui/react";
import { File, Loader2, X } from "lucide-react";
import { useWhois } from "@/hooks/use-whois";

function WhoisRow({
  label,
  value,
}: {
  label: string;
  value: string | string[];
}) {
  const items = Array.isArray(value) ? value : [value];

  return (
    <div className="grid grid-cols-[160px_1fr] gap-x-4 py-2 border-b border-white/5 last:border-0">
      <span className="text-xs font-mono text-indigo-300/80 pt-0.5 truncate">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.length > 1 ? (
          items.map((item, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-white/70 border border-white/10">
              {item}
            </span>
          ))
        ) : (
          <span className="text-sm text-white/80 break-all">{items[0]}</span>
        )}
      </div>
    </div>
  );
}

interface WhoisProps {
  onClose?: () => void;
}

export default function Whois({ onClose }: WhoisProps) {
  const { data, loading, error, fetchWhois, reset } = useWhois();

  return (
    <div className="flex justify-center px-4">
      <Surface
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6 min-h-[200px] flex flex-col border border-dashed border-indigo-300/40"
        variant="default">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <File className="w-5 h-5 text-indigo-300" />
            <p className="text-xl font-bold">Whois Information</p>
          </div>

          <div className="flex items-center gap-1">
            {data && (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={fetchWhois}
                  isDisabled={loading}>
                  {loading ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : (
                    "Refresh"
                  )}
                </Button>
                <Button size="sm" variant="ghost" onClick={reset}>
                  <X className="w-4 h-4" />
                </Button>
              </>
            )}
            {onClose && (
              <Button size="sm" variant="ghost" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Idle */}
        {!data && !error && (
          <div className="flex-1 flex items-center justify-center">
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-4 text-base"
              onClick={fetchWhois}
              isDisabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Fetching...
                </span>
              ) : (
                "Fetch"
              )}
            </Button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <p className="text-red-400 text-sm">{error.message}</p>
            <Button variant="outline" size="sm" onClick={fetchWhois}>
              Retry
            </Button>
          </div>
        )}

        {/* Data */}
        {data && (
          <div className="flex flex-col divide-y divide-white/5 max-h-[400px] overflow-y-auto">
            {Object.entries(data.whois).map(([key, value]) => (
              <WhoisRow key={key} label={key} value={value} />
            ))}
          </div>
        )}
      </Surface>
    </div>
  );
}
