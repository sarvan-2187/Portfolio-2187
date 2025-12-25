import { Command } from "../types";
import { socialLinks } from "@/lib/content";
import Image from "next/image";
import Linkedin from "@/assets/images/linkedin.png";
import Github from "@/assets/images/github.png";
import Instagram from "@/assets/images/instagram.png";
import Whatsapp from "@/assets/images/whatsapp.png";
import Youtube from "@/assets/images/youtube.png";

const iconFor = (title: string) => {
  switch (title) {
    case "LinkedIn": return Linkedin;
    case "GitHub": return Github;
    case "Instagram": return Instagram;
    case "WhatsApp": return Whatsapp;
    case "YouTube": return Youtube;
    default: return undefined;
  }
};

const contactCmd: Command = {
  name: "contact",
  description: "Show contact and social links",
  execute: () => ({
    type: "output",
    content: (
      <div>
        <div className="mb-2 text-white/80">Let's connect — pick a link:</div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
          {socialLinks.map((l) => (
            <a
              key={l.title}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-emerald-400/40 bg-black/60 text-white/80 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-colors duration-300 w-full"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {iconFor(l.title) && (
                <Image src={iconFor(l.title)!} alt={l.title} className="size-5 rounded-full" />
              )}
              <span className="text-green-400">{l.title}</span>
            </a>
          ))}
        </div>
      </div>
    ),
  }),
};

export default contactCmd;