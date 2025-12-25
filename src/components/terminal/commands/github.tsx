import { Command } from "../types";
import dynamic from "next/dynamic";

// Dynamically load to avoid SSR issues in terminal view
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const github: Command = {
  name: "github",
  description: "Show GitHub contributions heatmap",
  execute: () => ({
    type: "output",
    content: (
      <div className="space-y-3">
        <div className="rounded-lg p-3 border border-white/10 bg-black/40">
          <div className="flex items-center justify-between mb-2">
            <span className="text-green-400 font-medium">GitHub Heatmap</span>
            <span className="text-white/60 text-xs">sarvan-2187</span>
          </div>
          <div className="overflow-x-auto">
            <GitHubCalendar
              username="sarvan-2187"
              blockSize={10}
              blockMargin={3}
              fontSize={12}
              colorScheme="dark"
            />
          </div>
        </div>
      </div>
    ),
  }),
};

export default github;
