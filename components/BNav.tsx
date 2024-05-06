'use client'
import { ChevronDown, MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

export const Bnav = () => {
  return (
    <section className='border-b w-full bg-primary md:block hidden'>
        <div className='h-12  flex flex-row justify-start max-w-[82rem] px-4 mx-auto'>
            <div className='flex flex-row items-center gap-x-10 text-white'>
                <div className='md:flex hidden  flex-row items-center gap-x-10'>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={'/blog'}>
                    Blog
                </Link>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant='link1' size='sm' className='gap-x-2'
                        >
                        Categories <ChevronDown className='h-4 w-4' />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">New file</DropdownItem>
                        <DropdownItem key="copy">Copy link</DropdownItem>
                        <DropdownItem key="edit">Edit file</DropdownItem>
                        <DropdownItem key="delete" className="text-danger">
                            <Link href='/all-categories'>
                                More Categories
                            </Link>
                        </DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                <Link href={'/wishlist'}>
                    Wishlist
                </Link>
                <Link href={'/orders'}>
                    Orders
                </Link>
                <Link href={'/about'}>
                    About
                </Link>
                <Link href={'/contact'}>
                    Contact
                </Link>
                <Link  href={'/faq'}>
                    FAQs
                </Link>
                </div>
            </div>
        </div>
    </section>
  )
}