"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Progress } from "@hanzo/ui/primitives";
import { useRef, type FC } from "react";
import { TextBlock, type TextBlockType } from "../components/TextBlock";
import { LinkTo, type LinkToProps } from "../components/LinkTo";
import { LearnMoreBlock, type LearnMoreBlockProps } from "../components/LearnMoreBlock";
import { FaqItem, type FaqItemProp } from "../components/FaqItem";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EnterpriseBox, type EnterpriseBoxProps } from "../components/EnterpriseBox";

const TextBlockData: TextBlockType[] = [
  {
    title: "Inclusive and Fair",
    description: "Lux Coin’s distribution model is designed to ensure fairness and inclusivity, allowing participants of all sizes to engage without bias. Market-driven pricing ensures equal opportunity for all.",
    icon: "assets/common/hand.svg"
  },
  {
    title: "Open Distribution",
    description: "Lux Coin is distributed over a 369-day period, providing ample time for users to engage, learn, and participate within the Lux ecosystem, ensuring a broad and equitable distribution.",
    icon: "assets/common/door.svg"
  },
  {
    title: "Transparent",
    description: "Lux Coin operates with full transparency, with pricing determined by market demand. This approach mirrors traditional mining economics, offering a clear and unbiased entry for all participants.",
    icon: "assets/common/rect.svg"
  }
];

const LinkToData: LinkToProps[] = [
  {
    title: "Lux ID",
    link: "https://lux.id"
  },
  {
    title: "Lux Credit",
    link: "https://lux.credit"
  },
  {
    title: "Lux Network",
    link: "https://lux.network"
  },
  {
    title: "Linkedin",
    link: "https://linkedin.com/company/luxdefi"
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/luxdefi"
  },
  {
    title: "Facebook",
    link: "https://facebook.com/luxdefi"
  },
  {
    title: "Github",
    link: "https://github.com/luxfi"
  },
  {
    title: "X",
    link: "https://x.com/luxdefi"
  },
  {
    title: "Blog",
    link: "https://lux.blog"
  },
];

const LearnMoreBlockData: LearnMoreBlockProps[] = [
  {
    title: "Explore Lux Network",
    description: "Dive into expert insights, tutorials, and guides that unlock the potential of the Lux blockchain ecosystem and its innovative solutions.",
    image: "assets/common/zk.png"
  },
  {
    title: "Secure and Quantum Safe",
    description: "Discover Lux’s quantum secure Lux Safe and Lux Wallet, safeguarding your digital assets with the highest level of encryption and security.",
    image: "assets/common/quantum.png"
  },
  {
    title: "Zero-Knowledge Bridge",
    description: "Learn about Lux’s zero knowledge Teleport Protocol and Lux Bridge, enabling private and secure asset transfers across multiple blockchains.",
    image: "assets/common/zero.png"
  },
  {
    title: "Lux Credit Card",
    description: "Experience unlimited spending power with the Lux Credit Card. Access up to 80% of your collateral, earn rewards, and enjoy fee-free transactions without selling your crypto.",
    image: "assets/common/auto-repaying.png"
  },
  {
    title: "Lux Pyramid",
    description: "The Pyramid Computer is a high-performance AI supercomputer designed for home and office use, combining cutting-edge technology with unmatched privacy.",
    image: "assets/common/validator.png"
  },
  {
    title: "Lux Key is your all access pass.",
    description: "Your all-access pass to the Lux ecosystem, unlocking seamless entry to every product, service, and benefit Lux has to offer.",
    image: "assets/common/luxkey.png"
  },
  {
    title: "What is Lux Dollar?",
    description: "A versatile, stable digital currency designed for instant transactions and easy integration across the entire Lux Network.",
    image: "assets/common/luxcash.png"
  },
];

const FaqItemsData: FaqItemProp[] = [
  {
    title: "How do you earn rewards?",
    link: "https://docs.lux.network"
  },
  {
    title: "When are the Lux Quests?",
    link: "https://lux.quest"
  },
  {
    title: "Is Lux safe from hacking?",
    link: "https://docs.lux.network"
  },
  {
    title: "Can you add Bitcoin to your Lux Wallet?",
    link: "https://docs.lux.network"
  },
  {
    title: "How can I work for Lux?",
    link: "https://lux.careers"
  },
  {
    title: "How do I stake my LUX coins?",
    link: "https://wallet.lux.network"
  },
  {
    title: "How do you earn rewards?",
    link: "https://docs.lux.network"
  },
  {
    title: "How to join DAO?",
    link: "https://docs.lux.network"
  },
  {
    title: "How do you launch a subnet?",
    link: "https://docs.lux.network"
  },
];

