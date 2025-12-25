import { Command } from "../types";
import { projects } from "@/lib/content";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github.svg";

const projectsCmd: Command = {
  name: "projects",
  description: "List featured projects",
  execute: () => ({
    type: "output",
    content: (
      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative rounded-lg p-3 border border-transparent bg-black/40 hover:bg-black/60 transition-colors duration-300 hover:border-emerald-400/40 hover:outline hover:outline-2 hover:outline-emerald-400/30 hover:-outline-offset-2"
          >
            <span className="text-green-400">{p.title}</span> — {p.stack} — {p.year}
            <ul className="ml-4 list-disc">
              {p.results.map((r, i) => (
                <li key={i}>{r.title}</li>
              ))}
            </ul>
            <div className="text-white/80 flex flex-wrap items-center gap-4 mt-2">
              {p.link && (
                <a
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-emerald-400/40 bg-black/60 text-white/80 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-300"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowIcon className="size-3" />
                  <span>Live Demo</span>
                </a>
              )}
              {p.github && (
                <a
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-emerald-400/40 bg-black/60 text-white/80 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-300"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="size-3" />
                  <span>Repo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
  }),
};

export default projectsCmd;