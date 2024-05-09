import ProductCard from "@/components/ProductCard";
import SubCollections from "@/components/SubCollections";
import { getCollectionDetails } from "@/lib/actions/actions";
import Image from "next/image";
import React from "react";

const CollectionDetails = async ({
  params,
}: {
  params: { collectionsId: string };
}) => {
  const collectionDetails = await getCollectionDetails(params.collectionsId);

  return (
    <div className="px-10 py-5 flex flex-col items-center gap-8">
      <Image
        unoptimized
        src={collectionDetails.image[0]}
        width={1500}
        height={1000}
        alt="collection"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <p className="text-heading3-bold text-grey-2">{collectionDetails.title}</p>
      <p className="text-body-normal text-grey-2 text-center max-w-[900px]">{collectionDetails.description}</p>
      <div className="flex flex-wrap gap-16 justify-center">
        <SubCollections />
      </div>
    </div>
  );
};

export default CollectionDetails;

export const dynamic = "force-dynamic";