import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { SkipLink } from "@/components/ui/SkipLink";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innkeeper-forge.vercel.app"),
  title: "Dalton Castro · Innkeeper Forge",
  description:
    "Portfolio of Dalton Castro, a product-minded software engineer building web and mobile apps with React, React Native, and TypeScript.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Innkeeper Forge",
    description:
      "Portfolio of Dalton Castro, a product-minded software engineer building web and mobile apps with React, React Native, and TypeScript.",
    url: "/",
    siteName: "Innkeeper Forge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <SkipLink />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
