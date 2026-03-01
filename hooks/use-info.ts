import { useState, useEffect } from "react";
import apiClient from "@/lib/api-client";
import type { InfoResponse } from "@/lib/types";

/**
 * React hook to load the `/info` endpoint once on mount.
 *
 * ```tsx
 * const { data, loading, error } = useInfo();
 * ```
 */
export function useInfo() {
  const [data, setData] = useState<InfoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    apiClient
      .get<InfoResponse>("/ipinfo")
      .then((res) => setData(res.data))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
