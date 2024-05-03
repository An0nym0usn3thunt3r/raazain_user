import { marquee } from "@/utils/constants";
import Image from "next/image";
import { getProducts } from "@/lib/actions/actions";
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const MarqueeComponent = async () => {
  const products = await getProducts();
  return (
    <section className="max-w-[82rem] mx-auto mb-20 flex flex-row px-4">
      <Image src="/Group-17418.png" alt="" width={150} height={50} />
      <Marquee>
        {products.map((product: ProductType) => (
          <Link key={product.title} href={`/products/${product._id}`}>
            <div className="flex flex-row cursor-pointer">
              <Image
                src={product.image[0]}
                alt=""
                height={70}
                width={70}
                className="rounded-lg"
              />
              <div className="flex flex-col ml-2">
                <p className="text-sm font-medium text-muted-foreground line-clamp-1 mt-2 hover:text-primary w-[180px]">
                  {product.title}
                </p>
                <p className="text-primary">Dhs. {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </Marquee>
    </section>
  );
};
