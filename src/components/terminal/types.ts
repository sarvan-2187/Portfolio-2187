export type TerminalLine = {
  type: "input" | "output" | "system";
  content: string | JSX.Element;
};

export type Command = {
  name: string;
  description: string;
  hidden?: boolean;
  execute: (args: string[]) => TerminalLine[] | TerminalLine;
};