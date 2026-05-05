import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "VERTEX C2 — Hardened Command Architecture",
  description:
    "Open security research on zero-trust command and control for autonomous systems operating in contested RF environments.",
  metadataBase: new URL("https://vertex-c2.example.com"),
  openGraph: {
    title: "VERTEX C2 — Hardened Command Architecture",
    description:
      "Open security research on zero-trust C2 for autonomous systems in contested RF environments.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
