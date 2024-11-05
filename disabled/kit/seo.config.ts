import type { Metadata } from "next";

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const seoConfig = defineMetadata({
  metadataBase: new URL("https://luxkit.vercel.app"),
  title: {
    template: "%s - LuxKit",
    default:
      "LuxKit - A Real Web3 Way to connect all wallets for all Dapp developers",
  },
  description:
    "LuxKit - A Real Web3 Way to connect all wallets for all Dapp developers",
  openGraph: {
    images: "/logo-twitter.png",
    url: "https://luxkit.vercel.app",
  },
  icons: [
    { rel: "icon", url: "/favicon.png" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
    { rel: "mask-icon", url: "/favicon.png" },
    { rel: "image/x-icon", url: "/favicon.png" },
  ],
  twitter: {
    site: "@Lux_io",
    creator: "@Lux_io",
  },
});

export default seoConfig;
