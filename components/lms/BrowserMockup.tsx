import type { ReactNode } from "react";
import { cn } from "@lib/utils";

type BrowserMockupProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

/** A lightweight browser window chrome used to frame platform UI mockups. */
export function BrowserMockup({
  children,
  url = "app.christian360.com",
  className,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xl",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/60" aria-hidden />
        <span className="size-2.5 rounded-full bg-amber-400/70" aria-hidden />
        <span className="size-2.5 rounded-full bg-primary/60" aria-hidden />
        <div className="ml-3 flex-1 truncate rounded-md bg-background/80 px-3 py-1 text-center text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      {/* Viewport */}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}
