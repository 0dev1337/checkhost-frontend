import HttpSurface from "@/app/components/Http/HttpSurface";
import React from "react";
import HttpTables from "./HttpTables";

const page = () => {
  return (
    <div className='mt-5'>
      <HttpTables />
      {/* <HttpSurface /> */}
    </div>
  );
};

export default page;
