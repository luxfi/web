import type * as C from "@hanzo/ui/blocks/def"

import type PressCardBlock from "@/blocks/def/press-card-block"
import { ImageBlockComponent } from "@hanzo/ui/blocks"

export default {
  blockType: "press",
  title: {
    blockType: "heading",
    heading: "Press",
    level: 3,
  } as C.HeadingBlock,
  articles: [
    {
      blockType: "press-card",
      content: "Viscount Mining and Lux Partners Ltd. create the world's first silver-backed NFT. Jim MacKenzie, CEO of Viscount Mining stated, \"We are thrilled to partner with Lux and provide them with access to an initial 5 million ounces of silver from our property in Silver Cliff, Colorado. Our team has worked tirelessly to bring this project to fruition, and we are confident that our silver will be an excellent addition to the Lux ecosystem and to global markets\".",
      url: "https://finance.yahoo.com/news/viscount-mining-lux-partners-ltd-114500431.html",
      cta: "View on Yahoo Finance",
      logo: {
        blockType: 'image',
        src: '/assets/images/yahoo-finance.png',
        alt: 'Yahoo Finance',
        dim: { w: 150, h: 22 },
      } as C.ImageBlock,
    } as PressCardBlock,
    {
      blockType: "press-card",
      content: "Asset-backed financial NFTs will be the driver of the next NFT killer use case, and we are excited to partner with Lux to pioneer this vision – Vera Labs CEO.",
      url: "https://cointelegraph.com/press-releases/billions-of-real-world-asset-backed-nfts-are-coming-to-enable-the-next-killer-web3-use-case",
      cta: "View on Coin Telegraph",
      logo: {
        blockType: 'image',
        src: '/assets/images/cointelegraph.png',
        alt: 'Coin Telegraph',
        dim: { w: 160, h: 27 },
      } as C.ImageBlock,
    } as PressCardBlock,
    {
      blockType: "press-card",
      content: "Madison Metals has signed a historic and first-of-its-kind uranium forward sales agreement with Lux Partners for the tokenization of up to 20 million pounds of uranium.",
      url: "https://www.miningreview.com/uranium/madison-metals-and-lux-create-first-uranium-backed-nft",
      cta: "View on Mining Review",
      logo: {
        blockType: 'image',
        src: '/assets/images/mining.png',
        alt: 'Mining Review',
        dim: { w: 118, h: 27 },
      } as C.ImageBlock,
    } as PressCardBlock,
    {
      blockType: "press-card",
      content: "Madison Metals signs uranium forward sales agreement and creates the first uranium-backed NFT with Lux Partners.",
      url: "https://www.globenewswire.com/news-release/2022/09/30/2526347/0/en/Madison-Metals-Signs-Uranium-Forward-Sales-Agreement-and-Creates-the-First-Uranium-backed-NFT-with-Lux-Partners.html",
      cta: "View on Globe Newswire",
      logo: {
        blockType: 'image',
        src: '/assets/images/globenewswire.png',
        alt: 'Globe Newswire',
        dim: { w: 120, h: 27 },
      } as C.ImageBlock,
    } as PressCardBlock,
    {
      blockType: "press-card",
      content: "The initial sales have exceeded all Lux projections as the non-fungible tokens continue to offer an exceptional value proposition.",
      url: "https://www.miningweekly.com/article/madison-reports-initial-sales-of-first-uranium-backed-nft-2022-10-28",
      cta: "View on Mining Weekly",
      logo: {
        blockType: 'image',
        src: '/assets/images/mining-weekly.png',
        alt: 'Mining Weekly',
        dim: { w: 143, h: 27 },
      } as C.ImageBlock,
    } as PressCardBlock,
    {
      blockType: "press-card",
      content: (
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/TEz6Xq9A5Mk?si=nV3abqsGWX1Y1PJ2"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="aspect-video"
        />
      ),
      logo: {
        blockType: "element",
        element: (
          <div className="flex gap-2">
            <ImageBlockComponent
              block={
                {
                  blockType: "image",
                  src: "/assets/images/lilamax.png",
                  alt: "Lilamax",
                  dim: { w: 70, h: 24 },
                } as C.ImageBlock
              }
            />
            from
            <ImageBlockComponent
              block={
                {
                  blockType: "image",
                  src: "/assets/images/nasdaq.png",
                  alt: "Nasdaq",
                  dim: { w: 85, h: 24 },
                } as C.ImageBlock
              }
            />
          </div>
        ),
      } as C.ElementBlock,
    } as PressCardBlock,
  ]
}
