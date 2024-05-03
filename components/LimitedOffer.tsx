'use client'
import React from 'react'
import { Image } from '@nextui-org/react'
import CountdownTimer from './CountdownTimer1'

interface YourComponentprops {
  className?: string;
}

export const LimitedOffer = () => {
  const targetDate = new Date('2024-04-31T23:59:59');
  const targetDate2 = new Date('2024-05-31T23:59:59');
  return (
    <section className='my-10 max-w-[82rem] mx-auto'>
      <div className='mt-20 mb-10'>
        <h1 className='text-2xl font-medium text-gray-700 px-4'>Limited Offer</h1>
      </div>
      <div className='flex flex-col lg:flex-row  mx-auto justify-between gap-y-4 items-center px-5 '>
        <div className='flex flex-col'>
          <Image src='https://www.raazain.com/cdn/shop/files/pkg_1.png?v=1708608522' alt='' height={300} width={550} />
          <CountdownTimer targetDate={targetDate}  /> 
          </div>
          <div className='flex flex-col'>
          <Image src='https://www.raazain.com/cdn/shop/files/pkg_1.png?v=1708608522' alt='' height={300} width={550} />
          <CountdownTimer targetDate={targetDate2}  />
          </div>
      </div>
    </section>
  )
}