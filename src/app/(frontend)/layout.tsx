import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BottomHeader from "@/components/bottom-header";
import { OpenPanelComponent } from "@openpanel/nextjs";

const boska = localFont({
  src: "../fonts/Boska-Regular.woff",
  variable: "--font-boska",
  weight: "200",
});

const switzer = localFont({
  src: [
    {
      path: "../fonts/Switzer-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
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
        <OpenPanelComponent
          clientId="345b1ac8-8452-4307-9389-5dab644750b9"
          trackScreenViews={true}
          trackAttributes={true}
          trackOutgoingLinks={true}
        />
        {children} <BottomHeader />
      </body>
    </html>
  );
}
