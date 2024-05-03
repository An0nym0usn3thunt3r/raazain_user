import { getCategories, getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories()

  return (
    <section className="my-10 max-w-[82rem] px-2 mx-auto">
        <div className="grid lg:grid-cols-7 xl:grid-cols-9 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 gap-x-4 ">
          {categories.map((categories: CategoriesType) => (
            <Link href={`/categories/${categories._id}`} key={categories._id} className="flex flex-col justify-center items-center gap-y-2 mt-8 hover:scale-110">
              <Image
                key={categories._id}
                src={categories.image[0]}
                alt={categories.title}
                width={100}
                height={100}
                className="rounded-full cursor-pointer w-[100px] h-[100px] mb-2 flex items-center justify-center"
              />
              <p className="text-muted-foreground text-sm   text-center">{categories.title}</p>
            </Link>
          ))}
        </div>
        </section>
  );
};

export default Categories;
