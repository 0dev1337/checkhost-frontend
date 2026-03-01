import { useState } from "react";
import apiClient from "@/lib/api-client";
import type { WhoisResponse } from "@/lib/types";

/**
 * React hook to manually fetch the `/whois` endpoint on demand.
 *
 * ```tsx
 * const { data, loading, error, fetchWhois } = useWhois();
 * ```
 */
export function useWhois() {
  const [data, setData] = useState<WhoisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWhois = () => {
    setLoading(true);
    setError(null);
    apiClient
      .get<WhoisResponse>("/whois")
      .then((res) => setData(res.data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  };

  const reset = () => {
    setData(null);
    setError(null);
  };

  return { data, loading, error, fetchWhois, reset };
}
