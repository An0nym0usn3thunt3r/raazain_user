import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardOtwo from "./ProductCardOtwo";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import ProductCardBeauty from "./ProductCardBeauty";
import ProductCardHome from "./ProductCardHome";
import ProductCard from "./ProductCard";


const ProductListSpecial = async () => {
  const products = await getProducts();

  return (
    <>
      <section className="my-20 bg-primary rounded-md max-w-7xl mx-auto hidden lg:block">
      <div className="flex  items-center rounded-lg flex-col ">
    <Tabs defaultValue="beauty" className="w-full">
            <TabsList className="flex mx-auto ">
                <TabsTrigger value="beauty">Beauty/Health</TabsTrigger>
                <TabsTrigger value="cosmetics">O.Two.O</TabsTrigger>
                <TabsTrigger value="home">Home Decor</TabsTrigger>
            </TabsList>
          <TabsContent value="beauty" className="relative top-0 ">
          <Image src={'/45.jpeg'} alt="" height={445} width={1378} className="w-[1378px] h-[445px] absolute"/>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl px-10 flex  mx-auto pb-10">
            <CarouselContent className="flex mx-auto ml-44">
          {products.map((product: ProductType) => (
            <CarouselItem   className="lg:basis-1/3 xl:basis-1/4  ">
              <div className="p-5">
            <ProductCard key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
          </TabsContent>
          <TabsContent value="cosmetics" className="relative top-0 ">
          <Image src={'/45.jpeg'} alt="" height={445} width={1378} className="w-[1378px] h-[445px] absolute"/>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl px-10 flex  mx-auto pb-10">
            <CarouselContent className="flex mx-auto ml-44">
          {products.map((product: ProductType) => (
            <CarouselItem   className="lg:basis-1/3 xl:basis-1/4  ">
              <div className="p-5">
            <ProductCard key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
          </TabsContent>
          <TabsContent value="home" className="relative top-0 ">
          <Image src={'/45.jpeg'} alt="" height={445} width={1378} className="w-[1378px] h-[445px] absolute"/>
          <Carousel className="xl:max-w-7xl lg:max-w-7xl px-10 flex  mx-auto pb-10">
            <CarouselContent className="flex mx-auto ml-44">
          {products.map((product: ProductType) => (
            <CarouselItem   className="lg:basis-1/3 xl:basis-1/4  ">
              <div className="p-5">
            <ProductCard key={product._id} product={product}/>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
          </TabsContent>
        </Tabs>
        </div>

      </section> 
    </>
  );
};

export default ProductListSpecial;
