import { Command } from "../types";
import { commands } from "./index";

const help: Command = {
  name: "help",
  description: "List available commands",
  execute: () => ({
    type: "output",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.values(commands).filter(cmd => !cmd.hidden || cmd.name === "secrets").map(cmd => (
          <div
            key={cmd.name}
            className="rounded-lg p-3 border border-white/10 bg-black/40 hover:bg-black/60 transition-colors duration-300 hover:border-emerald-400/40 hover:outline hover:outline-2 hover:outline-emerald-400/30 hover:-outline-offset-2"
          >
            <div className="inline-flex items-center gap-2">
              <span className="px-2 py-1 rounded-md border border-emerald-400/40 text-emerald-400 bg-black/60 font-medium">
                {cmd.name}
              </span>
            </div>
            <div className="text-white/80 mt-2">
              {cmd.description}
            </div>
          </div>
        ))}
      </div>
    )
  })
};

export default help;