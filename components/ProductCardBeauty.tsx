"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Card, CardHeader, CardFooter, divider } from "@nextui-org/react";
import { Button } from "./ui/button";
import { title } from "process";
import { Heart, ShoppingBagIcon, ShoppingBasket } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import useCart from "@/lib/hooks/useCart";
import Categories from "./Categories";
interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCardOtwo = ({ product, updateSignedInUser }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.ci1[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.size1);
  function calculateDiscountPercentage(): number {
    const discountPercentage = 100 - (product.price / product.discount) * 100;
    return +discountPercentage.toFixed(0);
  }

  const [quantity, setQuantity] = useState<number>(1);
  const cart = useCart();
  return (
    <section>
      <Link key={product._id} href={`/products/${product._id}`}>
        <Card
          shadow="sm"
          className="flex justify-between cursor-pointer relative w-[202px] h-[350px]"
        >
          <CardHeader>
            <Image
              unoptimized
              width={300}
              height={300}
              src={product.image[0]}
              alt="product"
              className="w-[229px] h-[212px]"
            />
            <div className="absolute bottom-[40px] right-5">
              <HeartFavorite
                product={product}
                updateSignedInUser={updateSignedInUser}
              />
            </div>
            <div className="absolute bottom-[40px]  right-14">
              <Button variant="outline" size="icons">
                <ShoppingBagIcon
                  onClick={() => {
                    cart.addItem({
                      item: product,
                      quantity,
                      color: selectedColor,
                      size: selectedSize,
                    });
                  }}
                  className="text-primary h-5 w-5"
                />
              </Button>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col items-start space-y-1 ">
            <h1 className="text-sm line-clamp-1 pb-1">{product.title}</h1>
            <p className="text-primary font-medium">Dhs. {product.price}</p>
            <div className="flex flex-row justify-between items-center gap-x-12">
            {product.discount === 0 || product.discount === 0.1 ? (
                <div className="w-[80px]"></div>
              ) : (
              <div className="flex flex-row gap-x-2 justify-evenly">
              <h1 className="line-through  text-xs ">
                Dhs. {product.discount}
              </h1>
              <span className="text-primary text-xs">
                {calculateDiscountPercentage()}%
              </span>
            </div>
            )}
              <div className="flex flex-row items-center ">
                <p>4.5</p>
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </section>
  );
};

export default ProductCardOtwo;
