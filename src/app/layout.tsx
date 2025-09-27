import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senior Software Engineer | Portfolio",
  description: "Experienced software engineer with 10+ years building scalable web applications and leading development teams.",
  keywords: ["software engineer", "full-stack developer", "react", "node.js", "team lead", "portfolio"],
  authors: [{ name: "Senior Software Engineer" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    title: "Senior Software Engineer | Portfolio",
    description: "Experienced software engineer with 10+ years building scalable web applications and leading development teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Software Engineer | Portfolio",
    description: "Experienced software engineer with 10+ years building scalable web applications and leading development teams.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
