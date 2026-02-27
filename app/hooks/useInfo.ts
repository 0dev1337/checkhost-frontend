import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

// shapes returned by the backend
export interface IPAPI {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  country_name: string;
  latitude: number;
  longitude: number;
  org: string;
  postal: string;
  timezone: string;
}

export interface IPInfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

export interface InfoResponse {
  ipapi: IPAPI;
  ipinfo: IPInfo;
}

/**
 * React hook to load the `/info` endpoint once on mount.
 *
 * ```tsx
 * const { data, loading, error } = useInfo();
 * ```
 */
export function useInfo() {
  const [data, setData] = useState<InfoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    apiClient
      .get<InfoResponse>("/info")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
