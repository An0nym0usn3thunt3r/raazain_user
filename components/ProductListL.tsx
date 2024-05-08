import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardL from "./ProductCardL";


const RelatedList = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4  text-2xl font-semibold text-indigo-950">La-Roche Posay</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <div>
            {product.collections.some((category) => category.title === "LA ROCHE POSAY") ? (
              <CarouselItem   className="lg:basis-1/3 xl:basis-1/6 -mx-5">
              <div className="p-5">
            <ProductCardL key={product._id} product={product}/>
            </div>
            </CarouselItem>
            ) : ""}
          </div>
          ))}
          </CarouselContent>
          </Carousel>
    </>
  );
};

export default RelatedList;
