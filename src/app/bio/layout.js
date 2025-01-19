import "./globals.css";
import { Cardo } from "next/font/google";
import localFont from "next/font/local";

const MoonTime = localFont({
  src: "./fonts/MoonTime-Regular.ttf",
  variable: "--moon-time",
});

const fontCardo = Cardo({ subsets: ["latin"], weight: "400" });

export default function Layout({ children }) {
  return (
    <html lang="pt">
      <body className={`${MoonTime.variable} ${fontCardo.className}`}>
        {children}
      </body>
    </html>
  );
}
