import { Command } from "../types";
import { skills } from "@/lib/content";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/next-js.svg";
import VsCodeIcon from "@/assets/icons/vs-code.svg";
import { GitBranch } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "JavaScript": JsIcon,
  "HTML": HtmlIcon,
  "CSS": CssIcon,
  "React.js": ReactIcon,
  "VS Code": VsCodeIcon,
  "Next.js": NextjsIcon,
  "Git": GitBranch,
};

const skillsCmd: Command = {
  name: "skills",
  description: "List technical skills",
  execute: () => ({
    type: "output",
    content: (
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => {
          const Icon = iconMap[s];
          return (
            <span key={s} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-white/10 bg-black/60 text-white/80">
              {Icon && <Icon className="size-4" />}
              <span>{s}</span>
            </span>
          );
        })}
      </div>
    ),
  }),
};

export default skillsCmd;