import ProductCard from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters"
import { getProducts } from "@/lib/actions/actions";


const FilterPage = async () => {
    const products = await getProducts();
  return (
    <section className='max-w-7xl mx-auto px-6 flex  md:flex-row'>
        <aside className='w-[300px] sticky left-0 px-6 py-10 lg:block hidden'>
        <ProductFilters  />
        </aside>
        <div className='w-[600px] md:w-[800px] m-10 '>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-8 mt-10">
        {products.map((product: ProductType) => (
            <ProductCard key={product.title} product={product}/>
          ))}
          </div>
        </div>
    </section>
  )
}

export default FilterPage