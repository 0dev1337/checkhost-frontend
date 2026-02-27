/* ------------------------------------------------------------------ */
/*  Shared TypeScript types for the CheckHost frontend                */
/* ------------------------------------------------------------------ */

/** IP-API geo-location response shape. */
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

/** ipinfo.io response shape. */
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

/** Combined backend response from `/info`. */
export interface InfoResponse {
  ipapi: IPAPI;
  ipinfo: IPInfo;
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
