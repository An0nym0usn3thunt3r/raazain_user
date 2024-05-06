import { getProducts } from "@/lib/actions/actions";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import ProductCardOtwo from "./ProductCardOtwo";


const ProductListOtwo = async () => {
  const products = await getProducts();

  return (
    <>
    <h1 className="max-w-[82rem] mx-auto px-4 pb-10 text-2xl font-semibold text-indigo-950">O.TWO.O COSMETICS</h1>
    <Carousel className="max-w-[82rem]  flex gap mx-auto pb-10">
            <CarouselContent className="flex mx-auto ">
          {products.map((product: ProductType) => (
            <div>
            {product.categories.some((category) => category.title === "O.TWO.O COSMETICS") ? (
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
    </>
  );
};

export default ProductListOtwo;
