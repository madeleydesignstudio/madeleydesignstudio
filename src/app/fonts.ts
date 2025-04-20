import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";

export const boskaFont = localFont({
  src: [
    {
      path: "../fonts/Boska-Extralight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Boska-ExtralightItalic.woff",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Boska-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Boska-LightItalic.woff",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/Boska-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Boska-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Boska-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Boska-MediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/Boska-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Boska-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Boska-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Boska-BlackItalic.woff",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-boska",
  display: "swap",
});

export const bricolageFont = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "700"],
});
