import type { Command } from "../types";

const clear: Command = {
  name: "clear",
  description: "Clear the terminal",
  execute: () => ({ type: "system", content: "" }),
};

export default clear;
