'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const xTokens = [
  {
    name: 'xETH',
    underlying: 'ETH',
    ltv: '90',
    strategies: ['wstETH', 'rETH', 'sfrxETH'],
    description: 'Self-repaying ETH loans',
  },
  {
    name: 'xUSD',
    underlying: 'USDC',
    ltv: '90',
    strategies: ['aUSDC', 'yvUSDC'],
    description: 'Self-repaying USD loans',
  },
  {
    name: 'xLUX',
    underlying: 'LUX',
    ltv: '90',
    strategies: ['stLUX'],
    description: 'Self-repaying LUX loans',
  },
  {
    name: 'xBTC',
    underlying: 'WBTC',
    ltv: '90',
    strategies: ['yvWBTC'],
    description: 'Self-repaying BTC loans',
  },
]

const features = [
  {
    title: 'No Liquidations',
    description: 'Your collateral is never at risk. Yield from your deposits automatically repays your loan.',
  },
  {
    title: 'Up to 90% LTV',
    description: 'Borrow up to 90% of your collateral value. The highest LTV in DeFi lending.',
  },
  {
    title: 'Self-Repaying',
    description: 'Your loan repays itself over time using yield generated from your collateral.',
  },
  {
    title: 'Multi-Chain',
    description: 'Available on LUX Network, Zoo, Hanzo, and EVM chains via cross-chain bridges.',
  },
  {
    title: 'Non-Custodial',
    description: 'Your keys, your coins. Fully permissionless and decentralized protocol.',
  },
  {
    title: 'Yield Strategies',
    description: 'Multiple yield strategies per vault: Lido, Rocket Pool, Frax, AAVE, and more.',
  },
]

const terminalCommands = [
  { type: 'command', text: '$ liquid deposit --asset ETH --amount 10' },
  { type: 'info', text: 'Depositing 10 ETH to xETH vault...' },
  { type: 'success', text: '✓ Deposited 10 ETH (via wstETH strategy)' },
  { type: 'command', text: '$ liquid borrow --amount 9 --token xETH' },
  { type: 'info', text: 'Minting 9 xETH (90% LTV)...' },
  { type: 'success', text: '✓ Borrowed 9 xETH - no liquidation risk' },
  { type: 'highlight', text: '→ Loan auto-repays via staking yield' },
]

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<typeof terminalCommands>([])
  const [carouselIndex, setCarouselIndex] = useState(0)

  const carouselItems = [
    'Borrow against your assets without liquidation risk',
    'Your loan repays itself using yield from your collateral',
    'Access up to 90% of your collateral value instantly',
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const animate = () => {
      if (index < terminalCommands.length) {
        setTimeout(() => {
          setTerminalLines((prev) => [...prev, terminalCommands[index]])
          index++
          animate()
        }, 800)
      }
    }
    setTimeout(animate, 500)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">LX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider group-hover:opacity-80 transition-opacity">LIQUID</span>
              <span className="text-[10px] text-gray-500 -mt-1">PROTOCOL</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="https://docs.lux.finance" className="text-sm text-gray-400 hover:text-white transition-colors">
              Docs
            </Link>
            <Link href="https://github.com/luxfi/finance" className="text-sm text-gray-400 hover:text-white transition-colors">
              GitHub
            </Link>
          </div>

          <Link
            href="https://app.lux.finance"
            className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Launch App
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Liquid Protocol</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">V3</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Self-Repaying Loans
                <br />
                <span className="text-white">Without Liquidation Risk</span>
              </h1>

              <p className="text-xl text-gray-400 max-w-lg transition-opacity duration-300">
                {carouselItems[carouselIndex]}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://app.lux.finance"
                  className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Launch App
                </Link>
                <Link
                  href="https://docs.lux.finance"
                  className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/5 transition-colors border border-white/20 font-medium"
                >
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right: Terminal */}
            <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-xs text-gray-500">liquid-cli — zsh</span>
              </div>
              <div className="p-6 font-mono text-sm min-h-[220px]">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={
                      line.type === 'command' ? 'text-white' :
                      line.type === 'info' ? 'text-gray-500' :
                      line.type === 'success' ? 'text-green-400' :
                      'text-white font-semibold'
                    }
                  >
                    {line.text}
                  </div>
                ))}
                {terminalLines.length < terminalCommands.length && (
                  <span className="text-gray-500 animate-pulse">▌</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* x-Tokens */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Multiplied Yield Tokens</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Deposit collateral, borrow x-tokens up to 90% LTV. Your loan repays itself via yield strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {xTokens.map((token) => (
              <Link
                key={token.name}
                href="https://app.lux.finance/vaults"
                className="group bg-black border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-lg font-bold">{token.name.slice(1, 2)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{token.name}</div>
                    <div className="text-sm text-gray-500">{token.underlying}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">{token.description}</p>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-500">Max LTV</span>
                  <span className="font-semibold">{token.ltv}%</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {token.strategies.map((strat) => (
                    <span key={strat} className="text-xs px-2 py-0.5 bg-white/5 rounded">{strat}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">
              The simplest way to unlock your crypto's potential without selling.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Deposit Collateral', desc: 'Deposit ETH, USDC, LUX, or other supported assets into a vault. Choose your preferred yield strategy.' },
              { step: '2', title: 'Borrow x-Tokens', desc: 'Instantly borrow up to 90% of your deposit as synthetic x-tokens. No credit checks, no KYC.' },
              { step: '3', title: 'Auto-Repay', desc: 'Yield from your collateral automatically repays your loan over time. Zero liquidation risk, ever.' },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Liquid Protocol</h2>
            <p className="text-gray-400">
              The most capital-efficient, risk-free way to leverage your crypto assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="bg-black border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to unlock your future yield?</h2>
          <p className="text-gray-400 mb-8">
            Join users earning yield while accessing liquidity without selling their assets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.finance"
              className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Launch App
            </Link>
            <Link
              href="https://docs.lux.finance"
              className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/5 transition-colors border border-white/20 font-medium"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xs">LX</span>
              </div>
              <span className="text-sm text-gray-400">Liquid Protocol</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="https://lux.network" className="hover:text-white transition-colors">Network</Link>
              <Link href="https://lux.exchange" className="hover:text-white transition-colors">Exchange</Link>
              <Link href="https://lux.fund" className="hover:text-white transition-colors">Fund</Link>
              <Link href="https://docs.lux.finance" className="hover:text-white transition-colors">Docs</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
