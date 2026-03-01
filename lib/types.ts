/* ------------------------------------------------------------------ */
/*  Shared TypeScript types for the CheckHost frontend                */
/* ------------------------------------------------------------------ */

/** IP-API geo-location response shape. */
export interface IPAPI {
  query: string;
  hostname: string;
  city: string;
  regionName: string;
  countryCode: string;
  country: string;
  lat: number;
  lon: number;
  org: string;
  zip: string;
  timezone: string;
  isp : string;
  as : string;
}

/** Combined backend response from `/info`. */
export interface InfoResponse {
  ipapi: IPAPI;
}



/// Whois response types (from `whois-json` package, see backend/internal/handler/whois.go)
interface Whois {
  "abuse-c": string;
  "abuse-mailbox": string[];
  address: string[];
  "admin-c": string[];
  auth: string;
  country: string[];
  descr: string[];
  "e-mail": string[];
  "fax-no": string;
  inetnum: string;
  irt: string;
  "last-modified": string[];
  "mnt-by": string[];
  "mnt-irt": string;
  "mnt-lower": string;
  "mnt-ref": string;
  "mnt-routes": string;
  netname: string;
  "nic-hdl": string[];
  org: string;
  "org-name": string;
  "org-type": string;
  organisation: string;
  origin: string;
  phone: string[];
  remarks: string[];
  role: string[];
  route: string;
  source: string[];
  status: string;
  "tech-c": string[];
}

export interface WhoisResponse {
  whois: Whois;
}


/* ------------------------------------------------------------------ */
/*  Result-table row types                                            */
/* ------------------------------------------------------------------ */

/** Fields shared by every result row. */
export interface BaseResultRow {
  location: string;
  country: string;
  flagCode: string;
  result: string;
}

export interface PingResultRow extends BaseResultRow {
  rttMin: number;
  rttAvg: number;
  rttMax: number;
  ipAddress: string;
}

export interface HttpResultRow extends BaseResultRow {
  time: number;
  code: number;
  ipAddress: string;
}

export interface TcpResultRow extends BaseResultRow {
  time: number;
  ipAddress: string;
}

export interface BgpResultRow extends BaseResultRow {
  time: number;
}

export interface IPv6ResultRow extends BaseResultRow {
  time: number;
  ipAddress: string;
}

/* ------------------------------------------------------------------ */
/*  Generic column definition for `ResultsTable`                      */
/* ------------------------------------------------------------------ */

import type { ReactNode } from "react";

export interface Column<T> {
  /** Display label shown in the muted prefix text. */
  label: string;
  /** Property key on `T` to read the value from. */
  key: keyof T;
  /** Optional custom renderer (falls back to `String(value)`). */
  render?: (value: T[keyof T], row: T) => ReactNode;
  /** When true the column spans the full width on mobile. */
  fullWidth?: boolean;
  /** Tailwind `min-w-[…]` for the desktop cell. */
  desktopWidth?: string;
  /** `text-left | text-center | text-right` for the desktop cell. */
  align?: "text-left" | "text-center" | "text-right";
}

/* ------------------------------------------------------------------ */
/*  Feature card (home page grid)                                     */
/* ------------------------------------------------------------------ */

export interface Feature {
  title: string;
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Description-panel data (dashboard tool pages)                     */
/* ------------------------------------------------------------------ */

export interface DescriptionPanelData {
  title: string;
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Navigation tab                                                    */
/* ------------------------------------------------------------------ */

export interface NavTab {
  label: string;
  href: string;
}
