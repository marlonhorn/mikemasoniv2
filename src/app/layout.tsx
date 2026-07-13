import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Masoni | Photographer & Director",
  description:
    "Mike Masoni – Photographer & Director. Editorial photography, cinematic video, and creative direction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
