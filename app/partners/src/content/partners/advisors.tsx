import type * as C from "@hanzo/ui/blocks"

import type PartnersBlock from "@/blocks/def/partners-block"
import type PartnerCardBlock from "@/blocks/def/partner-card-block"

export default {
  blockType: "partners",
  title: {
    blockType: "heading",
    heading: "Advisors and Investors",
    level: 3,
    byline: "Pioneers in commodities, finance and technology.",
    bylineLevel: 0
  } as C.HeadingBlock,
  partners: [
    {
      blockType: "partner-card",
      name: "Vincent Butta",
      title: "Entertainment, FinTech",
      description: "Vincent is a seasoned business leader with 30 years of experience in entertainment, social media, and licensing. He has built and sold early-stage startups, leading them to become multimillion-dollar enterprises. Vincent has an impressive track record, including creating one of the largest marketing companies in the US and launching over 400 consumer products for major brands like P&G, J&J, and Walmart. In the entertainment industry, he has managed film releases for Disney, Fox, and Paramount, and has produced notable films that received critical acclaim and awards. Vincent has also been involved in turnaround and business acceleration for various companies on behalf of investors.",
      url: "https://www.linkedin.com/in/vincent-butta-8562791",
      image: {
        blockType: 'image',
        src: '/assets/images/vincent-butta.png',
        alt: 'Vincent Butta',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Andrew Gertler",
      title: "Energy, Geology, Mining",
      description: "Co-founder of Viscount Mining Corp, Andrew has a solid track record in the mining and wealth management industries. Since 2011, he has driven Viscount's growth, focusing on silver and gold deposits in Nevada. Simultaneously, he has managed high-net-worth portfolios at Lester Asset Management since 2006. He holds board positions in Solid Impact Investment Corp and Impact Acquisition Corp, contributing to asset identification and business acquisition. His diverse career includes roles at Esplanade Loft Project, Hunt Mining, Zi Corporation, and Hudson Advisors.",
      url: "https://www.linkedin.com/in/andrew-gertler-4a33293",
      image: {
        blockType: 'image',
        src: '/assets/images/andrew-gertler.png',
        alt: 'Andrew Gertler',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Lisa Gansky",
      title: "Economics, Network",
      description: "Lisa is a co-founder and CEO with an impressive track record of successful ventures. She was at the helm of Global Network Navigator (GNN), the pioneering commercial website, which was later acquired by America Online (AOL). Additionally, she played a key role as co-founder, CEO, and chairman of Ofoto, a prominent digital photography company that was acquired by Eastman Kodak. Beyond her entrepreneurial achievements, Lisa is renowned as an international thought leader, writer, and speaker, focusing on the collaborative economy, open innovation, and entrepreneurship.",
      url: "https://en.wikipedia.org/wiki/Lisa_Gansky",
      image: {
        blockType: 'image',
        src: '/assets/images/lisa-gansky.png',
        alt: 'Lisa Gansky',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Cale Gibson",
      title: "Finance, Politics",
      description: "Cale is a dynamic leader with a flair for innovation and growth. As the CMO & Co-Founder of ClaimBlock Inc., he's been pivotal in shaping the company's marketing strategies for over 6 years. Prior to this, he championed as the CEO & Co-Founder of ThinkTank Labs for more than 8 years. His role as a Product Manager at SHOEme.ca further underscored his expertise in product positioning. Beyond his corporate endeavors, Cale's commitment to societal impact shines through; he dedicated time with Haven Fund International, orchestrating events to raise funds for an animal shelter, reflecting his deep-seated passion for animal welfare.",
      url: "https://ca.linkedin.com/in/cale-gibson-4ba35768",
      image: {
        blockType: 'image',
        src: '/assets/images/cale-gibson.png',
        alt: 'Cale Gibson',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Dr. Marcus Weller, PhD",
      title: "Finance, Psychology",
      description: "A prodigious force in the tech arena, Dr. Weller melds his training in Industrial Psychology with a profound understanding of neurocognitive models and Behavioral Psychology. As the visionary CEO of SKULLY Systems, he masterminded the iconic SKULLY AR-1, setting a benchmark in the mixed reality world with one of Indiegogo's most triumphant campaigns. He then went on to take the CMO helm at iTrust Capital, orchestrating its monumental launch, and propelling the company to an astounding $7 billion in transactions and over 200,000 accounts. Possessing a rare blend of psychological acumen and technological chops, Dr. Weller is making his mark on whole industries and sculpting the very future of technology.",
      url: "https://www.linkedin.com/in/marcusweller",
      image: {
        blockType: 'image',
        src: '/assets/images/marcus-weller.png',
        alt: 'Dr. Marcus Weller, PhD',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Giovanna Mingarelli",
      title: "Altruistic Engagement, Technology",
      description: "Giovanna, CEO and Co-Founder of M&C Consulting and MC2, is a tech entrepreneur and thought leader with 15 years of experience in political and digital communications. She has served in the office of a former Canadian Prime Minister and is a member of the Government of Canada Treasury Board Secretariat External Advisory Board for Talent Cloud. Mingarelli is a prolific writer and expert on politics gamification, social engagement, and crowdsourcing, having contributed to various media outlets. She has been recognized globally for her efforts in improving the world through entrepreneurship and civic engagement.",
      url: "https://giovannamingarelli.com",
      image: {
        blockType: 'image',
        src: '/assets/images/giovanna-mingarelli.jpg',
        alt: 'Giovanna Mingarelli',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Lisa Goodman",
      title: "Art, Board Director",
      description: "A highly accomplished corporate executive, entrepreneur, and board director with over 30 years of experience in diverse industries, Lisa is renowned for her strategic acumen and expertise in customer engagement. Currently on the executive team at The Benaroya Company, a leading commercial real estate firm, she previously founded, scaled, and sold Service Intelligence Inc., a multimillion-dollar company with Fortune 100 clients. Apart from her professional achievements, Lisa is dedicated to promoting diversity, equity, and inclusion, evident in her philanthropic work and passion for the arts. She has been recognized in various media outlets and is known as an international thought leader, writer, and speaker in the areas of collaborative economy, open innovation, and entrepreneurship.",
      url: "https://www.linkedin.com/in/goodmanlm",
      image: {
        blockType: 'image',
        src: '/assets/images/lisa-goodman.jpg',
        alt: 'Lisa Goodman',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,

    {
      blockType: "partner-card",
      name: "Dan Coinburn",
      title: "Evangelism",
      description: "Dan Coinburn is a visionary blockchain developer and media producer, leading the way in innovative technologies and digital media. As the founder of Coinburn.com, Dan has established himself as a pioneer in the blockchain industry. Specializing in Ethereum Virtual Machines (EVMs) and Solana, Dan’s technical expertise enables him to develop and optimize solutions across these leading blockchain platforms, ensuring efficiency and scalability. Dan’s companies are spearheading the development of plastic-free solutions for payment cards via non-custodial NFTs. As a media content creator and producer, Dan and his team have achieved remarkable success, amassing tens of millions of views on social media. Their captivating content has been showcased at prestigious fashion events in Miami, New York, Los Angeles, Milan, Paris, as well as at the Miss USA and Miss Universe pageants.",
      url: "https://lux.partners/",
      image: {
        blockType: 'image',
        src: '/assets/images/dan-coinburn.png',
        alt: 'Dan Coinburn',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "John Hanks",
      title: "Engineering",
      description: "John Hanks is a seasoned blockchain engineer and entrepreneur with a rich history in the blockchain industry. With a deep passion for decentralized technologies, John has played a pivotal role in numerous successful blockchain projects, contributing his expertise in engineering and innovation. His work spans various sectors, highlighting his versatility and commitment to advancing blockchain solutions. John’s visionary approach and hands-on experience have earned him a reputation as a leader and innovator in the blockchain community. He continues to drive forward-thinking projects that push the boundaries of what blockchain technology can achieve, all while maintaining a focus on engineering excellence and entrepreneurial spirit.",
      url: "https://www.linkedin.com/in/johnhanksengineer/",
      image: {
        blockType: 'image',
        src: '/assets/images/john-hanks.png',
        alt: 'John Hanks',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Major Williams",
      title: "Art, Sustainability, Technology",
      description: "Major \"Dream\" Williams, a visionary with diverse talents in finance, entrepreneurship, fitness, and culinary arts, aims to transform society's challenges into opportunities. With a keen ability to inspire and collaborate with international thought leaders, he envisions a world of financial freedom through open protocols.",
      url: "https://www.linkedin.com/in/major-dream-williams-00b82435",
      image: {
        blockType: 'image',
        src: '/assets/images/major-williams.png',
        alt: 'Major Williams',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Namya Khan",
      title: "Design",
      description: "Namya is the visionary Founder of Supafast, a dynamic design agency known for serving an impressive roster of clients including Y Combinator startups, early-stage ventures, and global creators. Thriving in fast-paced environments, she leverages her passion for design and a robust work ethic to deliver exceptional results across diverse industries. At Supafast, Namya leads a dedicated team in creating conversion-focused, high-impact designs that propel business growth. Her expertise in merging aesthetics with functionality not only enhances visual appeal but strategically aligns with business objectives, establishing her as a valuable Design Advisor and solidifying Supafast’s reputation as a leader in innovative design solutions.",
      url: "https://www.linkedin.com/in/namyakhan/",
      image: {
        blockType: 'image',
        src: '/assets/images/namya_khan2.png',
        alt: 'Namya Khan',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "William Hadala",
      title: "Infrastructure Security",
      description: "William is a distinguished United States Air Force veteran and senior technology executive with over 25 years of experience. He has been issued 27 USPTO patents and has a formidable track record in building global technology infrastructure in media and telecommunications. As the CEO of A113 Venture Fund, Edge Data Intelligence, Exposition TV, and CTO of TMT Capital Group, William has driven significant advancements in technology deployment across various sectors. Notably, he founded TMGcore, pioneering the world's most advanced edge supercomputer for cryptocurrency mining and AI, achieving a multi-billion-dollar valuation within its first year. Additionally, during the global COVID crisis, he established the Connectivity Foundation, a non-profit aimed at bridging the digital divide for underserved communities worldwide through innovative broadband solutions.",
      url: "https://www.linkedin.com/in/williammichael/",
      image: {
        blockType: 'image',
        src: '/assets/images/william-hadala.jpg',
        alt: 'William Hadala',
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
  ]
} as PartnersBlock
