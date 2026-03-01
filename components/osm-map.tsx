"use client";

import dynamic from "next/dynamic";

const OSMMap = dynamic(() => import("./osm-map.client"), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full rounded-2xl border border-white/10 bg-white/5" />
  ),
});

export default OSMMap;
