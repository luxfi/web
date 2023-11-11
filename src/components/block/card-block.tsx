import React from 'react'

import type { Block, CardBlock, VideoDimensions } from '@/types/block'
import type { LinkDef }  from '@/types'

import Icons from '@/components/icons'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/primitives/card'
import ApplyTypography, { type TypographySize } from '@/primitives/apply-typography'

import LinkElement from '../link-element'

import MediaBlockComponent from './media-block'
import CTABlockComponent from './cta-block'

const ArrowLinkElement: React.FC<{
  def: LinkDef,
}> = ({
  def
}) => (
  <LinkElement
    def={def}
    className='justify-between'
    variant='link'
    icon={<Icons.linkOut className='w-[18px] h-[18px]' />}
    iconAfter
  />
) 

const getTypographySize = (s: string): TypographySize => {
  const tokenArray = s.split(' ')
  const sizeToken = tokenArray.find((tok) => (tok.startsWith('typography-')))
  if (sizeToken) {
    const subTokenArray = sizeToken.split('-')
    return subTokenArray[1] as TypographySize
  }
  return 'responsive'
}

const CardBlockComponent: React.FC<{
  block: Block
  className?: string
  contentClassName?: string
}> = ({
  block,
  className='',
  contentClassName=''
}) => {

  if (block.blockType !== 'card') {
    return <>card block required</>
  }

  const card = block as CardBlock
  const has = (s: string) => (card.specifiers?.includes(s))  

  const ghost = has('ghost') // no outer padding, no borders, larger title, all left-aligned bg is same (default)

  const contentsAlign = has('content-left') ? 'items-start ' : 'items-center '
  const disabledBorder = (has('appear-disabled' ) ? ' border-muted-4' : ' border-muted-3')
  const outerBorder = ((has('no-outer-border') || ghost) ? ' border-0' : '')
  const innerBorder = (ghost ? ' border-0' : '')
  const paddingclx = ghost ? ' px-0 py-0' : ' px-6 py-3'
  const mainGap = ghost ? ' gap-2' : ''
  const disabledText = (has('appear-disabled') ? ' text-muted-2' : '')
  const disabledTypoText = (has('appear-disabled') ? ' typography-p:text-muted-2' : '')
  const bgclx = (has('bg-card') ? ' bg-level-1' : '')
  const contentclx = (has('left-justify-content') ? ' items-start justify-start' : '') + contentClassName
  const titleclx = (has('heading-style-title') ? ' font-heading text-base leading-tight' : '') + 
    (ghost ? ' text-left md:text-xl' : '') 
  
  const typoSize: TypographySize = (card.specifiers) ? getTypographySize(card.specifiers) : 'responsive'
  const typoclx = (typoSize === 'sm') ? 'typography-sm typography-p:text-sm ' : (typoSize === 'lg') ? 'typography-lg ' : '' 

  const contentBefore = has('content-before')

  const MediaAndContent: React.FC = () => ((has('media-left')) ? ( 
    // media left layout
    <CardContent className={'flex flex-row justify-start items-stretch p-0 grow ' + disabledBorder + bgclx + contentclx}>
    {card.media && (
      <div className={'box-content grow-0 not-typography' + paddingclx} style={{
        width: (card.media.dim as VideoDimensions).sm!.width 
      }}>
        <MediaBlockComponent 
          block={card.media} 
          usePoster={has('video-use-poster')} 
          size='sm' 
          className={has('appear-disabled') ? 'opacity-[0.6]' : ''}
        />
      </div>
    )}
    {card.content && (
      <ApplyTypography className={'grow border-l flex flex-col justify-center ' + contentsAlign + disabledTypoText + paddingclx + disabledBorder} size={typoSize}>
        {(typeof card.content === 'string') ? (<p>{card.content}</p>) : card.content} 
      </ApplyTypography>
    )}
    </CardContent>
  ) : ( // default layout
    <CardContent className={
      'grow typography flex flex-col justify-center ' + 
      typoclx + contentsAlign + disabledTypoText + bgclx + paddingclx + (has('full-width') ? ' p-0 ' : ' ') +
      contentClassName 
    }>
      {card.content && contentBefore && (
        (typeof card.content === 'string') ? (<p>{card.content}</p>) : card.content
      )}
      {card.media && (
        <MediaBlockComponent block={card.media} />
      )}
      {card.content && !contentBefore && (
        (typeof card.content === 'string') ? (<p>{card.content}</p>) : card.content
      )}
    </CardContent>
  ))

  const Footer: React.FC = () => ( !card.cta ? null : (has('links-w-arrow') ? (
      // links w arrow
    <CardFooter className={
      'typography typography-a:text-muted-2 typography-a:hover:text-muted-1 typography-a:text-xs typography-a:no-underline typography-a:hover:underline ' + 
      'flex flex-col justify-start items-stretch ' + paddingclx
    }>
      <CTABlockComponent 
        block={card.cta} 
        renderLink={(def: LinkDef, key: any) => (<ArrowLinkElement def={def} key={key} />)}
      />
    </CardFooter>
  ) : ( // default 
    <CardFooter className={'grid grid-cols-1 gap-2 md:flex md:flex-row md:justify-center ' + paddingclx} >
      <CTABlockComponent block={card.cta} />
    </CardFooter>
  )))

  return (
    <Card className={'flex flex-col self-stretch ' + disabledBorder + outerBorder + bgclx + mainGap + className}>
      {(card.title || card.byline) && (
        <CardHeader className={'not-typography' + ' text-accent' + disabledText + paddingclx + innerBorder}>
          {card.title && (<CardTitle className={'text-center text-lg font-medium' + titleclx}>{card.title}</CardTitle>)}
          {card.byline && (<CardDescription>{card.byline}</CardDescription>)}
        </CardHeader>      
      )}
      <MediaAndContent />
      <Footer />
    </Card>  
  )
}

export default CardBlockComponent