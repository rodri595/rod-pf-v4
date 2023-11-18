import { Inter } from "next/font/google";
import "./assets/css/globals.css";
import "./assets/css/reset.css";
import "./assets/css/extra.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import Sprite from "@/components/Sprite";
export const metadata = {
  title: "Rodrigo Portfolio ",
  description: "Created with 💘",
  url: "https://rodrigoerazo.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="./app/assets/img/icons/sprites.svg"
          as="image"
          rel="preload"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </Head>
      <body className={inter.className}>
        <Sprite />
        {children}
      </body>
    </html>
  );
}
