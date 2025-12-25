import { Command } from "../types";
import { certifications } from "@/lib/content";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";

const certificationsCmd: Command = {
  name: "certifications",
  description: "List certifications",
  execute: () => ({
    type: "output",
    content: (
      <div className="space-y-3">
        {certifications.map((c) => (
          <div
            key={c.title}
            className="group relative rounded-lg p-3 border border-transparent bg-black/40 hover:bg-black/60 transition-colors duration-300 hover:border-emerald-400/40 hover:outline hover:outline-2 hover:outline-emerald-400/30 hover:-outline-offset-2"
          >
            <span className="inline-flex items-center gap-1 text-green-400">
              <CheckIcon className="size-4" />
              {c.title}
            </span>
            <div className="text-white/80">{c.description}</div>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-emerald-400/40 bg-black/60 text-white/80 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-300"
            >
              <ArrowIcon className="size-3" />
              <span>View Credential</span>
            </a>
          </div>
        ))}
      </div>
    ),
  }),
};

export default certificationsCmd;