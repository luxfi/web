import type * as C from "@luxdefi/ui/blocks/def"

import type PartnersBlock from "@/blocks/def/partners-block"
import type PartnerCardBlock from "@/blocks/def/partner-card-block"

export default {
  blockType: "partners",
  title: {
    blockType: "heading",
    heading: "Leadership",
    level: 3,
    byline: "We are finance and technology pioneers dedicated to building sound financial products that serve the enviroment, society and people.",
    bylineLevel: 0
  } as C.HeadingBlock,
  partners: [
    {
      blockType: "partner-card",
      name: "Zach Kelling",
      title: "CEO",
      description: "A visionary leader in adtech and fintech, Zach leverages quantum encryption for positive environmental and social outcomes. He is prolific as both an engineer and entrepreneur, with over 15 years in high growth startups. He founded Hanzo, a Techstars funded AI marketing platform that launched some of the most successful crowdsales in history, and co-Founded the first SEC approved digital securities platform with Arca, as well as DAOs BrightMoments and DEVxDAO. As CEO of LUX, Zach has pioneered one of the first quantum financial systems. He also actively contributes to influential DAOs and drives societal change, serving on the executive board of the CROP Organization.",
      url: "https://linkedin.com/in/zeekay",
      image: {
        blockType: 'image',
        src: '/assets/images/zach-kelling.png',
        alt: 'Zach Kelling',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ari Lerner",
      title: "CTO",
      description: "Ari is a passionate software engineer, entrepreneur, and educator. With over 20 years of experience, he has co-founded successful companies like Fullstack.io and Fieldday. As a senior consultant at Amazon Web Services, Ari guides clients in application development and has extensive experience in technology. He is a respected author, having written over ten books on programming, and shares his insights at global tech conferences. His notable works include co-authoring D3 on AngularJS, Zero to Deep Learning, and Fullstack React, Native, & Vue.",
      url: "https://www.linkedin.com/in/jacobfrankelprivateequity",
      image: {
        blockType: 'image',
        src: '/assets/images/ari-lerner.png',
        alt: 'Ari Lerner',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Antje Worring",
      title: "Chief Revenue Officer",
      description: "Metaverse architect and multidisciplinary designer with over 10 years of experience in art, branding, design, engineering, fashion and marketing as well UI/UX, video production and 3D modeling. She is also an advocate for animal and ocean conservation and has worked in the sustainability sector for over a decade. Antje's career began at award-winning Karma Bikinis, where she has served as CEO & lead designer since 2014, designing over 300 items and hundreds of photo shoots. Since March 2020, she has also worked as designer, software engineer and delivers multidisciplinary activations, engagements and partnerships, while never losing focus on growth.",
      url: "https://www.linkedin.com/in/antje-worring",
      image: {
        blockType: 'image',
        src: '/assets/images/antje-worring.jpg',
        alt: 'Antje Worring',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Blake Johnson",
      title: "Chief Financial Officer",
      description: "A proven finance professional with an MBA from UC Berkeley's Haas School of Business, Blake has ten years of experience in financial analysis, equity research, and advisory operations roles spanning many industries. His core competencies are in financial modeling and forecasting, investment management, strategic finance, fundraising and investor relations, and industry experience spans technology, media, telecommunications, industrials, and banking.",
      url: "https://www.linkedin.com/in/blake415",
      image: {
        blockType: 'image',
        src: '/assets/images/blake-johnson.png',
        alt: 'Blake Johnson',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Christopher Dinelli",
      title: "Chief Information Officer",
      description: "Former US Navy Lieutenant and United States Naval Academy alumnus with an Aerospace Engineering background, expansion into blockchain mining and AI cloud services and infrastructure, forging pivotal partnerships within the generative AI and cloud domains. As the founder of All Mine Lah, Inc., Chris innovatively melded green energy with digital currency mining, advancing sustainable supercomputing solutions. Renowned for his data analysis acumen and Matlab expertise, Chris's leadership style, rooted in military principles, champions innovation, ethical practices, and security, solidifying Lux's stature in blockchain and finance, reflecting his overarching commitment to responsible technological growth.",
      url: "https://www.linkedin.com/in/christopher-dinelli-0152578b",
      image: {
        blockType: 'image',
        src: '/assets/images/christopher-dinelli.png',
        alt: 'Christopher Dinelli',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Justin Gawn",
      title: "Chief Strategy Officer",
      description: "With 24 years of industry experience, he has proven his adeptness at identifying capital market trends, and delivering profitable trading and growth strategies for midcap and large junior mining companies. His diverse roles in institutional sales, investment advising, and trading allowed him to gain deep insights and experience in crafting risk-adjusted portfolios and his efficient execution of trading strategies have solidified his reputation in the sector.",
      url: "https://www.linkedin.com/in/justin-gawn-43687b1b/?originalSubdomain=ca",
      image: {
        blockType: 'image',
        src: '/assets/images/justin-gawn.png',
        alt: 'Justin Gawn',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Cyrus Pahlavi",
      title: "Chief Diplomat",
      description: "HRH Prince Cyrus Pahlavi is the grandson of Her Royal Highness, Princess Ashraf Pahlavi, the twin sister of His Majesty, the Shah of Iran. Cyrus is an accomplished artist, human rights activist, philanthropist, producer and actor. He sits on the board of First Line Entertainment, a production company in association with Edward Bass.",
      url: "https://www.cyruspahlavi.com/about",
      image: {
        blockType: 'image',
        src: '/assets/images/cyrus-pahlavi.png',
        alt: 'Cyrus Pahlavi',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Skyler Trotter",
      title: "Chief Innovation Officer",
      description: "Sky is a renowned blockchain innovator and the co-founder of EOS Bake, where he has made significant strides in decentralized sovereignty and blockchain infrastructure. His career spans critical roles at the EOS Incubator, Polyient Labs, W1SE Logistics, EX3.io, Coin Dealer, and Strawberry DAC, contributing immensely to the blockchain sector. At the EOS Incubator, Sky's mentorship of emerging blockchain projects showcased his deep technical knowledge, crucial in fostering startup growth within the complex blockchain ecosystem. His role at Polyient Labs was instrumental in developing pioneering decentralized finance (DeFi) solutions, merging financial expertise with blockchain innovation.",
      url: "https://www.linkedin.com/in/sky-trotter-b86a74244",
      image: {
        blockType: 'image',
        src: '/assets/images/skyler-trotter.png',
        alt: 'Skyler Trotter',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ole Brereton",
      title: "Executive VP",
      description: "Lord Ole Loftus Brereton is an accomplished Executive with a strong background in Finance, International Trade, Production, Music Videos, Advertising, and Design. As Executive Vice President at LUX since May 2021, he spearheads private asset management and wealth solutions, fostering success in an ever-evolving world. Based in the Isle of Man and London, Ole's visionary leadership has been instrumental in shaping LUX's growth, driving innovation in asset management and regulated technology over two fruitful years.",
      url: "https://www.linkedin.com/in/lord-ole-loftus-l-brereton-911a1a11",
      image: {
        blockType: 'image',
        src: '/assets/images/ole-brereton.png',
        alt: 'Ole Brereton',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
  ]
} as PartnersBlock
