import { MailIcon, MapPinned, PhoneCall, ShoppingCart } from 'lucide-react'
import React from 'react'

export const TNav = () => {
  return (
    <section className='border-b bg-white w-full'>
        <div className='h-9  flex flex-row justify-between  px-4 max-w-[82rem] mx-auto'>
            <div className='flex flex-row '>
                <div className='flex items-center gap-x-1 cursor-pointer '>
                    <MapPinned className='h-4 w-4 text-primary text-sm'/>
                    <p className='text-sm '>Address to be delivered</p>
                </div>
                <div className='flex items-center gap-x-1 cursor-pointer pl-5'>
                    <PhoneCall className='h-4 w-4 text-primary text-sm'/>
                    <p className='text-sm lg:flex hidden'>+971 55 582 2916</p>
                </div>
                <div className='flex items-center gap-x-2 px-5 cursor-pointer'>
                    <MailIcon className='h-5 w-5 text-primary text-sm'/>
                    <p className='text-sm hidden lg:flex'>raazain.store@gmail.com</p>
                </div>
            </div>
            <div className='flex flex-row' >
                <div className='flex items-center gap-x-2 px-5 cursor-pointer'>
                    <ShoppingCart className='h-5 w-5 text-primary text-sm'/>
                    <p className='text-sm lg:flex hidden'>Track Orders</p>
                </div>
            </div>
        </div>
    </section>
  )
}