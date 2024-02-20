import type * as C from "@hanzo/ui/blocks/def"

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
      name: "Ryan Stobie",
      title: "Technology, Travel",
      description: "An entrepreneur, investor, and avid adventure seeker, Ryan is a high energy, growth focused, business development manager in the tech sector. With a well-established global network spanning Silicon Valley, Canada, Latin America, and Asia, Ryan has launched and scaled sales teams in multiple sectors upwards of $40 million in revenue. He possesses strong capabilities in early-stage product adoption and go-to-market strategy and values focusing on environmental stewardship.",
      url: "https://www.linkedin.com/in/ryan-stobie",
      image: {
        blockType: 'image',
        src: '/assets/images/ryan-stobie.png',
        alt: 'Ryan Stobie',
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
  ]
} as PartnersBlock
