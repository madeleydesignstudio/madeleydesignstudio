import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BottomHeader from "@/components/bottom-header";

const boska = localFont({
  src: "../fonts/Boska-Regular.woff",
  variable: "--font-boska",
  weight: "200",
});

const switzer = localFont({
  src: "../fonts/Switzer-Regular.woff",
  variable: "--font-switzer",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madeleydesignstudio.org"),
  title: "madeleydesignstudio",
  description: "Digital Web Studio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "madeleydesignstudio",
    description: "Digital Web Studio",
    url: "https://madeleydesignstudio.org",
    siteName: "madeleydesignstudio",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${boska.variable} ${switzer.variable} antialiased`}>
        {children} <BottomHeader />
      </body>
    </html>
  );
}
