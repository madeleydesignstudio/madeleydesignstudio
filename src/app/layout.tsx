import type { Metadata } from "next";
import "./globals.css";
import WebBorder from "@/components/providers/web-border";

export const metadata: Metadata = {
  title: "madeleydesignstudio",
  description: "A creative engineering studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WebBorder>{children}</WebBorder>
      </body>
    </html>
  );
}
