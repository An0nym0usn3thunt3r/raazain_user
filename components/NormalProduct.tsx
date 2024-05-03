
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { getProducts } from "@/lib/actions/actions";
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Heart, ShoppingBagIcon } from 'lucide-react'
import { FaStar } from 'react-icons/fa'
import ProductCard from './ProductCard';

interface ProductCardProps {
    product: ProductType;
    updateSignedInUser?: (updatedUser: UserType) => void;
  }

export const NormalProduct = async ({ product, updateSignedInUser }: ProductCardProps ) => {
  const products = await getProducts();
  return (
    <section className='mx-auto my-10 max-w-7xl px-3'> 
        <div className='pt-10 flex flex-col '>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>La-Roche Posay</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
            {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
            </div>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>The Ordinary</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
            {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
            </div>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>O.TWO.O</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
            {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
            </div>
        </div>
        <div className='pt-10 flex flex-col'>
            <h1 className='font-medium text-3xl text-gray-700 pb-2 tracking-tighter'>COSRX Advanced Snail 92</h1>
            <div className='grid lg:grid-cols-4 gap-y-8 xl:grid-cols-5 md:grid-cols-3  grid-cols-2 gap-x-3 my-8 mx-auto md:mx-0'>
            {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product}/>
          ))}
            </div>
        </div>
    </section>
  )
}