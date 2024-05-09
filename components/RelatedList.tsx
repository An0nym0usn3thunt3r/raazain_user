import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCard from "./ProductCard";
import Image from "next/image";


const RelatedList = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4  text-2xl font-semibold text-indigo-950">Related Products</h1>
          <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <CarouselItem   className="grid grid-cols-1  sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
              <div className="mx-auto py-5">
            <ProductCard key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
          <div className='flex flex-col lg:flex-row gap-y-4 my-20  max-w-[82rem] mx-auto  gap-x-10 items-center px-6'>
          <Image unoptimized width={620} height={300} className='cursor-pointer rounded-xl w-[200] h-[50]' src='/skin.webp' alt='category' />
          <Image unoptimized width={620} height={300} className='cursor-pointer rounded-xl w-[200] h-[50]' src='/beauty_product_751x190_f42c7d58-0d1d-4fb3-b363-36b3327529bd.webp' alt='category' />
        </div>
    </>
  );
};

export default RelatedList;
