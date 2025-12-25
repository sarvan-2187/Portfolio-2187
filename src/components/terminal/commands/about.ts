import { Command } from "../types";

const about: Command = {
  name: "about",
  description: "About me",
  execute: () => ({
    type: "output",
    content: "I'm Sarvan, a developer who loves building clean systems."
  })
};

export default about;