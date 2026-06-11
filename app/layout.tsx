import type { Metadata } from "next";
import { GlobalShell } from "@/components/layout/global-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiagus Arif Rahman | Portfolio System",
  description:
    "Global environment foundation for an immersive data science and AI product portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-background text-foreground">
        <GlobalShell>{children}</GlobalShell>
      </body>
    </html>
  );
}
