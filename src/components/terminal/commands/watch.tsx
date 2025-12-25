import { Command } from "../types";

const formatTime = () => {
  const now = new Date();
  const time = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const date = now.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  return { time, date };
};

const watch: Command = {
  name: "watch",
  description: "Show current time",
  hidden: true,
  execute: () => {
    const { time, date } = formatTime();
    const location = "Chennai, India (IST)";
    return {
      type: "output",
      content: (
        <div className="rounded-lg border border-emerald-400/30 bg-black/50 p-3 text-emerald-100 space-y-1">
          <div className="text-lg font-semibold">{time}</div>
          <div className="text-white/70 text-sm">{date}</div>
          <div className="text-white/60 text-xs">{location}</div>
        </div>
      )
    };
  }
};

export default watch;
