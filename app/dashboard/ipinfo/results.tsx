import { Surface, Separator } from "@heroui/react";
import { Server } from "lucide-react";
import React from "react";

const data = [
  { label: "IP Address", value: "2401:4900:1c00:3175:91ca:df27:cb21:3eea" },
  { label: "Reverse", value: "2401:4900:1c00:3175:91ca:df27:cb21:3eea" },
  { label: "Privacy", value: "-" },
  { label: "ISP", value: "AS24560 Bharti Airtel Limited" },
  { label: "Organization", value: "Bharti Airtel Limited" },
  { label: "Country", value: "🇮🇳 India" },
  { label: "City", value: "Kolkata" },
  { label: "Region", value: "West Bengal" },
  { label: "Time zone", value: "Asia/Kolkata" },
];

const Results = () => {
  return (
    <div className="flex justify-center px-4">
      <Surface
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6"
        variant="default"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Server className="w-5 h-5 text-indigo-300" />
          <p className="text-xl font-bold">Host Information</p>
        </div>

        <Separator className="mb-2" />

        {/* Rows */}
        {data.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex items-center py-4 gap-4">
              <span className="w-36 text-sm text-muted-foreground shrink-0">
                {item.label}
              </span>
              <span className="text-sm font-medium break-all">
                {item.value}
              </span>
            </div>
            {index < data.length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </Surface>
    </div>
  );
};

export default Results;