const EnterpriseData: EnterpriseBoxProps[] = [
  {
    title: "Passively Earn",
    description: "Users that run blockchain nodes, verify transactions on the Lux Network and earn generously each time they participate in the block formation.",
    links: [
      {
        label: "Run a Validator",
        link: "https://docs.lux.network"
      }
    ]
  },
  {
    title: "Unlimited Credit Card",
    description: "Spend without selling your crypto, loan to value of up to 80% on any transaction, plus earn generously without getting fees.",
    links: [
      {
        label: "Browse Cards",
        link: "https://lux.cards"
      },
      {
        label: "See Benefits",
        link: "https://lux.cards/benefits"
      }
    ]
  },
  {
    title: "Military Grade Security",
    description: "Quantum safety and securitization of your assets and transaction, within the Lux Ecosystem, Lux Bridge, Lux Wallet, and Lux Exchange. All made possible through the utilization of lattice and lamport signatures.",
    links: [
      {
        label: "Read Docs",
        link: "https://docs.lux.network"
      },
      {
        label: "Open Source",
        link: "https://github.com/luxfi"
      }
    ]
  },
  {
    title: "Private Transactions",
    description: "Privately transact across any chain with Lux Bridge for fast, efficient payments. Trade, stake, and provide liquidity for Lux and other cryptos using fiat, altcoins, wire transfer, Apple Pay, debit, or credit cards.",
    links: [
      {
        label: "Bridge Assets",
        link: "https://bridge.lux.network"
      },
      {
        label: "Lux Exchange",
        link: "https://lux.exchange"
      }
    ]
  }
];

