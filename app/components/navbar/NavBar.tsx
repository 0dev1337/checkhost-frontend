"use client";
import { useState } from "react";
import eye from "../../../public/icons/eye.svg";
import Image from "next/image";

const NavBar = () => {
  const ip = "192.168.1.1";
  const country = "United States";

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex items-center gap-3 justify-center">
      <Image
        src={eye}
        alt="CheckHost Logo"
        className="w-6 h-6 dark:invert cursor-pointer"
        onClick={() => setIsVisible((prev) => !prev)}
      />
      <h1 className="text-base underline text-foreground px-2 py-1 rounded-md">
        IP: {isVisible ? ip : "x.x.x.x"}
      </h1>
      <h1 className="text-base">Country: {isVisible ? country : "Redacted"}</h1>
    </div>
  );
};

export default NavBar;
