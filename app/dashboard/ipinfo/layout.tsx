import type { ReactNode } from "react";

export default function IpInfoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-4xl min-w-0">{children}</div>
    </div>
  );
}
