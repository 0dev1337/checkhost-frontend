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
        <div className="flex flex-row gap-4">
          <Image
            src={LogoDark}
            alt="CheckHost Logo"
            width={48} // Define explicit width for Next.js Image (approx w-12)
            height={48} // Define explicit height
            className="w-12 h-auto object-contain" // Small size (3rem/48px)
          />
          <div className="ml-5">
            <SearchBox />
            <div className="mt-2">
              <ActionButtons />
            </div>
          </div>
        </div>
      </Surface>
    </div>
  );
}

export default SearchSurface;
