import { CallToAction } from "@/components/CallToAction";
import Categories from "@/components/Categories";
import { Hero } from "@/components/Hero";
import { LimitedOffer } from "@/components/LimitedOffer";
import { MarqueeComponent } from "@/components/Marquee";
import NewsLetter from "@/components/NewsLetter";
import ProductList from "@/components/ProductList";
import ProductListCosrx from "@/components/ProductListCosrx";
import ProductListL from "@/components/ProductListL";
import ProductListOrdinary from "@/components/ProductListOrdinary";
import ProductListOtwo from "@/components/ProductListOtwo";
import ProductListSpecial from "@/components/ProductListSpecial";
import RelatedList from "@/components/RelatedList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <NewsLetter />
      <Hero />
      <MarqueeComponent  />
      {/* <LimitedOffer /> */}
      <Categories />
      <ProductListSpecial />
      <RelatedList />
      <ProductListL />
      <ProductListOtwo />
      <ProductListCosrx />
      <ProductListOrdinary />
      {/* <CallToAction /> */}
    </>
  );
}

export const dynamic = "force-dynamic";

