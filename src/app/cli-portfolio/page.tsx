"use client";

import Terminal from "@/components/terminal/Terminal";
import WindowShell from "@/components/terminal/WindowShell";
import { JetBrains_Mono } from "next/font/google";
import Snowfall from "react-snowfall";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function CliPortfolioPage() {
    return (
        <main className={"min-h-screen w-screen overflow-hidden bg-black " + jetbrainsMono.className}>
            <WindowShell title="sarvan@portfolio — bash" full>
                <Snowfall snowflakeCount={20} />
                <div className="h-full">
                    <Terminal className="h-full" />
                </div>
            </WindowShell>
        </main>
    );
}
