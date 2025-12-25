import help from "./help.tsx";
import about from "./about.tsx";
import projects from "./projects.tsx";
import certifications from "./certifications.tsx";
import skills from "./skills.tsx";
import contact from "./contact.tsx";
import clear from "./clear";
import github from "./github";
import secrets from "./secrets";
import lkdin from "./lkdin";
import insta from "./insta";
import yt from "./yt";
import wtsp from "./wtsp";
import gui from "./gui";
import watch from "./watch";
import repo from "./repo";
import type { Command } from "../types";

export const commands: Record<string, Command> = {
  help,
  about,
  projects,
  certifications,
  skills,
  contact,
  clear,
  github,
  secrets,
  lkdin,
  insta,
  yt,
  wtsp,
  gui,
  watch,
  repo,
};