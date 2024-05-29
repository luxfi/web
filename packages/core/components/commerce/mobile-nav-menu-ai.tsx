'use client'
import React, { useState } from 'react'
import type { LinkDefExtended } from '../../site-def/main-nav'
import { LeftArrow, RightArrow, Search } from '../icons'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@hanzo/ui/primitives'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'
import { ChatWidget } from '@luxfi/core'
import Link from 'next/link'

interface MobileNavMenuAIProps {
    link: LinkDefExtended,
    setChatbotOpen: (open: boolean) => void
}

const MobileNavMenuAI: React.FC<MobileNavMenuAIProps> = ({
    link,
    setChatbotOpen
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    React.useEffect(() => {
        console.log('open', setChatbotOpen)
    }, [setChatbotOpen]);

    return (
        <>
            <Link href="https://lux.chat">
                <div className="w-full px-5 py-4 text-2xl bg-[#202020] cursor-pointer" onClick={() => {
                    console.log('test1', setChatbotOpen)
                    if (setChatbotOpen) {
                        setChatbotOpen(true)
                        console.log('test2')
                    }
                }}>
                    <div className="flex items-center gap-5 border-b border-[#3A3A3A]">
                        <Search className='w-6 h-6 flex-none' />
                        <div className="text-white font-bold flex-1 ">Ask AI Chat...</div>
                        <RightArrow className='w-6 h-6 flex-none' />
                    </div>
                </div>
            </Link>
            <div className={`fixed left-0 top-0 w-screen h-[calc(100vh-64px)] ${isOpen ? 'block' : 'hidden'}`} style={{ backgroundColor: 'black' }}>
                <div className="h-fit bg-[#202020]">
                    <Command className='rounded-lg border shadow-md text-[#A7A7A8]'>
                        <div className="w-full px-5 py-4 text-2xl cursor-pointer">
                            <div className="flex items-center gap-5 border-b border-[#3A3A3A]">
                                <LeftArrow className='w-6 h-6' onClick={() => setIsOpen(false)} />
                                {/* <Search className='w-6 h-6 flex-none' />
                                <div className="text-white font-bold flex-1 ">Ask AI Chat...</div> */}
                                <CommandInput className="text-white font-bold flex-1 text-xl" placeholder='Ask AI Chat...' />
                                <RightArrow className='w-6 h-6 flex-none' />
                            </div>
                        </div>
                        <CommandList className='max-h-none h-fit'>
                            <CommandEmpty>No result found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <Calendar className='mr-2 h-4 w-4' />
                                    <span>Calendar</span>
                                </CommandItem>
                                <CommandItem>
                                    <Smile className='mr-2 h-4 w-4' />
                                    <span>Search Emoji</span>
                                </CommandItem>
                                <CommandItem>
                                    <Calculator className="mr-2 h-4 w-4" />
                                    <span>Calculator</span>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator>
                            </CommandSeparator>
                            <CommandGroup heading='Settings'>
                                <CommandItem>
                                    <User className='mr-2 h-4 w-4' />
                                    <span>Profile</span>
                                    <CommandShortcut>⌘P</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                    <CommandShortcut>⌘B</CommandShortcut>
                                </CommandItem>
                                <CommandItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                    <CommandShortcut>⌘S</CommandShortcut>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>

                </div>
            </div>
        </>
    )
}

export default MobileNavMenuAI