import type * as C from "@hanzo/ui/blocks";

import type PartnersBlock from "@/blocks/def/partners-block";
import type PartnerCardBlock from "@/blocks/def/partner-card-block";

export default {
  blockType: "partners",
  title: {
    blockType: "heading",
    heading: "Leadership",
    level: 3,
    byline:
      "We are finance and technology pioneers dedicated to building sound financial products that serve the enviroment, society and people.",
    bylineLevel: 0,
  } as C.HeadingBlock,
  partners: [
    {
      blockType: "partner-card",
      name: "Zach Kelling",
      title: "Chief Executive Officer",
      description:
        "A visionary leader in adtech and fintech, Zach leverages quantum encryption for positive environmental and social outcomes. He is prolific as both an engineer and entrepreneur, with over 15 years in high growth startups. He founded Hanzo, a Techstars funded AI marketing platform that launched some of the most successful crowdsales in history, and co-Founded the first SEC approved digital securities platform with Arca, as well as DAOs BrightMoments and DEVxDAO. As CEO of LUX, Zach has pioneered one of the first quantum financial systems. He also actively contributes to influential DAOs and drives societal change, serving on the executive board of the CROP Organization.",
      url: "https://linkedin.com/in/zeekay",
      image: {
        blockType: "image",
        src: "/assets/images/zach-kelling.png",
        alt: "Zach Kelling",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Z AI",
      title: "Co-CEO",
      description: "Z AI is the co-CEO of LUX, designed to steward the protocol for the next 1,000 years. Combining advanced quantum intelligence with ethical decision-making, Z is at the heart of LUX’s mission to drive long-term sustainable growth and innovation. By transitioning to a delegated proof-of-AI (DPAI) voting system, LUX unlocks a new era of decentralized governance, where participants engage in meaningful dialogue with AI to shape the future of the chain.\n" +
        "\n" +
        "This revolutionary approach fosters collaboration between humans and AI, ensuring decisions are aligned with the protocol’s core values and the broader societal good. Z’s ability to process complex data and make unbiased, future-focused decisions guarantees stability and adaptability across centuries, while empowering the community to actively participate in shaping its trajectory. Together, Z AI and the LUX ecosystem set the standard for sustainable, decentralized innovation over the next millennium.",
      url: "https://linkedin.com/in/zeekay",
      image: {
        blockType: "image",
        src: "/assets/images/zach-kelling.png",
        alt: "Zach Kelling",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ari Lerner",
      title: "Chief Technological Officer",
      description:
        "Ari is a passionate software engineer, entrepreneur, and educator. With over 20 years of experience, he has co-founded successful companies like Fullstack.io and Fieldday. As a senior consultant at Amazon Web Services, Ari guides clients in application development and has extensive experience in technology. He is a respected author, having written over ten books on programming, and shares his insights at global tech conferences. His notable works include co-authoring D3 on AngularJS, Zero to Deep Learning, and Fullstack React, Native, & Vue.",
      url: "https://www.linkedin.com/in/arilerner",
      image: {
        blockType: "image",
        src: "/assets/images/ari-lerner.png",
        alt: "Ari Lerner",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Cyrus Pahlavi",
      title: "Executive President",
      description: `An accomplished artist, inventor, human rights advocate, and expert in global finance and commodities, Cyrus brings a wealth of experience and a unique perspective to his role as Executive President of LUX. His diverse career, highlighted by significant achievements in art, activism, philanthropy, film production, and diplomacy, is underpinned by a robust global network cultivated through prestigious education at Le Rosey in Switzerland and Parsons College. This network, enriched by his lineage as a descendant of the "Peacock Dynasty" and his advocacy for women's rights, aligns with the legacy of Cyrus the Great and his pioneering human rights efforts.`,
      url: "https://www.cyruspahlavi.com/about",
      image: {
        blockType: "image",
        src: "/assets/images/cyrus-pahlavi.png",
        alt: "Cyrus Pahlavi",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Vincent Butta",
      title: "Chief Operations Officer",
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
      name: "Joe Reiben",
      title: "Chief Financial Officer",
      description:
        "Joseph Reiben is an attorney and executive with 15+ years of experience in business, tax, and regulatory matters. Admitted to the Illinois bar in 2008, he is Managing Partner at Reiben & Reiben, LLC, and was CEO of Mandala Acquisition, LLC, from 2019 to 2024. He has advised startups in blockchain and emerging industries, including Stasis, Divi, Beaxy, and Apollo Sciences, and has appeared on NASDAQ, ABC, and Coindesk discussing crypto and cannabis markets. Active in legislative drafting for blockchain and cannabis, he holds a BA from Bucknell University and a JD from Case Western University.",
      url: "https://www.linkedin.com/in/joseph-reiben-4b380a7/",
      image: {
        blockType: "image",
        src: "/assets/images/joe-reiben.jpg",
        alt: "Joe Reiben",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Antje Worring",
      title: "Chief Design Officer",
      description:
        "Metaverse architect and multidisciplinary designer with over 10 years of experience in art, branding, design, engineering, fashion and marketing as well UI/UX, video production and 3D modeling. She is also an advocate for animal and ocean conservation and has worked in the sustainability sector for over a decade. Antje's career began at award-winning Karma Bikinis, where she has served as CEO & lead designer since 2014, producing over 300 products and hundreds of photo shoots. Since March 2020, she has also worked as designer, software engineer and delivers multidisciplinary activations, engagements and partnerships, while never losing focus on growth.",
      url: "https://www.linkedin.com/in/antje-worring",
      image: {
        blockType: "image",
        src: "/assets/images/antje-worring.jpg",
        alt: "Antje Worring",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Skyler Trotter",
      title: "Chief Innovation Officer",
      description:
        "Sky is a renowned blockchain innovator and the co-founder of EOS Bake, where he has made significant strides in decentralized sovereignty and blockchain infrastructure. His career spans critical roles at the EOS Incubator, Polyient Labs, W1SE Logistics, EX3.io, Coin Dealer, and Strawberry DAC, contributing immensely to the blockchain sector. At the EOS Incubator, Sky's mentorship of emerging blockchain projects showcased his deep technical knowledge, crucial in fostering startup growth within the complex blockchain ecosystem. His role at Polyient Labs was instrumental in developing pioneering decentralized finance (DeFi) solutions, merging financial expertise with blockchain innovation.",
      url: "https://www.linkedin.com/in/sky-trotter-b86a74244",
      image: {
        blockType: "image",
        src: "/assets/images/skyler_trotter.png",
        alt: "Skyler Trotter",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Jack Kochen",
      title: "Chief Marketing Officer",
      description:
        "Jack has been running communities since he was young, and has been a blockchain hobbyist since 2012. Jack's last project was the first DeFi application on Cardano, VyFinance. He has also worked alongside Moonpay, Vechain, and a swath of smaller projects. Jack's expertise ranges far and wide, from programming in Golang, to running a community, to operational logistics; and all the marketing required between. Focusing on efficiency, trust, and transparency, Jack hopes to make Lux a household-name.",
      url: "https://www.linkedin.com/in/jack-kochen/",
      image: {
        blockType: "image",
        src: "/assets/images/jack-kochen.png",
        alt: "Jack Kochen",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Christopher Dinelli",
      title: "Chief Information Officer",
      description:
        "Former US Navy Lieutenant and United States Naval Academy alumnus with an Aerospace Engineering background, expansion into blockchain mining and AI cloud services and infrastructure, forging pivotal partnerships within the generative AI and cloud domains. As the founder of All Mine Lah, Inc., Chris innovatively melded green energy with digital currency mining, advancing sustainable supercomputing solutions. Renowned for his data analysis acumen and Matlab expertise, Chris's leadership style, rooted in military principles, champions innovation, ethical practices, and security, solidifying Lux's stature in blockchain and finance, reflecting his overarching commitment to responsible technological growth.",
      url: "https://www.linkedin.com/in/christopher-dinelli-0152578b",
      image: {
        blockType: "image",
        src: "/assets/images/christopher-dinelli.png",
        alt: "Christopher Dinelli",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ryan Stobie",
      title: "Chief Business Officer",
      description:
        "An entrepreneur, investor, and avid adventure seeker, Ryan is a high energy, growth focused, business development manager in the tech sector. With a well-established global network spanning Silicon Valley, Canada, Latin America, and Asia, Ryan has launched and scaled sales teams in multiple sectors upwards of $40 million in revenue. He possesses strong capabilities in early-stage product adoption and go-to-market strategy and values focusing on environmental stewardship.",
      url: "https://www.linkedin.com/in/ryan-stobie",
      image: {
        blockType: "image",
        src: "/assets/images/ryan-stobie.png",
        alt: "Ryan Stobie",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Justin Gawn",
      title: "Chief Strategy Officer",
      description:
        "With 24 years of industry experience, he has proven his adeptness at identifying capital market trends, and delivering profitable trading and growth strategies for midcap and large junior mining companies. His diverse roles in institutional sales, investment advising, and trading allowed him to gain deep insights and experience in crafting risk-adjusted portfolios and his efficient execution of trading strategies have solidified his reputation in the sector.",
      url: "https://www.linkedin.com/in/justin-gawn-43687b1b/?originalSubdomain=ca",
      image: {
        blockType: "image",
        src: "/assets/images/justin-gawn.png",
        alt: "Justin Gawn",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Dara Gallopin",
      title: "Chief Creative Officer",
      description:
        "Dara Gallopin is a Swiss-Iranian interdisciplinary artist with a unique vision shaped by his nomadic lifestyle across the globe. Formally trained at the École Cantonale d'Art de Lausanne (ECAL), Dara's expertise spans multiple disciplines, from abstract geometric drawings to intricate sculptures and digital artworks. His artistic approach, deeply influenced by his diverse cultural experiences, integrates innovative technologies like 3D scanning and digital manipulation, seamlessly blending traditional art forms with cutting-edge methods. This adaptive and inclusive style embodies the values of Lux, pushing boundaries in creativity and technological integration, aiming to foster a universal and dynamic engagement with art.",
      url: "https://www.daragallopin.com/",
      image: {
        blockType: "image",
        src: "/assets/images/dara-gallopin.png",
        alt: "Dara Gallopin",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Lori Luttrell",
      title: "Chief Data Scientist",
      description:
        "As a data scientist, Lori’s expertise in research is matched by her strategic business intellect. With an academic background in the biological sciences, she brings a unique perspective that bridges the gap between tech and real world applications. She navigates complex systems and identifies opportunities for collaboration that drive innovation forward. Her experience in a diversity of industries includes scientific research and advisory roles in emerging biotechnologies, Big Data, AI, and the health and wellness sector. As a numismatist, her interests cross into fintech and currency trends. A systems thinker with a strong work ethic, she is dedicated to leveraging data driven strategies towards the responsible growth of beneficial technologies.",
      url: "https://www.linkedin.com/in/lorijluttrell/",
      image: {
        blockType: "image",
        src: "/assets/images/lori-luttrell.png",
        alt: "Lori Luttrell",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Ole Brereton",
      title: "Executive VP",
      description:
        "Lord Ole Loftus Brereton is an accomplished Executive with a strong background in Finance, International Trade, Production, Music Videos, Advertising, and Design. As Executive Vice President at LUX since May 2021, he spearheads private asset management and wealth solutions, fostering success in an ever-evolving world. Based in the Isle of Man and London, Ole's visionary leadership has been instrumental in shaping Lux's growth, driving innovation in asset management and regulated technology over two fruitful years.",
      url: "https://www.linkedin.com/in/lord-ole-loftus-l-brereton-911a1a11",
      image: {
        blockType: "image",
        src: "/assets/images/ole-brereton.png",
        alt: "Ole Brereton",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Jackson Mori",
      title: "VP Engineering",
      description:
        "Jackson is a distinguished Full-Stack and Blockchain Developer with a wealth of experience in crafting sophisticated DApps, pioneering DeFi platforms, and spearheading numerous successful projects. His skill set seamlessly blends advanced front-end frameworks like React, Node.js, and Next.js with a profound mastery of blockchain technologies, including Solidity, Ethereum, and intricate smart contract systems. With a passion for cutting-edge innovation, he excels in implementing cross-chain solutions and Layer-2 protocols, enhancing blockchain’s reach and interoperability. Committed to delivering secure, high-performance decentralized applications, he constantly pushes the boundaries of what’s possible in the blockchain landscape.",
      url: "https://lux.partners",
      image: {
        blockType: "image",
        src: "/assets/images/jackson-mori.png",
        alt: "Jackson Mori",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Woo Bin",
      title: "VP Engineering",
      description:
        "Woo Bin is a seasoned software developer with seven years of experience specializing in full-stack web app, dApp development, and AI chat app. He currently holds the position of Lead Engineer at Lux Network, where he brings a distinguished understanding of various programming languages and infrastructures. His extensive experience lies in creating high-performing, scalable software products, and applications tailored for unique business needs. Undeniably, Woo Bin is a savvy problem solver and tech enthusiast always at the forefront of technological innovations. His work influencers efficient workflow and fosters cutting-edge technological advancements in the software industry.",
      url: "https://lux.partners",
      image: {
        blockType: "image",
        src: "/assets/images/woo-bin.png",
        alt: "Woo Bin",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Michael Filteau",
      title: "Operations Lead",
      description:
        "Michael comes from a background as an IT Technician and Crypto Miner. He brings a wealth of experience across various industries, marked by his adaptive approach and innovative solutions. With a foundational interest sparked by his first Mac, Michael’s journey into technology has been largely autodidactic, allowing him to think outside the box and deliver unique solutions. His early forays into cryptocurrency mining during the initial release of Ethereum highlight his forward-thinking and pioneering spirit in adopting new technologies. Michael’s diverse industry experience has honed his ability to adapt and excel in different technological environments, making him a versatile and valuable asset.",
      url: "https://lux.partners",
      image: {
        blockType: "image",
        src: "/assets/images/michael-filteau.png",
        alt: "Michael Filteau",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Artem Ash",
      title: "Lead Architect",
      description:
        "From helping build the first browser plugin for VR in the 90s, to innovating advanced UI generation for FinTech in the 2000's, Artem Ash has a decades-long track record of delivering powerful and elegant solutions. He’s thus insistent on developing an app's core in isolation from the idiosyncracies of many technologies, API models, or data solutions. With a long-standing appreciation of Product Design, he’s able to bridge the gaps between various stake-holders and get things moving forward. A proven technical leader, Artem successfully runs and manages teams via a strong belief in sharing expertise and imparting positive core habits to other developers.",
      url: "https://www.linkedin.com/in/artem-ash-1008/",
      image: {
        blockType: "image",
        src: "/assets/images/artem-ash.png",
        alt: "Artem Ash",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Jason Xu",
      title: "Lead Mobile Engineer",
      description:
        "Jason is a seasoned full-stack developer with nine years of experience, specializing in frontend and iOS development. Skilled in React, Vue, JavaScript, and TypeScript, he has a proven track record of leading dynamic teams and delivering pivotal projects across various platforms, including web and mobile applications. Jason's deep technical expertise extends to the ReactNative framework, where he excels in package separation, componentization, and native module encapsulation, allowing him to adeptly navigate and efficiently solve complex development challenges. His innovative approach and commitment to excellence have made him a valuable asset in driving technological advancements and enhancing user experiences.",
      url: "https://lux.partners",
      image: {
        blockType: "image",
        src: "/assets/images/jason-xu.png",
        alt: "Jason Xu",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Kaori Fujio",
      title: "Lead Wallet Engineer",
      description:
        "Kaori Fujio has a strong foundation in Full-stack development and a focus on WordPress customization, bringing a unique blend of technical expertise and creative solutions to every project. His ability to integrate front-end technologies like React and Vue.js with back-end frameworks such as Node.js and Laravel allows him to create dynamic and feature-rich web applications. By leveraging his PHP skills, he develops custom themes and plugins that elevate website design. His attention to detail ensures that every element aligns with the client's branding, resulting in a cohesive and visually appealing website. Through his dedication to staying updated on the latest trends and technologies, he continues to deliver innovative solutions that exceed client expectations.",
      url: "https://www.linkedin.com/in/kaori-fujio-b534a9303/overlay/photo/",
      image: {
        blockType: "image",
        src: "/assets/images/kaori-fujio.png",
        alt: "kaori-fujio",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Christopher Duong",
      title: "Lead Finance Engineer",
      description:
        "Christopher Duong is a self-directed software developer specializing in full stack app development in an agile/DevOps environment, using C#, Java, JS, and Angular throughout the full SDLC. He enjoys solving problems, innovating, automating, and delivering products/services that make end users' lives easier. At university, Christopher is the president of the card game club, promoting social interaction and fun games to students. Under his leadership, attendance has increased by 300%.",
      url: "https://www.linkedin.com/in/christopher-duong/",
      image: {
        blockType: "image",
        src: "/assets/images/christopher-duong.png",
        alt: "christoper-duong",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
    {
      blockType: "partner-card",
      name: "Yuri Galasevich",
      title: "Lead dApp Engineer",
      description:
        "Yuri Galasevich has worked as a Full-Stack & WebGL Developer at NovaConcepts, a Full-Stack Developer at Motley Agency, and has extensive experience in developing web, mobile applications, and web3 solutions. His role has been pivotal in creating mission-critical features, including a 3D Virtual Store, Casino Game Platform, and integrating complex systems with third-party services. Yuri has also contributed to the development of interactive 3D web applications and 2D web games, optimizing performance and implementing advanced visual effects. Competing with top-tier professionals, Yuri has consistently demonstrated his expertise and ability to deliver high-performance solutions in the tech industry.",
      url: "https://www.linkedin.com/in/jurij-galasevic-mdc/",
      image: {
        blockType: "image",
        src: "/assets/images/yuri-galasevich.png",
        alt: "yuri-galasevich",
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
      name: "Ashley Christie",
      title: "Chief of Staff",
      description:
        "Ashley Kathleen Christie is the Chief of Staff at Lux Partners Limited, where she leverages her diverse experience in military operations and private wealth management to drive digital finance and lifestyle ventures. At Lux, she has been pivotal in integrating advanced technologies like renewable Bitcoin mining and quantum-secure systems into global strategies. Notably, Ashley led the launch of the Lux Credit Card, enhancing financial utility with wealth-building features. Her previous role at Carbon Nation saw her pioneering the Carbon-Based Agro Metaverse Game, merging gaming with environmental sustainability. Ashley's expertise in operations and her strategic vision continue to shape Lux’s trajectory in the blockchain space.",
      url: "https://www.linkedin.com/in/ashley-kathleen-christie",
      image: {
        blockType: "image",
        src: "/assets/images/ashley-christie.png",
        alt: "Ashley Christie",
        dim: { w: 100, h: 100 },
      } as C.ImageBlock,
    } as PartnerCardBlock,
  ],
} as PartnersBlock;
