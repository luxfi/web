'use client'
import React, { useEffect, useState } from 'react'

import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'

import { ethers } from 'ethers'

import { 
  Button, 
  Input, 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue, 
  toast 
} from '@hanzo/ui/primitives'

import { 
  type EnhHeadingBlock, 
  type ElementBlock, 
  type ScreenfulBlock, 
  ScreenfulBlockComponent, 
  type SpaceBlock 
} from '@hanzo/ui/blocks'


import { useAuth } from '@hanzo/auth/service'
import { Ethereum as EthIconFromAuth }  from '@hanzo/auth/icons'

import { useCommerce } from '@hanzo/commerce/service'
import { formatPrice } from '@hanzo/commerce/util'

import Eth from './icons/eth'
import Btc from './icons/btc'
import Usdt from './icons/usdt'

const PayWithCrypto: React.FC<{
  setStep: (step: number) => void
}> = observer(({
  setStep
}) => {

  const c = useCommerce()
  const auth = useAuth()
  const [loadingPrice, setLoadingPrice] = useState(false)
  //const [selectedToken, setSelectedToken] = useState('eth')
  const [amount, setAmount] = useState<number>()
  const [availableAmount, setAvailableAmount] = useState<number>()
  const [provider, setProvider] = useState<ethers.BrowserProvider>()

  //const selectedToken = 'eth'

  useEffect(() => {
      // responding to changes in user.walletAddress
    return autorun(() => {
      const newProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(newProvider)
      if (auth.user?.walletAddress) {
        newProvider.getBalance(auth.user?.walletAddress).then((balance) => {
          setAvailableAmount(Number(balance)/(10**18))
        })
      }
    })
  }, [])

  // Get latest USD -> ETH exchange rate
  useEffect(() => {
    const fetchPrice = () => {
      setLoadingPrice(true)
      fetch(process.env.NEXT_PUBLIC_ETH_EXCHANGE_RATE_API ?? '')
        .then(res => res.json())
        .then((exchangeRate) => {
          const oneUsdInWei = (10**18) / exchangeRate.data.amount
          const usdAmountInWei = oneUsdInWei * c.cartTotal 
          setAmount(usdAmountInWei)
          setLoadingPrice(false)
        })
    }

    // Call immediately on load
    fetchPrice()

    // Then set interval to call every 30 seconds
    const interval = setInterval(fetchPrice, 30000)

    return () => clearInterval(interval)
  }, [c.cartTotal])

  const sendPayment = async (ether: number) => {
    // Check that we are on ethereum network
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: "0x1"}],
      })
      const newProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(newProvider)
      if (auth.user?.walletAddress) {
        newProvider.getBalance(auth.user?.walletAddress).then((balance) => {
          setAvailableAmount(Number(balance)/(10**18))
        })
      }
    } catch (err) {
      toast({title: 'Please switch your wallet to the Ethereum network.'})
      return
    }

    try {
      if (!provider) {
        // :aa TODO string table
        throw new Error('No crypto wallet found. Please install it.')
      }
  
      await window.ethereum.send('eth_requestAccounts')

      const signer = await provider.getSigner()
      ethers.getAddress(process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS ?? '')
      const tx = await signer.sendTransaction({
        to: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS,
        value: ethers.parseEther(ether.toString())
      })
      console.log({ ether, addr: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS })
      console.log('tx', tx)
      setStep(2)
    } catch (err) {
      console.log(err)
      // :aa TODO string table
      toast({title: 'Not enough funds in your wallet'})
    }
  }

  const payWidget = !!!(auth.user?.walletAddress) ? (
    <div className='w-full mx-auto max-w-[20rem]'>
      <Button variant='outline' className='w-full flex items-center gap-2' onClick={auth.associateWallet.bind(auth)}>
        <EthIconFromAuth height={20}/>Connect your wallet
      </Button>
    </div>
  ) : (
    <div className='flex flex-col gap-2 w-full mx-auto max-w-[20rem]'>
      <div>Cart value: {formatPrice(c.cartTotal)}</div>
      <Select onValueChange={(token) => {/*ONLY ETH  setSelectedToken(token) */}} defaultValue='eth'>
        <SelectTrigger>
          <SelectValue defaultValue='eth' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='eth'><div className='flex items-center gap-2'><Eth height={14}/>ETH</div></SelectItem>
            {/* <SelectItem value='btc' ><div className='flex items-center gap-2'><Btc height={14}/>BTC</div></SelectItem>
            <SelectItem value='usdt' ><div className='flex items-center gap-2'><Usdt height={14}/>USDT</div></SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>Available funds in your wallet: {availableAmount} ETH</div>
      <div>
        <Input value={amount ? amount/(10**18) : amount} contentEditable={false}/>
        <div className='relative flex items-center gap-2 -top-[32px] justify-end px-2 py-1 rounded-lg bg-muted-4 w-fit text-xs float-right mr-3'><Eth height={10}/>ETH</div>
      </div>
      <Button
        onClick={() => sendPayment(amount ? amount/(10**18) : 0)}
        disabled={!amount || loadingPrice}
      >
        Pay now
      </Button>
    </div>
  )

  return (
    <ScreenfulBlockComponent 
      block={{blockType: 'screenful',
        contentColumns: [[
          {blockType: 'enh-heading',
            specifiers: 'center',
            heading: { text: `FINALIZE PAYMENT` },
          } as EnhHeadingBlock,
          {blockType: 'space', level: 1} as SpaceBlock,
          {blockType: 'element',
            element: payWidget
          } as ElementBlock,
          {blockType: 'space', level: 1} as SpaceBlock,
          {blockType: 'element',
            element: (
              <Button 
                onClick={() => setStep(0)} 
                variant='outline' 
                className='mx-auto rounded-full w-full max-w-[15rem]'
              >Back</Button>
            )
          } as ElementBlock
        ]]} as ScreenfulBlock
      }
    />
  )
})

export default PayWithCrypto
