import { BlackKarmaRewards, BlackLifestyleBenefits, BlackRewards, BlackTravelBenefits } from './black'
import { EliteKarmaRewards, EliteLifestyleBenefits, EliteRewards, EliteTravelBenefits } from './elite'
import { FounderKarmaRewards, FounderLifestyleBenefits, FounderRewards, FounderTravelBenefits } from './founder'
import { SovereignKarmaRewards, SovereignLifestyleBenefits, SovereignRewards, SovereignTravelBenefits } from './sovereign'

type Card = {
  img: string,
  title: string,
  rarity?: string,
  materials: { title: string, img: string, url: string }[],
  annualFee: number,
  initiationFee: number,
  replacementFee: number,
  rewardPct: number,
  fxRatePct: number,
  travelBenefits: React.ReactNode,
  lifestyleBenefits: React.ReactNode,
  rewards: React.ReactNode,
  karmaRewards: React.ReactNode,
  maxAccountHolders: number,
}

const black: Card = {
  img: '/assets/img/cards-flat/black-f-700x441.png',
  title: 'Lux Black Card',
  materials: [{
    title: 'Anodized Black Titanium',
    img: '/assets/img/materials/black-card-anodized-black-titanium-100x99.png',
    url: '/buy?sku=LXM-CR-B-ABT'
  }],
  annualFee: 69,
  initiationFee: 999,
  replacementFee: 49,
  rewardPct: 7,
  fxRatePct: 1,
  travelBenefits: <BlackTravelBenefits/>,
  lifestyleBenefits: <BlackLifestyleBenefits/>,
  rewards: <BlackRewards/>,
  karmaRewards: <BlackKarmaRewards/>,
  maxAccountHolders: 2,
}

const founder: Card = {
  img: '/assets/img/cards-flat/chrome-cool-f-700x441.png',
  title: 'Lux Founder Card',
  rarity: '1/100,000',
  materials: [
    {
      title: 'Cool Chrome',
      img: '/assets/img/materials/founder-card-cool-chrome-99x99.png',
      url: '/buy?sku=LXM-CR-F-CC'
    },
    {
      title: 'Iridescent Chrome',
      img: '/assets/img/materials/founder-card-iridescent-chrome-99x99.png',
      url: '/buy?sku=LXM-CR-F-IC'
    }
  ],
  annualFee: 0,
  initiationFee: 4999,
  replacementFee: 49,
  rewardPct: 8,
  fxRatePct: 0.75,
  travelBenefits: <FounderTravelBenefits/>,
  lifestyleBenefits: <FounderLifestyleBenefits/>,
  rewards: <FounderRewards/>,
  karmaRewards: <FounderKarmaRewards/>,
  maxAccountHolders: 3,
}

const elite: Card = {
  img: '/assets/img/cards-flat/gold-f-700x442.png',
  title: 'Lux Elite Card',
  rarity: '1/10,000',
  materials: [
    {
      title: '24k Gold',
      img: '/assets/img/materials/elite-card-gold-100x99.png',
      url: '/buy?sku=LXM-CR-E-24G'
    },
    {
      title: 'Sterling Silver',
      img: '/assets/img/materials/elite-card-silver-99x99.png',
      url: '/buy?sku=LXM-CR-E-SS'
    }
  ],
  annualFee: 200,
  initiationFee: 4990,
  replacementFee: 79,
  rewardPct: 9,
  fxRatePct: 0.5,
  travelBenefits: <EliteTravelBenefits/>,
  lifestyleBenefits: <EliteLifestyleBenefits/>,
  rewards: <EliteRewards/>,
  karmaRewards: <EliteKarmaRewards/>,
  maxAccountHolders: 5,
}

const sovereign: Card = {
  img: '/assets/img/cards-flat/titanium-f-700x441.png',
  title: 'Lux Sovereign Card',
  rarity: '1/10,000',
  materials: [{
    title: 'Reflective Titanium',
    img: '/assets/img/materials/sovereign-card-reflective-titanium-100x99.png',
    url: '/buy?sku=LXM-CR-S-RT'
  }],
  annualFee: 14999,
  initiationFee: 49050,
  replacementFee: 89,
  rewardPct: 11,
  fxRatePct: 0,
  travelBenefits: <SovereignTravelBenefits/>,
  lifestyleBenefits: <SovereignLifestyleBenefits/>,
  rewards: <SovereignRewards/>,
  karmaRewards: <SovereignKarmaRewards/>,
  maxAccountHolders: 10,
}

const cards: Card[] = [black, founder, elite, sovereign]

export {
  type Card,
  cards
}