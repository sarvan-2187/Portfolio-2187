"use client";
import { useState, useRef, useEffect } from "react";
import { commands } from "./commands";
import { TerminalLine } from "./types";

type Props = { className?: string };

export default function Terminal({ className }: Props) {
  const initialLines: TerminalLine[] = [
    { type: "system", content: "Welcome to Sarvan's CLI Portfolio" },
    { type: "system", content: "Type 'help' to list available commands" },
    { type: "system", content: <div className="border-t border-white/10 my-3" /> },
  ];
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
      e.preventDefault();
      setLines(initialLines);
      return;
    }
    if (e.key === "Enter") {
      const [cmd, ...args] = input.trim().split(/\s+/);
      if (!cmd) return;

      if (cmd === "clear") {
        setLines(initialLines);
        setHistory(prev => [input, ...prev]);
        setHistoryIdx(-1);
        setInput("");
        return;
      }

      const command = commands[cmd];
      setLines(prev => [
        ...prev,
        { type: "system", content: (<span className="text-white/70">You entered: <span className="text-emerald-300">{input}</span></span>) }
      ]);
      setHistory(prev => [input, ...prev]);
      setHistoryIdx(-1);

      if (!command) {
        setLines(prev => [
          ...prev,
          { type: "output", content: <span className="text-red-400">command not found: {cmd}</span> },
          { type: "system", content: <div className="border-t border-white/10 my-4" /> }
        ]);
      } else {
        const out = command.execute(args);
        setLines(prev => [...prev, ...(Array.isArray(out) ? out : [out]), { type: "system", content: <div className="border-t border-white/10 my-4" /> }]);
      }
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIdx = Math.min(history.length - 1, historyIdx + 1);
      if (history.length > 0) {
        setHistoryIdx(nextIdx);
        const next = history[nextIdx] ?? input;
        setInput(next);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = Math.max(-1, historyIdx - 1);
      setHistoryIdx(nextIdx);
      const next = nextIdx === -1 ? "" : history[nextIdx] ?? "";
      setInput(next);
    }
  };

  return (
    <div className={("flex flex-col h-full text-xs sm:text-sm md:text-base "+(className ?? ""))}>
      {/* Output window - scrollable */}
      <div className="terminal-scrollbar flex-1 min-h-0 bg-black/80 text-emerald-400 rounded-xl border border-white/10 p-3 sm:p-4 overflow-y-auto overflow-x-hidden break-words">
        {lines.map((l, i) => {
          const cls =
            l.type === "system"
              ? "text-white/60 mb-2"
              : l.type === "input"
                ? "text-emerald-300 mb-2"
                : "mb-4";
          return (
            <div key={i} className={cls}>
              {l.content}
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input line - fixed at bottom */}
      <div className="shrink-0 mt-3 rounded-lg p-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500">
        <div className="flex items-center gap-2 bg-black rounded-lg p-3">
          <span className="text-emerald-500">sarvan@portfolio</span>
          <span className="text-white/60">:</span>
          <span className="text-sky-400">~</span>
          <span className="text-white/60">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal input"
            placeholder=""
            className="bg-transparent outline-none flex-1 caret-emerald-400 selection:bg-emerald-800/40 min-w-0"
          />
        </div>
      </div>

      {/* Footer info */}
      <div className="shrink-0 mt-3 text-white/50 text-xs break-words">
        · Shortcut to clear the screen: Ctrl+L or clear
      </div>
    </div>
  );
}

