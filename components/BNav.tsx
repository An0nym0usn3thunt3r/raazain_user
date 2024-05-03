'use client'
import { ChevronDown, MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

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
                <Link href={'/categories'}>
                    Categories
                </Link>
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