import { Command } from "../types";

const about: Command = {
  name: "about",
  description: "About me & education",
  execute: () => ({
    type: "output",
    content: (
      <div className="space-y-4 text-white/80">
        <p>
          I’m <span className="text-emerald-300 font-semibold">NAGARAMPALLI SARVAN KUMAR</span>, a computer science student who believes good software is built the old-fashioned way — by understanding the fundamentals and respecting the machine.
        </p>
        <p>
          I enjoy working close to the system: writing clean code, designing reliable backends, and building tools that solve real problems instead of chasing buzzwords. My interests sit at the intersection of software engineering, backend development, and practical AI, where logic matters more than hype.
        </p>
        <p>
          I like projects that teach me why things work, not just how to make them run. From hackathons to personal builds, I focus on clarity, structure, and long-term maintainability... because clever hacks fade, but solid engineering lasts.
        </p>
        <p>
          When I’m not coding, I’m refining my workflow, learning something new, or quietly fixing things that almost work.
        </p>
        <div className="mt-4 rounded-lg border border-emerald-400/40 bg-black/40 px-3 py-2 text-emerald-200">
          “Make it work. Make it right. Then make it better.”
        </div>
      </div>
    ),
  }),
};

export default about;
