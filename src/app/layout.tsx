import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIM",
  keywords:
    "robots, robot assets, humanoid robots, industrial robots, robot directory, repair instructions, CAD models",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
