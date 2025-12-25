import { Command } from "../types";

const yt: Command = {
  name: "yt",
  description: "Open YouTube",
  hidden: true,
  execute: () => {
    if (typeof window !== "undefined") {
      window.open("https://youtube.com/@sarvankumarnagarampalli?si=EF7qnkqncoolWnvP", "_blank", "noopener,noreferrer");
    }
    return {
      type: "output",
      content: (
        <span className="text-emerald-200">Opening YouTube in a new tab…</span>
      )
    };
  }
};

export default yt;
