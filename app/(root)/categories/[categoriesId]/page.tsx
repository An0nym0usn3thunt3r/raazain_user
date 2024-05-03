import Collection from "@/components/Collection";
import ProductCard from "@/components/ProductCard";
import { getCategoriesDetails, getCollectionDetails, getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CategoriesDetails = async ({
  params,
}: {
  params: { categoriesId: string };
}) => {
  const categoriesDetails = await getCategoriesDetails(params.categoriesId);
  const collection = await getCollections();
  console.log(collection)

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        src={categoriesDetails.image[0]}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{categoriesDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{categoriesDetails.description}</p>
      <div className="flex flex-wrap gap-16 justify-center">
        <h1 className="text-xl font-semibold">Collections : </h1>
        <Collection />
      </div>
    </div>
  );
};

export default CategoriesDetails;

export const dynamic = "force-dynamic";