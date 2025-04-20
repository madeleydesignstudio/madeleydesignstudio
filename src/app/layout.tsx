import type { Metadata } from "next";
import "./globals.css";
import WebBorder from "@/components/providers/web-border";
import { boskaFont, bricolageFont } from "./fonts";

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
    <html
      lang="en"
      className={`${boskaFont.variable} ${bricolageFont.variable}`}
    >
      <body>
        <WebBorder>{children}</WebBorder>
      </body>
    </html>
  );
}
