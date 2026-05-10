import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-3 inline-flex flex-col items-start">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-1 h-6 w-6 -mb-3 text-[var(--primary)]"
      >
        <path d="M12 17V13" />
        <path d="M12 11C12 8 9.5 6 7 6c0 3 2.5 5 5 5z" />
        <path d="M12 11C12 8 14.5 6 17 6c0 3-2.5 5-5 5z" />
      </svg>
      <div className="inline-flex items-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] px-3 py-1 text-sm font-semibold text-white">
        {children}
      </div>
    </div>
  );
}
