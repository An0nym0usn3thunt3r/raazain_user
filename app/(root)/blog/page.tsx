import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export const revalidate = 30; // revalidate at most 30 seconds


const BlogPage = () => {
  return (
    <section className='max-w-7xl mx-auto px-10 my-20 flex flex-col'>
        <h1 className='font-semibold text-center mb-5 text-3xl lg:text-5xl'>Blogs</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
        <Card>
          <Image
            src={`/FS140x140-ezgif.com-webp-to-png-converter.png`}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">faklfmakf</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              afmafkaklfmalkf
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <Image
            src={`/FS140x140-ezgif.com-webp-to-png-converter.png`}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">faklfmakf</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              afmafkaklfmalkf
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
    </div>
    </section>
  )
}

export default BlogPage