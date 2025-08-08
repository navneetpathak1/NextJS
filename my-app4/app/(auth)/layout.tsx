import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="text-yellow-200">
        header
      </div>
      <div>
        {children}
      </div>
      <div>
        footer
      </div>
    </div>
  );
}
