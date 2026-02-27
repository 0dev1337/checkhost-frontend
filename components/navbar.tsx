"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import eye from "@/public/icons/eye.svg";
import apiClient from "@/lib/api-client";
import type { InfoResponse } from "@/lib/types";

export default function Navbar() {
  const [ip, setIp] = useState("Loading...");
  const [country, setCountry] = useState("Loading...");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    apiClient
      .get<InfoResponse>("/info")
      .then((res) => {
        const info = res.data.ipapi ?? res.data.ipinfo;
        setIp(info?.ip ?? "Unknown");
        setCountry(info?.country ?? "Unknown");
      })
      .catch(() => {
        setIp("Error");
        setCountry("Error");
      });
  }, []);

  return (
    <div className="flex items-center gap-3 justify-center">
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        aria-label={isVisible ? "Hide IP information" : "Show IP information"}
      >
        <Image
          src={eye}
          alt=""
          className="w-6 h-6 dark:invert cursor-pointer"
        />
      </button>

      <p className="text-base underline text-foreground px-2 py-1 rounded-md">
        IP: {isVisible ? ip : "x.x.x.x"}
      </p>

      <p className="text-base">
        Country: {isVisible ? country : "Redacted"}
      </p>
    </div>
  );
}
