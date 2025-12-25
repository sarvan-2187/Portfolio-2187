import Terminal from "@/components/terminal/Terminal";
import WindowShell from "@/components/terminal/WindowShell";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Sarvan CLI Portfolio",
    description: "Terminal-style portfolio interface",
};

export default function CliPortfolioPage() {
    return (
        <main className={"min-h-screen w-screen overflow-hidden bg-black " + jetbrainsMono.className}>
            <WindowShell title="sarvan@portfolio — bash" full>
                <div className="h-full">
                    <Terminal className="h-full" />
                </div>
            </WindowShell>
        </main>
    );
}
