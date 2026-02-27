import ReactCountryFlag from "react-country-flag";
import type { BaseResultRow, Column } from "@/lib/types";

interface ResultsTableRowProps<T extends BaseResultRow> {
  data: T;
  columns: Column<T>[];
}

/**
 * A single result row with a responsive desktop/mobile layout.
 * Replaces the 5 duplicate `Table.tsx` files.
 */
export default function ResultsTableRow<T extends BaseResultRow>({
  data,
  columns,
}: ResultsTableRowProps<T>) {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden sm:flex items-center justify-between text-sm py-3 px-2 border-b border-separator last:border-b-0 hover:bg-default/30 transition-colors">
        {/* Location with flag */}
        <div className="flex items-center gap-2 min-w-[200px]">
          <ReactCountryFlag
            countryCode={data.flagCode.toUpperCase()}
            svg
            style={{ width: "1.25rem", height: "1rem" }}
            title={data.country}
          />
          <span className="text-foreground">{data.location}</span>
        </div>

        {columns.map((col) => {
          const raw = data[col.key];
          const rendered = col.render ? col.render(raw, data) : String(raw);
          return (
            <div
              key={String(col.key)}
              className={`${col.desktopWidth ?? "min-w-[120px]"} ${col.align ?? "text-center"}`}
            >
              <span className="text-muted">{col.label}: </span>
              <span className="text-foreground whitespace-pre-line">{rendered}</span>
            </div>
          );
        })}
      </div>

      {/* Mobile view */}
      <div className="block sm:hidden border border-separator rounded-lg p-4 hover:bg-default/30 transition-colors">
        <div className="flex items-center gap-2 mb-3">
          <ReactCountryFlag
            countryCode={data.flagCode.toUpperCase()}
            svg
            style={{ width: "1.5rem", height: "1.2rem" }}
            title={data.country}
          />
          <span className="text-foreground font-medium">{data.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          {columns.map((col) => {
            const raw = data[col.key];
            const rendered = col.render ? col.render(raw, data) : String(raw);
            return (
              <div
                key={String(col.key)}
                className={col.fullWidth ? "col-span-2" : ""}
              >
                <span className="text-muted">{col.label}:</span>{" "}
                <span className="text-foreground whitespace-pre-line">{rendered}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
