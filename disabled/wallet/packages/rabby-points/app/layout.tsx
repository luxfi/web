/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://luxwallet.xyz"),
  title: "Lux Points - Lux Wallet",
  description: "The game-changing wallet for Ethereum and all EVM chains",
  twitter: {
    card: "summary_large_image",
    images: "/lux-points/assets/lux-points/x-post-season2-end.png",
    site: "@luxdefi",
    description: "The game-changing wallet for Ethereum and all EVM chains",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <html lang="en">
      // eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
      <Head>
        // eslint-disable-next-line @next/next/no-page-custom-font
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
