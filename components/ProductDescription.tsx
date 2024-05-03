"use client";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import RelatedList from "./RelatedList";
import ProductPageRList from "./ProductPageRList";

export const ProductDescription = ({ productInfo }: { productInfo: ProductType }) => {
  return (
    <>
    <section className="flex flex-col">
    <div className="flex flex-col lg:flex-row   justify-between">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl lg:text-2xl font-medium">
          <span className="font-semibold text-primary">| </span>Product
          Description
        </h1>
        <div className="mt-10">
          <Tabs
            color="primary"
            variant="underlined"
            aria-label="Tabs variants"
            className=" w-[200px] sm:w-[400px]"
          >
            <Tab key="photos" title="Description">
              <p className="text-muted-foreground pl-10 max-w-2xl">
                {productInfo.description}
              </p>
            </Tab>
            <Tab key="music" title="Shipping & Returns">
              <p className="text-muted-foreground pl-10 max-w-4xl">
              Your order of 100 AED or more gets free standard delivery.
              </p>
              <p className="text-muted-foreground pl-10 max-w-4xl">
              Standard delivery within 2 Business Days
              </p>
              <p className="text-muted-foreground pl-10 max-w-4xl">
              Express delivery within 5 - 7 Business Days
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="pt-20 flex ">
        <iframe
          width="400"
          height="215"
          src={`https://www.youtube.com/embed/`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
    </section>
    <ProductPageRList />
    </>
  );
};