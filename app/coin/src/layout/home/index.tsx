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
    description: "To ensure inclusivity, Lux Coin have no pre-determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.",
    icon: "assets/common/hand.svg"
  },
  {
    title: "Open Distribution",
    description: "The Coin distribution takes place over 369 days which is plenty of time coin holders to familiarize themselves with the Lux ecosystem, as well as participate in the distribution.",
    icon: "assets/common/door.svg"
  },
  {
    title: "Transparent",
    description: "To ensure inclusivity, Lux Coin have no pre-determined price; rather price is set by market demand. This mimics mining without giving potential unfair advantages to large purchasers.",
    icon: "assets/common/rect.svg"
  }
];

const LinkToData: LinkToProps[] = [
  {
    title: "Create Lux ID",
    link: "#"
  },
  {
    title: "Linkedin",
    link: "#"
  },
  {
    title: "Instagram",
    link: "#"
  },
  {
    title: "Lux.network",
    link: "#"
  },
  {
    title: "Stack Overflow",
    link: "#"
  },
  {
    title: "Facebook",
    link: "#"
  },
  {
    title: "Github",
    link: "#"
  },
  {
    title: "Lux.credit",
    link: "#"
  },
  {
    title: "X",
    link: "#"
  },
  {
    title: "Medium",
    link: "#"
  },
];

const LearnMoreBlockData: LearnMoreBlockProps[] = [
  {
    title: "Explore Lux Network",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/zk.png"
  },
  {
    title: "A Quantum Secure Wallet",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/quantum.png"
  },
  {
    title: "Zero-Knowledge Bridge Portal",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/zero.png"
  },
  {
    title: "Auto Repaying Credit Card",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/auto-repaying.png"
  },
  {
    title: "The Validator Computer",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/validator.png"
  },
  {
    title: "Lux Key is your all access pass.",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/luxkey.png"
  },
  {
    title: "What is Lux Cash?",
    description: "Our expert opinions, tutorials, guide’s, and educational content, everything you need to know about the diverse blockchain ecosystem and the game changing solutions. .",
    image: "assets/common/luxcash.png"
  },
]

const FaqItemsData: FaqItemProp[] = [
  {
    title: "How do you earn rewards?",
    link: "#"
  },
  {
    title: "When are the Lux Quests?",
    link: "#"
  },
  {
    title: "Is Lux safe from hacking?",
    link: "#"
  },
  {
    title: "Can you add Bitcoin to your Lux Wallet?",
    link: "#"
  },
  {
    title: "How can I work for Lux?",
    link: "#"
  },
  {
    title: "How do I stake my LUX coins?",
    link: "#"
  },
  {
    title: "How do you earn rewards?",
    link: "#"
  },
  {
    title: "How to join Dao?",
    link: "#"
  },
  {
    title: "How do you launch a subnet?",
    link: "#"
  },
]

