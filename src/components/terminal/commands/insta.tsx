import { Command } from "../types";

const insta: Command = {
  name: "insta",
  description: "Open Instagram",
  hidden: true,
  execute: () => {
    if (typeof window !== "undefined") {
      window.open("https://www.instagram.com/sarvan._.21/", "_blank", "noopener,noreferrer");
    }
    return {
      type: "output",
      content: (
        <span className="text-emerald-200">Opening Instagram in a new tab…</span>
      )
    };
  }
};

export default insta;
