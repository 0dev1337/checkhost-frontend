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
          w-full max-w-xl
          sm:max-w-2xl
          rounded-3xl p-4 sm:p-6
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
            {/* <h3 className="text-base font-semibold text-foreground">
              Surface Content
            </h3> */}

            {/* <p className="mt-2 text-sm text-muted">
              This is a default surface variant. It uses bg-surface styling.
            </p> */}
          </div>
        </div>
      </Surface>
    </div>
  );
}

export default SearchSurface;
