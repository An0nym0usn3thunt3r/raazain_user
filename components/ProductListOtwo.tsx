import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardOtwo from "./ProductCardOtwo";
import Image from "next/image";


const ProductListOtwo = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4 pb-10 text-2xl font-semibold text-indigo-950">O.TWO.O COSMETICS</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <div>
            {product.categories.some((category) => category.title === "O.TWO.O Cosmetics") ? (
              <CarouselItem   className="lg:basis-1/3 xl:basis-1/6 -mx-5">
              <div className="p-5">
            <ProductCardOtwo key={product._id} product={product}/>
            </div>
            </CarouselItem>
            ) : ""}
          </div>
          ))}
          </CarouselContent>
          </Carousel>
          <div className='flex flex-col lg:flex-row gap-y-4 my-20  max-w-[82rem] mx-auto  gap-x-10 items-center px-6'>
          <Image unoptimized width={620} height={300} className='cursor-pointer rounded-xl w-[200] h-[50]' src='/men.webp' alt='category' />
          <Image unoptimized width={620} height={300} className='cursor-pointer rounded-xl w-[200] h-[50]' src='/women.webp' alt='category' />
        </div>
    </>
  );
};

export default ProductListOtwo;
