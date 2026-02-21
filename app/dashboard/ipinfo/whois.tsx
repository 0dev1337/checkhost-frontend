import React from "react";
import { Surface, Separator, Button } from "@heroui/react";
import { File } from "lucide-react";

const Whois = () => {
  return (
    <div className="flex justify-center px-4">
      <Surface
        className="w-full max-w-4xl rounded-4xl p-4 sm:p-6 min-h-[200px] flex flex-col
        border border-dashed border-indigo-300/40"
        variant="default"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <File className="w-5 h-5 text-indigo-300" />
          <p className="text-xl font-bold">Whois Information</p>
        </div>

        <Separator className="mb-2" />
        <div className="flex-1 flex items-center justify-center">
          <Button size="lg" variant="outline" className="px-10 py-4 text-base">
            Fetch
          </Button>
        </div>
      </Surface>
    </div>
  );
};

export default Whois;
