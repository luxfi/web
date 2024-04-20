
export interface ILink {
  url: string;
  name: string;
  icon: string;
}

export interface ILinks {
  General: ILink[];
  Network: ILink[];
  Shop: ILink[];
  Members: ILink[];
}


export default {
  General: [
    {
      url: "https://lux.chat/?utm_medium=social&utm_source=linktree&utm_campaign=ai",
      name: "AI",
      icon: "/assets/links/ai.jpeg"
    },
    {
      url: "https://lux.finance/?utm_medium=social&utm_source=linktree&utm_campaign=app",
      name: "App",
      icon: "/assets/links/app.jpeg"
    },
    {
      url: "https://lux.credit?utm_medium=social&utm_source=linktree&utm_campaign=credit",
      name: "Credit",
      icon: "/assets/links/credit.jpeg"
    },
    {
      url: "https://lux.market/?utm_medium=social&utm_source=linktree&utm_campaign=market",
      name: "Market",
      icon: "/assets/links/market.jpeg"
    },
    {
      url: "https://lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=network",
      name: "Network",
      icon: "/assets/links/network.jpeg"
    },
    {
      url: "https://lux.partners/?utm_medium=social&utm_source=linktree&utm_campaign=partners",
      name: "Partners",
      icon: "/assets/links/partners.jpeg"
    },
    {
      url: "https://warpcast.com/~/channel/lux?utm_medium=social&utm_source=linktree&utm_campaign=warpcast",
      name: "Warpcast",
      icon: "/assets/links/warpcast.jpg"
    }
  ],
  Network: [
    {
      url: "https://bridge.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=bridge",
      name: "Bridge",
      icon: "/assets/links/bridge.jpeg"
    },
    {
      url: "https://explorer.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=explorer",
      name: "Explorer",
      icon: "/assets/links/explorer.jpeg"
    },
    {
      url: "https://lux.market/validator?utm_medium=social&utm_source=linktree&utm_campaign=validator",
      name: "Validator",
      icon: "/assets/links/validator.jpg"
    },
    {
      url: "https://wallet.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=wallet",
      name: "Wallet",
      icon: "/assets/links/wallet.jpeg"
    },
    {
      url: "https://github.com/luxdefi?utm_medium=social&utm_source=linktree&utm_campaign=code",
      name: "Code",
      icon: "/assets/links/code.jpeg"
    },
    {
      url: "https://docs.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=docs",
      name: "Docs",
      icon: "/assets/links/docs.jpeg"
    }
  ],
  Shop: [
    {
      url: "https://lux.credit/?utm_medium=social&utm_source=linktree&utm_campaign=cards",
      name: "Cards",
      icon: "/assets/links/cards.jpeg"
    },
    {
      url: "https://lux.market/coin?utm_medium=social&utm_source=linktree&utm_campaign=coins",
      name: "Coins",
      icon: "/assets/links/coins.jpeg"
    },
    {
      url: "https://lux.market/validator?utm_medium=social&utm_source=linktree&utm_campaign=validators",
      name: "Validators",
      icon: "/assets/links/validators.jpeg"
    },
    {
      url: "https://lux.market/gold?utm_medium=social&utm_source=linktree&utm_campaign=gold",
      name: "Gold",
      icon: "/assets/links/gold.jpeg"
    },
    {
      url: "https://lux.market/silver?utm_medium=social&utm_source=linktree&utm_campaign=silver",
      name: "Silver",
      icon: "/assets/links/silver.jpeg"
    }
  ],
  Members: [
    {
      url: "https://login.lux.network/?utm_medium=social&utm_source=linktree&utm_campaign=login",
      name: "Login",
      icon: "/assets/links/login.jpeg"
    },
    {
      url: "https://lux.market/passkey?utm_medium=social&utm_source=linktree&utm_campaign=mint",
      name: "Mint",
      icon: "/assets/links/mint.jpeg"
    },
    {
      url: "https://lux.quest/?utm_medium=social&utm_source=linktree&utm_campaign=quest",
      name: "Quest",
      icon: "/assets/links/quest.jpeg"
    }
  ]
} as ILinks
