import "tailwindcss/tailwind.css";

import { Inter, Hanken_Grotesk } from "next/font/google";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
export const metadata = {
  title: "Drown the Sun",
  description: "German metal band",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  fallback: ["sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, grotesk.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
