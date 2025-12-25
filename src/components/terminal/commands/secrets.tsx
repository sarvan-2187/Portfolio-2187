import { Command } from "../types";

const secrets: Command = {
  name: "secrets",
  description: "List hidden commands",
  execute: () => ({
    type: "output",
    content: (
      <div className="space-y-2">
        <div className="text-white/80">Hidden shortcuts</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {["lkdin", "insta", "yt", "wtsp", "gui", "watch", "repo"].map(cmd => (
            <div key={cmd} className="px-3 py-2 rounded-md border border-emerald-400/40 bg-black/50 text-emerald-200">
              {cmd}
            </div>
          ))}
        </div>
      </div>
    )
  })
};

export default secrets;
