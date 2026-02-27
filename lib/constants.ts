import type {
  Feature,
  NavTab,
  DescriptionPanelData,
  Column,
  PingResultRow,
  HttpResultRow,
  TcpResultRow,
  BgpResultRow,
  IPv6ResultRow,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Navigation tabs (shown inside SearchSurface)                      */
/* ------------------------------------------------------------------ */

export const NAV_TABS: NavTab[] = [
  { label: "Info", href: "/dashboard/ipinfo" },
  { label: "Ping", href: "/dashboard/ping" },
  { label: "HTTP", href: "/dashboard/http" },
  { label: "TCP Port", href: "/dashboard/tcp" },
  { label: "BGP", href: "/dashboard/bgp" },
  { label: "IPv6", href: "/dashboard/ipv6" },
  { label: "Whois", href: "/dashboard/radb" },
];

/* ------------------------------------------------------------------ */
/*  Feature cards (home page)                                         */
/* ------------------------------------------------------------------ */

export const FEATURES: Feature[] = [
  {
    title: "Info",
    description:
      "helps to know geolocation data of IP address or hostname: country, region, city, ZIP/postal code, time zone, local time, IP range, ISP, organization.",
  },
  {
    title: "Ping",
    description:
      "allows to test the reachability of a host, to measure network latency and packets loss from different servers in the world.",
  },
  {
    title: "HTTP",
    description:
      "is for checking website's response performance and availability from many countries and datacenters.",
  },
  {
    title: "DNS",
    description:
      "is for retrieving A, AAAA and PTR records with TTL (time-to-live) from nameservers around the world for checking updates on DNS servers.",
  },
  {
    title: "TCP",
    description:
      "checks the possibility of a TCP connection to host's specified port.",
  },
  {
    title: "TraceRoute",
    description:
      "shows the path your data takes from your device to a destination",
  },
  {
    title: "BGP",
    description:
      "shows you who controls an IP address and how traffic is routed to it on the internet",
  },
  {
    title: "IPv6",
    description:
      "checks if the given host supports ipv6 connectivity by looking for AAAA records.",
  },
];

/* ------------------------------------------------------------------ */
/*  Description panels (per-tool dashboard pages)                     */
/* ------------------------------------------------------------------ */

export const DESCRIPTION_PANELS: Record<string, DescriptionPanelData> = {
  ping: {
    title: "Ping Server",
    description: `Check the reachability of a host with Ping from USA, Canada, Europe and other places.

No need to ping manually website/server from different places. Ping hostname in automatic mode with our online service from many places around the world in one click.

Ping the world and be happy!

Examples:

4.2.2.2
one.one.one.one
www.google.com`,
  },
  http: {
    title: "Check Website",
    description: `Quick check any URL! HTTP or HTTPS with any ports. Check website availability and performance with responses from many servers in various countries. This is website monitoring in easy way!

Examples:

https://1.1.1.1
http://juick.com
https://www.fortify.net/sslcheck.html
http://\u7D0D\u8C46.\u4F8B.jp`,
  },
  bgp: {
    title: "BGP Path Lookup",
    description: `Analyze BGP routing information for any IP address or ASN worldwide.

No need to dig through raw routing tables. Instantly view prefixes, upstreams, peers, and announced routes using our simple BGP lookup tool.

Understand the routing. Control the traffic.

Examples:
8.8.8.8
AS15169
1.1.1.1`,
  },
  tcp: {
    title: "TCP Connect",
    description: `Make TCP connection to any port of any IP or website from different places. Check port status of server.

For example you could check a new SSH port of your server for availability from many countries. Website monitoring or any other services monitoring with this tool are able to make system administrator's day.

Examples:

4.2.2.2:53
http://bitcoin.org
ssmtp://smtp.gmail.com
https://1.1.1.1`,
  },
  ipv6: {
    title: "IPv6 Connectivity Test",
    description: `Check whether a website or server supports IPv6 from locations worldwide.

Instantly verify IPv6 availability without complex setup or local testing. Our online tool tests your hostname from multiple global points and reports IPv6 readiness clearly.

Be future-ready. Go IPv6 with confidence.

Examples:
google.com
cloudflare.com
ipv6-test.com`,
  },
  radb: {
    title: "Whois / RADB Lookup",
    description: `Get detailed Whois and RADB information for any IP address, ASN, or domain name.

No need to query multiple databases manually. Instantly retrieve registration details, routing objects, ownership, and contact information from global Whois and RADB sources in one place.

Know who owns it. Know how it's routed.

Examples:
8.8.8.8
AS13335
example.com`,
  },
  traceroute: {
    title: "Traceroute",
    description: `Trace the network path to a host with Traceroute from USA, Canada, Europe and other locations.

No need to run traceroute commands manually from different machines. Discover every hop between our global probes and your hostname automatically in one click.

See the route. Find the delay. Fix faster.

Examples:
4.2.2.2
one.one.one.one
www.google.com`,
  },
  udp: {
    title: "UDP Connect",
    description: `Check UDP connection to any port of any IP or website from different places.

For example you could check a DNS or game server for availability from many countries.

Examples:

8.8.8.8:53
domain://1.1.1.1
freebsd.org:44444`,
  },
  ipinfo: {
    title: "IP and Website Location",
    description: `Here you could get geographical location of any hostname or IP address:

- Country
- Region/State
- City
- ZIP/Postal code
- Time zone
- Local time
- IP range
- Organization
- ISP
This service is useful when you want to know a location of your site or server, or just any IP address. Make website monitoring more comfortable.

Examples:

87.250.250.3
www.google.com
check-host.net`,
  },
};

/* ------------------------------------------------------------------ */
/*  Column definitions for each protocol table                        */
/* ------------------------------------------------------------------ */

export const PING_COLUMNS: Column<PingResultRow>[] = [
  { label: "Result", key: "result", desktopWidth: "min-w-[120px]", align: "text-center" },
  {
    label: "RTT",
    key: "rttAvg",
    desktopWidth: "min-w-[200px]",
    align: "text-center",
    render: (_v, row) => `${row.rttMin} / ${row.rttAvg} / ${row.rttMax} ms`,
  },
  { label: "IP", key: "ipAddress", desktopWidth: "min-w-[120px]", align: "text-right" },
];

export const HTTP_COLUMNS: Column<HttpResultRow>[] = [
  { label: "Result", key: "result", desktopWidth: "min-w-[120px]", align: "text-center" },
  {
    label: "Time",
    key: "time",
    desktopWidth: "min-w-[200px]",
    align: "text-center",
    render: (v) => `${v} s`,
  },
  { label: "Code", key: "code", desktopWidth: "min-w-[120px]", align: "text-right" },
];

export const TCP_COLUMNS: Column<TcpResultRow>[] = [
  { label: "Result", key: "result", desktopWidth: "min-w-[120px]", align: "text-center" },
  {
    label: "Time",
    key: "time",
    desktopWidth: "min-w-[200px]",
    align: "text-center",
    render: (v) => `${v} s`,
  },
  { label: "IP", key: "ipAddress", desktopWidth: "min-w-[120px]", align: "text-right" },
];

export const BGP_COLUMNS: Column<BgpResultRow>[] = [
  { label: "Result", key: "result", desktopWidth: "min-w-[120px]", align: "text-center", fullWidth: true },
  {
    label: "Time",
    key: "time",
    desktopWidth: "min-w-[200px]",
    align: "text-center",
    render: (v) => `${v} s`,
  },
];

export const IPV6_COLUMNS: Column<IPv6ResultRow>[] = [
  { label: "Result", key: "result", desktopWidth: "min-w-[120px]", align: "text-center" },
  {
    label: "Time",
    key: "time",
    desktopWidth: "min-w-[200px]",
    align: "text-center",
    render: (v) => `${v} s`,
  },
  { label: "IP", key: "ipAddress", desktopWidth: "min-w-[120px]", align: "text-right" },
];

/* ------------------------------------------------------------------ */
/*  Mock data (temporary -- replace with real API calls)              */
/* ------------------------------------------------------------------ */

export const MOCK_PING: PingResultRow[] = [
  { location: "Austria, Vienna", country: "Austria", flagCode: "at", result: "4/4", rttMin: 0.8, rttAvg: 0.8, rttMax: 0.9, ipAddress: "1.1.1.1" },
  { location: "Brazil, Sao Paulo", country: "Brazil", flagCode: "br", result: "4/4", rttMin: 1.6, rttAvg: 1.8, rttMax: 2.1, ipAddress: "1.1.1.1" },
  { location: "India, Kolkata", country: "India", flagCode: "in", result: "4/4", rttMin: 31.0, rttAvg: 31.2, rttMax: 31.3, ipAddress: "1.1.1.1" },
  { location: "Germany, Frankfurt", country: "Germany", flagCode: "de", result: "4/4", rttMin: 1.4, rttAvg: 1.6, rttMax: 1.8, ipAddress: "1.1.1.1" },
  { location: "United States, New York", country: "United States", flagCode: "us", result: "4/4", rttMin: 2.3, rttAvg: 2.5, rttMax: 2.7, ipAddress: "1.1.1.1" },
  { location: "Japan, Tokyo", country: "Japan", flagCode: "jp", result: "4/4", rttMin: 1.3, rttAvg: 1.3, rttMax: 1.3, ipAddress: "1.1.1.1" },
  { location: "United Kingdom, London", country: "United Kingdom", flagCode: "gb", result: "4/4", rttMin: 3.2, rttAvg: 3.4, rttMax: 3.6, ipAddress: "1.1.1.1" },
  { location: "Singapore, Singapore", country: "Singapore", flagCode: "sg", result: "4/4", rttMin: 5.1, rttAvg: 5.3, rttMax: 5.5, ipAddress: "1.1.1.1" },
  { location: "Australia, Sydney", country: "Australia", flagCode: "au", result: "4/4", rttMin: 12.5, rttAvg: 12.8, rttMax: 13.1, ipAddress: "1.1.1.1" },
  { location: "Canada, Toronto", country: "Canada", flagCode: "ca", result: "4/4", rttMin: 0.9, rttAvg: 1.0, rttMax: 1.1, ipAddress: "1.1.1.1" },
];

export const MOCK_HTTP: HttpResultRow[] = [
  { location: "United States, New York", country: "United States", flagCode: "us", result: "OK", time: 0.123, code: 200, ipAddress: "104.26.10.228" },
  { location: "United Kingdom, London", country: "United Kingdom", flagCode: "gb", result: "OK", time: 0.089, code: 200, ipAddress: "104.26.10.228" },
  { location: "Germany, Frankfurt", country: "Germany", flagCode: "de", result: "OK", time: 0.045, code: 200, ipAddress: "104.26.10.228" },
  { location: "Singapore, Singapore", country: "Singapore", flagCode: "sg", result: "Timeout", time: 5.0, code: 0, ipAddress: "N/A" },
  { location: "Japan, Tokyo", country: "Japan", flagCode: "jp", result: "OK", time: 0.156, code: 200, ipAddress: "104.26.10.228" },
  { location: "Brazil, Sao Paulo", country: "Brazil", flagCode: "br", result: "OK", time: 0.234, code: 200, ipAddress: "104.26.10.228" },
  { location: "Australia, Sydney", country: "Australia", flagCode: "au", result: "Redirect", time: 0.312, code: 301, ipAddress: "104.26.10.228" },
  { location: "Canada, Toronto", country: "Canada", flagCode: "ca", result: "OK", time: 0.078, code: 200, ipAddress: "104.26.10.228" },
  { location: "India, Mumbai", country: "India", flagCode: "in", result: "OK", time: 0.198, code: 200, ipAddress: "104.26.10.228" },
  { location: "France, Paris", country: "France", flagCode: "fr", result: "Error", time: 2.456, code: 500, ipAddress: "104.26.10.228" },
];

export const MOCK_TCP: TcpResultRow[] = [
  { location: "Austria, Vienna", country: "Austria", flagCode: "at", result: "4/4", time: 0.8, ipAddress: "1.1.1.1" },
  { location: "Germany, Berlin", country: "Germany", flagCode: "de", result: "4/4", time: 1.2, ipAddress: "8.8.8.8" },
  { location: "United Kingdom, London", country: "United Kingdom", flagCode: "gb", result: "3/4", time: 2.5, ipAddress: "1.0.0.1" },
  { location: "France, Paris", country: "France", flagCode: "fr", result: "4/4", time: 1.8, ipAddress: "208.67.222.222" },
  { location: "Japan, Tokyo", country: "Japan", flagCode: "jp", result: "2/4", time: 3.6, ipAddress: "9.9.9.9" },
  { location: "United States, New York", country: "United States", flagCode: "us", result: "4/4", time: 0.5, ipAddress: "4.4.4.4" },
];

export const MOCK_BGP: BgpResultRow[] = [
  { location: "Los Angeles, CA", country: "USA", flagCode: "US", result: "Arelion\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 1299 13335\nCommunities: 1299:35000", time: 0 },
  { location: "Fremont, CA", country: "USA", flagCode: "US", result: "Hurricane Electric\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 6939 13335\nCommunities: none", time: 0 },
  { location: "Los Angeles, CA", country: "USA", flagCode: "US", result: "Vultr\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 20473 13335\nCommunities: 20473:200 20473:13335 64515:44 20473:200:13335", time: 0 },
  { location: "Dallas, TX", country: "USA", flagCode: "US", result: "Swiftnode\nRouter offline", time: 0 },
  { location: "Grand Rapids, MI", country: "USA", flagCode: "US", result: "RackGenius\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 32002 13335\nCommunities: 13335:10116", time: 0 },
  { location: "Ciudad del Este", country: "Paraguay", flagCode: "PY", result: "Wind Net\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 269783 13335\nCommunities: none", time: 0 },
  { location: "Barueri", country: "Brazil", flagCode: "BR", result: "Migo Internet\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 263152 13335\nCommunities: 8880:101 13335:10097", time: 0 },
  { location: "Newcastle", country: "UK", flagCode: "GB", result: "FyfeWeb\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 212396 13335\nCommunities: 13335:10021 13335:19020 13335:20050 13335:20500 13335:20530 212396:4:1 212396:200:1", time: 0 },
  { location: "Amsterdam", country: "Netherlands", flagCode: "NL", result: "Route64\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 212895 13335\nCommunities: 13335:20500 13335:10020 13335:20530 13335:19020 13335:20050 212895:2:2", time: 0 },
  { location: "Zurich", country: "Switzerland", flagCode: "CH", result: "iFog\nRoute 1.1.1.0/24 announced by AS13335 CLOUDFLARENET\nAS path: 34927 13335\nCommunities: 34927:810 34927:830", time: 0 },
];

export const MOCK_IPV6: IPv6ResultRow[] = [
  { location: "Austria, Vienna", country: "Austria", flagCode: "at", result: "IPv6 supported", time: 0.8, ipAddress: "2401:4900:1c01:8c84:38ed:89f8:fc34:18ac" },
  { location: "USA, Los Angeles", country: "USA", flagCode: "us", result: "IPv6 supported", time: 12.4, ipAddress: "2606:4700:4700::1111" },
  { location: "USA, Fremont", country: "USA", flagCode: "us", result: "IPv6 supported", time: 11.2, ipAddress: "2606:4700:4700::1001" },
  { location: "UK, Newcastle", country: "UK", flagCode: "gb", result: "IPv6 supported", time: 85.6, ipAddress: "2a06:98c0:1::3:1111" },
  { location: "Netherlands, Amsterdam", country: "Netherlands", flagCode: "nl", result: "IPv6 supported", time: 78.3, ipAddress: "2a06:98c1:2402:123::1111" },
  { location: "Switzerland, Zurich", country: "Switzerland", flagCode: "ch", result: "IPv6 supported", time: 82.1, ipAddress: "2001:620:4000::1111" },
  { location: "Brazil, Barueri", country: "Brazil", flagCode: "br", result: "IPv6 supported", time: 210.7, ipAddress: "2804:10:100::1111" },
  { location: "Paraguay, Ciudad del Este", country: "Paraguay", flagCode: "py", result: "IPv6 supported", time: 245.9, ipAddress: "2801:400::1111" },
  { location: "India, Mumbai", country: "India", flagCode: "in", result: "IPv6 supported", time: 45.2, ipAddress: "2405:8100:6c00::1111" },
  { location: "Australia, Sydney", country: "Australia", flagCode: "au", result: "IPv6 supported", time: 198.4, ipAddress: "2400:6180:100::1111" },
];
