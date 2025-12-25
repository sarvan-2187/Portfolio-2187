"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  full?: boolean;
};

export default function WindowShell({ title = "Terminal", children, className, full = false }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    setLoading(true);
    setTimeout(() => router.push("/"), 200);
  };
  return (
    <div className={(full
        ? "fixed inset-0 flex flex-col rounded-none shadow-none border-none bg-black/90 backdrop-blur-0"
        : "w-full max-w-5xl rounded-2xl shadow-2xl border border-white/10 bg-zinc-900/80 backdrop-blur overflow-hidden"
      ) + (className ? " " + className : "")}>
      <div className={(full
          ? "shrink-0 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/80"
          : "flex items-center justify-between px-4 py-2 border-b border-white/10 bg-zinc-800/60 rounded-t-2xl"
        )}>
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-500 shadow-sm" />
          <span className="size-3 rounded-full bg-yellow-400 shadow-sm" />
          <span className="size-3 rounded-full bg-green-500 shadow-sm" />
        </div>
        <div className="text-xs sm:text-sm font-medium text-white/70 select-none truncate">
          {title}
        </div>
        <div className="flex justify-end w-28">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md border border-emerald-400/40 bg-black/60 text-white/80 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-200 text-xs sm:text-sm"
          >
            GUI
          </button>
        </div>
      </div>
      <div className={full ? "flex-1 min-h-0 p-4 overflow-hidden" : "p-3 sm:p-4 lg:p-6 overflow-x-hidden"}>
        {children}
      </div>
      {loading && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur flex flex-col items-center justify-center gap-2 text-white text-sm">
          <div className="h-8 w-8 border-2 border-emerald-400/60 border-t-transparent rounded-full animate-spin" />
          <span className="text-emerald-200">Loading GUI…</span>
        </div>
      )}
    </div>
  );
}