const HomeLayout: FC = () => {
  const learnMoreBlockRef = useRef<HTMLDivElement | null>(null);

  const reviewScrollLeft = () => {
    if (learnMoreBlockRef.current) {
      learnMoreBlockRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const reviewScrollRight = () => {
    if (learnMoreBlockRef.current) {
      learnMoreBlockRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative">

      {/* Section One: Join the Revolution */}
      <div className="relative w-full overflow-x-hidden md:overflow-x-clip">
        <img src="assets/common/pink-effect.png" alt="effect-bg" className="absolute top-[-50px] lg:top-[-160px] right-[-80px] lg:right-0 w-[400px] lg:w-auto" />
        <div className="mt-40 flex flex-col lg:flex-row justify-evenly">
          <div className="flex flex-col gap-20 items-center z-1">
            <img src="assets/common/lux-logo.png" alt="lux-logo" className="w-[300px] lg:w-full" />
            <a href="https://app.luxco.in" target="blank">
            <Button className="hidden lg:flex px-4 py-4 text-xl text-black uppercase rounded-full">Claim your lux</Button>
            </a>
          </div>
          <div className="z-1 px-[15px] lg:px-0 mt-[30px] lg:mt-0">
            <div className="flex flex-row lg:flex-col justify-between">
              <div>
                <h2 className="text-[20px] lg:text-[32px] xl:text-[40px] uppercase text-grey">Lux Coin distribution</h2>
                <span className="text-[32px] lg:text-[48px] xl:text-[64px] uppercase text-white mt-4">Join the revolution</span>
              </div>
              <div className="mt-0 lg:mt-[52px] flex flex-col lg:flex-row justify-between gap-3">
                <div>
                  <p className="text-[8px] lg:text-xl xl:text-xl text-grey">Current Period 0/369</p>
                  <h3 className="text-white text-[14px] lg:text-xl xl:text-4xl">00:00:00:00&nbsp;<span className="uppercase text-white text-base">Time Left</span></h3>
                </div>
                <div>
                  <p className="text-[8px] lg:text-xl xl:text-xl text-grey">Current Distribution</p>
                  <h3 className="text-white text-[14px] lg:text-xl xl:text-4xl">2,000,000&nbsp;<span className="uppercase text-white text-base">Lux</span></h3>
                  <h3 className="text-white text-[14px] lg:text-xl xl:text-4xl">$500,000&nbsp;<span className="uppercase text-white text-base">Received</span></h3>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xl text-grey">Total Distributed</p>
              <p className="text-sm text-white text-center">4,000,000,000</p>
              <Progress value={50} className="h-[10px] lg:h-[31px] mt-2 lg:mt-4" />
              <div className="flex flex-row justify-between mt-4">
                <span className="text-xs text-grey uppercase">0 Lux</span>
                <span className="text-xs text-grey uppercase">1,000,000,000,000 Lux</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two: Text Blocks */}
      <div className="mt-[190px] hidden lg:flex flex-row gap-[35px] xl:gap-[70px] items-start justify-center">
        {
          TextBlockData.map((item, index) => <TextBlock {...item} key={index} />)
        }
      </div>
      <div className="block lg:hidden mt-[32px] border-t border-[#1E1E1E]">
        <Accordion type="single" collapsible className="w-full">
          {
            TextBlockData.map((item, index) =>
              <AccordionItem value={index.toString()} key={index} className="border-[#1E1E1E]">
                <AccordionTrigger>
                  <div className="flex flex-row gap-3 justify-center px-4 py-[21px]">
                    <img src={item.icon} alt={item.title} className="w-[12%]" />
                    <p className="text-white text-base">{item.title}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-[21px] py-[27px]">
                  <p className="text-grey text-[14px]">{item.description}</p>
                </AccordionContent>
              </AccordionItem>
            )
          }
        </Accordion>
      </div>

      {/* Section Three: Join Lux */}
      <div className="mt-[51px] lg:mt-[105px] px-[30px] lg:px-[50px] xl:px-[142px]">
        <h1 className="text-white text-[24px] xl:text-[36px]">Join Lux</h1>
        <div className="flex flex-wrap gap-x-4 xl:gap-x-[50px] gap-y-2 xl:gap-y-3 px-0 mt-5 xl:mt-15">
          {
            LinkToData.map((item, index) => <LinkTo {...item} key={index} />)
          }
        </div>
      </div>

      {/* Section Four: Learn More */}
      <div className="mt-[125px] px-[50px] xl:px-[142px] relative">
        <div className="hidden lg:flex flex-row gap-5">
          <h1 className="text-white text-[24px] xl:text-[36px]">Learn More</h1>
          <span className="underline text-white text-[24px] xl:text-[36px] cursor-pointer">Show All</span>
        </div>
        <div ref={learnMoreBlockRef} className="flex flex-col lg:flex-row gap-5 xl:gap-11 overflow-x-auto overflow-y-auto lg:overflow-y-hidden no-scroll justify-start mt-10 xl:mt-20">
          {
            LearnMoreBlockData.map((item, index) => <LearnMoreBlock {...item} key={index} />)
          }
        </div>
        <Button className='w-8 h-7 p-0 hidden lg:block absolute left-2 top-[240px] bg-transparent text-white' onClick={reviewScrollLeft}>
          <ChevronLeft />
        </Button>
        <Button className='w-8 h-7 p-0 hidden lg:block absolute right-2 top-[240px] bg-transparent text-white' onClick={reviewScrollRight}>
          <ChevronRight />
        </Button>
      </div>

      {/* Section Five: Faqs */}
      <div className="hidden lg:block mt-[144px] px-[50px] xl:px-[142px]">
        <h1 className="text-white text-[24px] xl:text-[36px]">FAQ's</h1>
        <div className="flex flex-wrap gap-x-[40px] xl:gap-x-[140px] gap-y-[20px] xl:gap-y-[60px] mt-[20px] xl:mt-[62px]">
          {
            FaqItemsData.map((item, index) => <FaqItem {...item} key={index} />)
          }
        </div>
      </div>

      <div className="block lg:hidden mt-[53px]">
        <h1 className="text-white text-[24px] xl:text-[36px] px-2">FAQ's</h1>
        <Accordion type="single" collapsible className="w-full border-t border-[#1E1E1E] mt-[37px]">
          {
            FaqItemsData.map((item, index) =>
              <AccordionItem value={index.toString()} key={index} className="border-[#1E1E1E]">
                <AccordionTrigger className="px-2">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="px-[21px] py-[27px]">
                </AccordionContent>
              </AccordionItem>
            )
          }
        </Accordion>
      </div>

      {/* Section Six: Select Card */}
      <div className="hidden mt-[100px] xl:mt-[300px] lg:flex flex-row gap-[35px] xl:gap-[86px] px-[50px] xl:px-[142px]">
        <div className="">
          <h1 className="text-[28px] xl:text-[36px] text-white">Never sell your crypto again.</h1>
          <p className="text-[20px] xl:text-[24px] text-white mt-[16px] xl:mt-[30px]">The Lux Credit Card lets you spend up to 80% of any asset in your Lux Wallet without ever liquidating your digital assets.</p>
          <Button className="px-8 py-4 text-xl text-black rounded-full mt-[58px]">Select Your Card</Button>
        </div>
        <img src="assets/common/cards.png" alt="cards" />
      </div>

      {/* Section Seven: Financial Ecosystem */}
      <div className="hidden lg:block mt-[250px] px-[70px]">
        <div className="flex flex-row items-center gap-[30px]">
          <div>
            <h1 className="text-white text-[28px] xl:text-[36px]">Lux is a seamless financial ecosystem.</h1>
            <p className="text-white text-[20px] mt-[78px]">All the financial tools you will ever need for success and peace of mind. </p>
          </div>
          <img src="assets/common/video.png" alt="video" className="max-w-[700px]" />
        </div>
        <div className="flex flex-wrap gap-y-[50px] mt-[100px] justify-between">
          {
            EnterpriseData.map((item, index) => <EnterpriseBox {...item} key={index} />)
          }
        </div>
      </div>

      {/* Mobile mint button */}
      <Button className="block md:hidden fixed bottom-2 left-[10px] w-[calc(100%-20px)] h-10 uppercase">Mint Now</Button>

    </div>
  )
}

export default HomeLayout;
