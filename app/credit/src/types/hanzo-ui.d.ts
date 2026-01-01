// Catch-all for any @hanzo/* subpaths
declare module '@hanzo/ui/*' {
  const content: any
  export = content
}

declare module '@hanzo/auth/*' {
  const content: any
  export = content
}

declare module '@hanzo/commerce/*' {
  const content: any
  export = content
}

declare module '@hanzo/ui/util' {
  export function cn(...classes: (string | undefined | null | boolean)[]): string
  export function sleep(ms: number): Promise<void>
}

declare module '@hanzo/ui/primitives' {
  import type { ComponentPropsWithoutRef, ElementRef, ForwardRefExoticComponent, RefAttributes } from 'react'

  export const Button: ForwardRefExoticComponent<any & RefAttributes<HTMLButtonElement>>
  export const Separator: ForwardRefExoticComponent<any>
  export const Input: ForwardRefExoticComponent<any & RefAttributes<HTMLInputElement>>
  export const Card: ForwardRefExoticComponent<any>
  export const CardContent: ForwardRefExoticComponent<any>
  export const CardDescription: ForwardRefExoticComponent<any>
  export const CardFooter: ForwardRefExoticComponent<any>
  export const CardHeader: ForwardRefExoticComponent<any>
  export const CardTitle: ForwardRefExoticComponent<any>
  export const Dialog: ForwardRefExoticComponent<any>
  export const DialogContent: ForwardRefExoticComponent<any>
  export const DialogDescription: ForwardRefExoticComponent<any>
  export const DialogFooter: ForwardRefExoticComponent<any>
  export const DialogHeader: ForwardRefExoticComponent<any>
  export const DialogTitle: ForwardRefExoticComponent<any>
  export const DialogTrigger: ForwardRefExoticComponent<any>
  export const Accordion: ForwardRefExoticComponent<any>
  export const AccordionContent: ForwardRefExoticComponent<any>
  export const AccordionItem: ForwardRefExoticComponent<any>
  export const AccordionTrigger: ForwardRefExoticComponent<any>
  export const AspectRatio: ForwardRefExoticComponent<any>
  export const ScrollArea: ForwardRefExoticComponent<any>
  export const ScrollBar: ForwardRefExoticComponent<any>
  export const ApplyTypography: ForwardRefExoticComponent<any>
  export const Badge: ForwardRefExoticComponent<any>
  export const Label: ForwardRefExoticComponent<any>
  export const Popover: ForwardRefExoticComponent<any>
  export const PopoverContent: ForwardRefExoticComponent<any>
  export const PopoverTrigger: ForwardRefExoticComponent<any>
  export const Select: ForwardRefExoticComponent<any>
  export const SelectContent: ForwardRefExoticComponent<any>
  export const SelectItem: ForwardRefExoticComponent<any>
  export const SelectTrigger: ForwardRefExoticComponent<any>
  export const SelectValue: ForwardRefExoticComponent<any>
  export const Sheet: ForwardRefExoticComponent<any>
  export const SheetContent: ForwardRefExoticComponent<any>
  export const SheetDescription: ForwardRefExoticComponent<any>
  export const SheetHeader: ForwardRefExoticComponent<any>
  export const SheetTitle: ForwardRefExoticComponent<any>
  export const SheetTrigger: ForwardRefExoticComponent<any>
  export const Skeleton: ForwardRefExoticComponent<any>
  export const Slider: ForwardRefExoticComponent<any>
  export const Switch: ForwardRefExoticComponent<any>
  export const Tabs: ForwardRefExoticComponent<any>
  export const TabsContent: ForwardRefExoticComponent<any>
  export const TabsList: ForwardRefExoticComponent<any>
  export const TabsTrigger: ForwardRefExoticComponent<any>
  export const Textarea: ForwardRefExoticComponent<any>
  export const Toast: ForwardRefExoticComponent<any>
  export const Tooltip: ForwardRefExoticComponent<any>
  export const TooltipContent: ForwardRefExoticComponent<any>
  export const TooltipProvider: ForwardRefExoticComponent<any>
  export const TooltipTrigger: ForwardRefExoticComponent<any>
  export const Form: ForwardRefExoticComponent<any>
  export const FormControl: ForwardRefExoticComponent<any>
  export const FormDescription: ForwardRefExoticComponent<any>
  export const FormField: ForwardRefExoticComponent<any>
  export const FormItem: ForwardRefExoticComponent<any>
  export const FormLabel: ForwardRefExoticComponent<any>
  export const FormMessage: ForwardRefExoticComponent<any>
}

declare module '@hanzo/ui/types' {
  export interface Link {
    href: string
    title: string
    external?: boolean
    newTab?: boolean
  }

  export interface LinkDef extends Link {
    variant?: string
  }

  export interface SiteDef {
    title: string
    description: string
    url: string
    logoTitle?: string
    keywords?: string
    favicon?: string
    social?: any
  }

  export interface MediaStackElement {
    type: string
    src?: string
    alt?: string
  }

  export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  export interface ImageDef {
    src: string
    alt?: string
    dim?: { w: number; h: number }
    sizes?: string
  }

  export interface VideoDef {
    src: string
    poster?: string
    dim?: { w: number; h: number }
  }
}

declare module '@hanzo/ui/blocks' {
  import type { ReactNode, FC } from 'react'

  export interface Block {
    blockType: string
    [key: string]: any
  }

  export interface ImageBlock extends Block {
    blockType: 'image'
    props: {
      src: string
      alt?: string
      dim?: { w: number; h: number }
      sizes?: string
    }
  }

  export interface VideoBlock extends Block {
    blockType: 'video'
    props: {
      src: string
      poster?: string
      dim?: { w: number; h: number }
    }
  }

  export interface ImageBlockProps {
    src: string
    alt?: string
    dim?: { w: number; h: number }
  }

  export const Screenful: FC<any>
  export const BlockComponent: FC<any>
  export const ImageBlockComponent: FC<any>
  export const VideoBlockComponent: FC<any>
  export const EnhHeadingBlockComponent: FC<any>
  export const CTABlockComponent: FC<any>
  export const SpaceBlockComponent: FC<any>
  export const AccordionBlockComponent: FC<any>
  export const CardsBlockComponent: FC<any>
}
