import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { calltoaction } from '@/utils/constants'
import Image from 'next/image'
import { Button } from './ui/button'

export const CallToAction = () => {
  return (
    <section className='max-w-7xl mx-auto my-10 px-10'>
        <div className='grid md:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-x-3 mt-10'>
            {calltoaction.map((call) => (
            <Card key={call.title} className='flex flex-col items-center'>
                <CardHeader>    
                    <Image className='rounded-md' src={call.src} alt='' width={150} height={150} />
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-md font-bold'>{call.title}</h1>
                        <p className='text-md pt-2 text-muted-foreground '>{call.sub}</p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant='outline'>
                        {call.button}
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    </section>
  )
}