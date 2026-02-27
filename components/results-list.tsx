import { Surface } from "@heroui/react";
import type { BaseResultRow, Column } from "@/lib/types";
import ResultsTableRow from "./results-table";

interface ResultsListProps<T extends BaseResultRow> {
  /** Heading shown above the rows. */
  title: string;
  /** Array of result data. */
  results: T[];
  /** Column configuration for each row. */
  columns: Column<T>[];
}

/**
 * Container component: a Surface wrapping a list of `ResultsTableRow` items.
 * Replaces the 5 duplicate `*Tables.tsx` container files.
 */
export default function ResultsList<T extends BaseResultRow>({
  title,
  results,
  columns,
}: ResultsListProps<T>) {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
      >
        <h2 className="flex justify-center px-4 font-bold text-xl">
          {title}
        </h2>
        <div className="mt-5">
          <div className="space-y-5">
            {results.map((row, index) => (
              <ResultsTableRow key={index} data={row} columns={columns} />
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
}
