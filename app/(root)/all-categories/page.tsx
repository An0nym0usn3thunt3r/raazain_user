import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { getCategories } from '@/lib/actions/actions'
import { Button } from '@/components/ui/button'

const AllCategories = async () => {
    
  const categories = await getCategories()
  return (
    <section className="my-10 max-w-[82rem] px-2 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 ">
          {categories.map((categories: CategoriesType) => (
            <Link href={`/all-categories/${categories._id}`} key={categories._id} className="flex flex-col justify-center items-center gap-y-2 mt-8 ">
              <Image
                key={categories._id}
                src={categories.image[0]}
                alt={categories.title}
                width={450}
                height={450}
                className=" cursor-pointer w-[450px] h-[450px] mb-2 flex items-center justify-center rounded-md relative"
              />
              <Button className='absolute'>{categories.title}</Button>
           </Link>
          ))}
        </div>
        </section>
  )
}

export default AllCategories