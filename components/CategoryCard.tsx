"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { Heart, ShoppingBagIcon } from "lucide-react";
import { Button } from "./ui/button";
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const CategoryCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link key={product._id} href={`/products/${product._id}`}>
    <Card className='flex justify-between cursor-pointer relative w-[250px]'>
      <CardHeader>
        <Image width={300} height={300} src={product.image[0]} alt='product' className="w-[300px] h-[230px]" />
        <div className='absolute bottom-28 right-5'>
          <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
        </div>
      </CardHeader>
      <CardFooter className='flex flex-col items-start space-y-1 '>
        <h1 className='text-sm line-clamp-1'>{product.title}</h1>
        <p className='text-primary font-medium'>Dhs. {product.price}</p>
        <div className='flex flex-row  items-center justify-between'>
          <div className='flex flex-row  items-center justify-between'>
            <div className='flex flex-row items-center gap-x-2'>
                <h1 className='line-through pr-1 text-xs'>Dhs. {product.discount}</h1>
              <p className='text-xs text-primary'>25% OFF</p>
            </div>
            <div className='ml-16 flex items-center gap-x-1'>
              <p>4.5</p>
              <FaStar className='text-yellow-500' />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
    </Link>
  );
};

export default CategoryCard;
