import Image from "next/image";
import { Surface } from "@heroui/react";
import LogoDark from "@/public/pngs/mainlogo-dark.png";
import SearchBox from "./search-box";
import ActionButtons from "./action-buttons";

export default function SearchSurface() {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="w-full max-w-4xl sm:max-w-4xl rounded-4xl p-4 sm:p-6 min-w-0"
      >
        <div className="flex flex-row gap-4 items-start">
          <Image
            src={LogoDark}
            alt="CheckHost Logo"
            width={48}
            height={48}
            className="w-12 h-auto object-contain shrink-0"
          />

          <div className="flex-1 w-full min-w-0">
            <SearchBox />
            <div className="mt-2 min-w-0">
              <ActionButtons />
            </div>
          </div>
        </div>
      </Surface>
    </div>
  );
}
