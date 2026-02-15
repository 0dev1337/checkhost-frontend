import { Surface } from "@heroui/react";
import LogoDark from "../../../public/pngs/mainlogo-dark.png";
import Image from "next/image";
import SearchBox from "./SearchBox";
import ActionButtons from "./ActionButtons";
export function SearchSurface() {
  return (
    <div className="flex justify-center px-4">
      <Surface
        variant="default"
        className="
          w-full max-w-4xl
          sm:max-w-4xl
          rounded-4xl p-4 sm:p-6
        "
      >
        <div className="flex flex-row gap-4 items-start">
          <Image
            src={LogoDark}
            alt="CheckHost Logo"
            width={48}
            height={48}
            className="w-12 h-auto object-contain shrink-0"
          />

          {/* make this column grow and fill */}
          <div className="ml-5 flex-1">
            <SearchBox />

            {/* ensure full width for buttons */}
            <div className="mt-2 w-full">
              <ActionButtons />
            </div>
          </div>
        </div>
      </Surface>
    </div>
  );
}

export default SearchSurface;
