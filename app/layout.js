import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto | The Next-Gen Crypto Currency Exchange Platform",
  description: "Bitcoin, Ethereum, and other crypto currencies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#070A0E]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
