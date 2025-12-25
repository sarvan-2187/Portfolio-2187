import { Command } from "../types";

const gui: Command = {
  name: "gui",
  description: "Back to GUI",
  hidden: true,
  execute: () => ({
    type: "output",
    content: (
      <a
        href="/"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-emerald-400/40 bg-black/60 text-emerald-200 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-300"
      >
        Back to GUI
      </a>
    )
  })
};

export default gui;
