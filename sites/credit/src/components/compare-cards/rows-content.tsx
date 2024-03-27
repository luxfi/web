import { ApplyTypography } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import { formatPrice } from '@hanzo/commerce'
import type { Card } from '@/types/card'
import { numCardsDesktop, numCardsMobile } from './index'

const MdxRowContent: React.FC<{
  key: number | string
  content?: React.ReactNode
  hiddenOnMobile?: boolean
  className?: string
}> = ({
  key,
  content,
  hiddenOnMobile,
  className
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'flex-col gap-2 lg:gap-4 lg:col-span-3 typography-p:text-sm md:typography-p:text-base',
        className
      )}
    >
      {content}
    </ApplyTypography>
  )
}

const DataRowContent: React.FC<{
  key: number
  content?: React.ReactNode
  hiddenOnMobile?: boolean
}> = ({
  key,
  content,
  hiddenOnMobile
}) => {
  return (
    <ApplyTypography
      key={key}
      className={cn(
        hiddenOnMobile ? 'hidden lg:flex' : 'flex',
        'items-center justify-center lg:col-span-3'
      )}
    >
      {content && <h4>{content}</h4>}
    </ApplyTypography>
  )
}

const rowsContent = (selectedCards: Card[]) => {
  return [
    {
      title: 'Travel Benefits',
      description: 'Sustainable, mindful experiences to elevate the body, mind, and soul.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent
            key={i}
            content={selectedCards[i]?.travelBenefits}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'What you earn?',
      description: 'Rewards are based on a percentage of your average available credit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent
            key={i}
            content={selectedCards[i]?.rewards}
            hiddenOnMobile={i > numCardsMobile - 1}
            className='justify-center'
          />
        ))}
      </>
    },
    {
      title: 'Karma Rewards',
      description: 'Karma Rewards, is our point reward system that can be used to pay for almost anything. You can also leverage it and earn even more by staking the Karma you have accrued in the Lux ecosystem. Plus you can even sell it to pay off your balance. ',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent
            key={i}
            content={selectedCards[i]?.karmaRewards}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'Exclusive Lux Benefits',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <MdxRowContent
            key={i}
            content={selectedCards[i]?.lifestyleBenefits}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'Maximum Account Holders',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i]?.maxAccountHolders}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'Annual Reward',
      description: 'Reward Based on average Deposit.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? `${selectedCards[i].rewardPct}%` : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'Lost Card Fee',
      description: 'If you lose your card we can replace it and get it to you within 3 days, business days with expedited worldwide shipping.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? formatPrice(selectedCards[i].replacementFee) : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    },
    {
      title: 'FX Rate',
      description: 'Rate of exchange when traveling or paying in foreign currency.',
      content: <>
        {[...Array(numCardsDesktop)].map((_, i) => (
          <DataRowContent
            key={i}
            content={selectedCards[i] ? `${selectedCards[i].fxRatePct}%` : undefined}
            hiddenOnMobile={i > numCardsMobile - 1}
          />
        ))}
      </>
    }
  ]
}

export {
  rowsContent as default
}