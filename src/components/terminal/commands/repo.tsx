import { Command } from "../types";

const repo: Command = {
  name: "repo",
  description: "Open portfolio repository",
  hidden: true,
  execute: () => {
    if (typeof window !== "undefined") {
      window.open("https://github.com/sarvan-2187/Portfolio-2187", "_blank", "noopener,noreferrer");
    }
    return {
      type: "output",
      content: (
        <span className="text-emerald-200">Opening repository in a new tab…</span>
      )
    };
  }
};

export default repo;