const EnterpriseData: EnterpriseBoxProps[] = [
  {
    title: "Passively Earn",
    description: "Users that run blockchain nodes, verify transactions on the Lux Network and earn generously each time they participate in the block formation.",
    links: [
      {
        label: "Run a Validator",
        link: "#"
      }
    ]
  },
  {
    title: "Unlimited Credit Card",
    description: "Never lose your credit card, spend unlimitedly without selling your crypto, spend up to 80% of your collateral on any transaction, plus earn generously without getting fees.",
    links: [
      {
        label: "Browse Cards",
        link: "#"
      },
      {
        label: "See Benefits",
        link: "#"
      }
    ]
  },
  {
    title: "Military Grade Security",
    description: "Quantum safety and securitization of your assets and transaction, within the Lux Ecosystem, Zk Bridge, Lux Wallet, Lux Brdige, and Lux Exchange. All made possible through the utilization of lattice and lamport signatures.",
    links: [
      {
        label: "Run a Docs",
        link: "#"
      },
      {
        label: "Open Source",
        link: "#"
      }
    ]
  },
  {
    title: "Universal Transactions",
    description: "Seamlessly transact across any chain with Lux Bridge for fast, efficient payments. Trade, stake, and provide liquidity for Lux and other cryptos using fiat, altcoins, wire transfer, Apple Pay, debit, or credit cards.",
    links: [
      {
        label: "Bridge Assets",
        link: "#"
      },
      {
        label: "Lux Exchange",
        link: "#"
      }
    ]
  }
]

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
    <div className="w-full">

      {/* Section One: Join the resolution */}
      <div className="relative w-full">
        <img src="assets/common/pink-effect.png" alt="effect-bg" className="absolute top-[-50px] lg:top-[-160px] right-[-80px] lg:right-0 w-[400px] lg:w-auto" />
        <div className="mt-40 flex flex-col lg:flex-row justify-evenly">
          <div className="flex flex-col gap-20 items-center z-1">
            <img src="assets/common/lux-logo.png" alt="lux-logo" className="w-[300px] lg:w-full" />
            <Button className="hidden lg:flex px-4 py-4 text-2xl text-black uppercase rounded-full">Claim your lux</Button>
          </div>
          <div className="z-1 px-[15px] lg:px-0 mt-[30px] lg:mt-0">
            <div className="flex flex-row lg:flex-col justify-between">
              <div>
                <h2 className="text-[20px] lg:text-[32px] 2xl:text-[40px] uppercase text-grey">Lux Coin distribution</h2>
                <span className="text-[32px] lg:text-[48px] 2xl:text-[64px] uppercase text-white mt-4">Join the revolution</span>
              </div>
              <div className="mt-0 lg:mt-[52px] flex flex-col lg:flex-row justify-between gap-3">
                <div>
                  <p className="text-[8px] lg:text-xl 2xl:text-2xl text-grey">Current Period 96/369</p>
                  <h3 className="text-white text-[14px] lg:text-2xl 2xl:text-4xl">00:03:14:19&nbsp;<span className="uppercase text-white text-base">Time Left</span></h3>
                </div>
                <div>
                  <p className="text-[8px] lg:text-xl 2xl:text-2xl text-grey">Current Distribution</p>
                  <h3 className="text-white text-[14px] lg:text-2xl 2xl:text-4xl">2,000,000&nbsp;<span className="uppercase text-white text-base">Lux</span></h3>
                  <h3 className="text-white text-[14px] lg:text-2xl 2xl:text-4xl">$500,000&nbsp;<span className="uppercase text-white text-base">ETH Received</span></h3>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-xl text-grey">Total Distributed</p>
              <p className="text-sm text-white text-center">400,000,000</p>
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
      <div className="mt-[190px] hidden lg:flex flex-row gap-[35px] 2xl:gap-[70px] items-start justify-center">
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
      <div className="mt-[51px] lg:mt-[105px] px-[30px] lg:px-[50px] 2xl:px-[142px]">
        <h1 className="text-white text-[20px] lg:text-[48px] 2xl:text-[64px]">Join Lux</h1>
        <div className="flex flex-wrap gap-x-4 2xl:gap-x-[50px] gap-y-2 2xl:gap-y-3 px-0 2xl:px-[42px] mt-5 2xl:mt-15">
          {
            LinkToData.map((item, index) => <LinkTo {...item} key={index} />)
          }
        </div>
      </div>

      {/* Section Four: Learn More */}
      <div className="mt-[125px] px-[50px] 2xl:px-[142px] relative">
        <div className="hidden lg:flex flex-row gap-5">
          <h1 className="text-white text-[24px] 2xl:text-[36px]">Learn More</h1>
          <span className="underline text-white text-[24px] 2xl:text-[36px] cursor-pointer">Show All</span>
        </div>
        <div ref={learnMoreBlockRef} className="flex flex-col lg:flex-row gap-5 2xl:gap-11 overflow-x-auto overflow-y-auto lg:overflow-y-hidden no-scroll justify-start mt-10 2xl:mt-20">
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
      <div className="hidden lg:block mt-[144px] px-[50px] 2xl:px-[142px]">
        <h1 className="text-white text-[24px] 2xl:text-[36px]">FAQ's</h1>
        <div className="flex flex-wrap gap-x-[40px] 2xl:gap-x-[140px] gap-y-[20px] 2xl:gap-y-[60px] mt-[20px] 2xl:mt-[62px]">
          {
            FaqItemsData.map((item, index) => <FaqItem {...item} key={index} />)
          }
        </div>
      </div>

      <div className="block lg:hidden mt-[53px]">
        <h1 className="text-white text-[24px] 2xl:text-[36px] px-2">FAQ's</h1>
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
      <div className="hidden mt-[100px] 2xl:mt-[300px] lg:flex flex-row gap-[35px] 2xl:gap-[86px] px-[50px] 2xl:px-[142px]">
        <div className="">
          <h1 className="text-[32px] 2xl:text-[64px] text-white">You never have to sell your crypto again.</h1>
          <p className="text-[24px] 2xl:text-[32px] text-white mt-[16px] 2xl:mt-[30px]">The Lux Credit Card lets you spend up to 80% of any asset in your LUX wallet without ever liquidating your digital assets.</p>
          <Button className="px-8 py-4 text-2xl text-black rounded-full mt-[58px]">Select Your Card</Button>
        </div>
        <img src="assets/common/cards.png" alt="cards" />
      </div>

      {/* Section Seven: Financial Enterprise */}
      <div className="hidden lg:block mt-[250px] px-[70px]">
        <div className="flex flex-row items-center gap-[30px]">
          <div>
            <h1 className="text-white lg:text-[40px] 2xl:text-[72px] font-bold">Lux is a seamless financial enterprise.</h1>
            <p className="text-white text-[24px] mt-[78px]">All the financial tools you will ever need for success and peace of mind. </p>
          </div>
          <img src="assets/common/video.png" alt="video" className="max-w-[700px]" />
        </div>
        <div className="flex flex-wrap gap-y-[50px] mt-[100px] justify-between">
          {
            EnterpriseData.map((item, index) => <EnterpriseBox {...item} key={index} />)
          }
        </div>
      </div>

    </div>
  )
}

export default HomeLayout;