import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Parin Bhardwaj | Electronics & Communication Engineer",
  description:
    "Portfolio of Parin Bhardwaj, ECE student at Jawaharlal Nehru Government Engineering College. Embedded systems, IoT, drones, and full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
