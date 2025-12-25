import { Command } from "../types";

const lkdin: Command = {
  name: "lkdin",
  description: "Open LinkedIn",
  hidden: true,
  execute: () => {
    if (typeof window !== "undefined") {
      window.open("https://www.linkedin.com/in/nagarampalli-sarvan-kumar/", "_blank", "noopener,noreferrer");
    }
    return {
      type: "output",
      content: (
        <span className="text-emerald-200">Opening LinkedIn in a new tab…</span>
      )
    };
  }
};

export default lkdin;
