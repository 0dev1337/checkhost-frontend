import BGPSurface from "@/app/components/BGP/BGPSurface";
import React from "react";
import BgpTables from "./BgpTables";

const page = () => {
  return (
    <div className="mt-5">
      <BgpTables />
    </div>
  );
};

export default page;
