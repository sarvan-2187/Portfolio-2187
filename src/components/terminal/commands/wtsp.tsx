import { Command } from "../types";

const wtsp: Command = {
  name: "wtsp",
  description: "Open WhatsApp",
  hidden: true,
  execute: () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.link/t1td0b", "_blank", "noopener,noreferrer");
    }
    return {
      type: "output",
      content: (
        <span className="text-emerald-200">Opening WhatsApp in a new tab…</span>
      )
    };
  }
};

export default wtsp;
