"use client";

import { useEffect, useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";
import { Button } from "./ui/button";
import Categories from "./Categories";
import { CartSidebar1 } from "./CartSidebar1";
import Gallery from "./Gallery";

interface Product {
  color: string;
  price: number[];
  discount: number[];
  size: string[];
  image: string[][];
}

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setselectedColor] = useState<number>(0);
  const [selectedSize, setselectedSize] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);

  const handleArray = () => {
    let products: any = productInfo;
    const groupedProducts: any = {};

    for (let i = 1; i <= 20; i++) {
      const color = products[`color${i}`];
      const price = products[`cp${i}`];
      const discount = products[`discount${i}`];
      const size = products[`size${i}`];
      const image = products[`ci${i}`];

      if (!groupedProducts[color] && color !== "") {
        groupedProducts[color] = {
          color: color,
          price: [],
          discount: [],
          size: [],
          image: [],
        };
      }

      groupedProducts[color]?.price.push(price);
      if (!groupedProducts[color]?.size.includes(size)) {
        groupedProducts[color]?.size.push(size);
      }
      if (!groupedProducts[color]?.discount.includes(discount)) {
        groupedProducts[color]?.discount.push(discount);
      }
      groupedProducts[color]?.image.push(image);
    }

    const hola = Object.values(groupedProducts) as Product[];
    console.log("\n\n\nhola");
    console.log(hola);
    setProducts(hola);
  };

  // function calculateDiscountPercentage(): number {
  //   // (price - price * (discount_percentage / 100)) / price * 100
  //   const price = products[selectedColor]?.price[selectedSize] | productInfo.price;
  //   const discount = productInfo.discount;
  //   const discountPercentage = 100 - ( price / discount) * 100;
  //   return +discountPercentage.toFixed(0);
  // }

  function calculateDiscountPercentage(): number {
    const price = products && products[selectedColor] ? products[selectedColor].price[selectedSize] : productInfo.price;
    const discount = products && products[selectedColor] ? products[selectedColor].discount[selectedSize] : productInfo.discount;
    const discountPercentage = 100 - (price / productInfo.discount) * 100;
    return +discountPercentage.toFixed(0);
  }

  useEffect(() => {
    console.log("\n\n\n state products");
    console.log(products);

    // selectedColor === 0 ? productInfo.image : products[selectedColor].image 
    console.log("\n\n\nproductInfo.image")
    console.log(productInfo.image)
    console.log(typeof(productInfo.image))
    console.log("\n\n\nproducts")
    console.log(products[selectedColor]?.image)
    console.log(typeof(products[selectedColor]?.image))

  }, [products]);

  useEffect(() => {
    handleArray();
  }, []);

  useEffect(()=>{
    console.log("\n\n\nselectedColor")
    console.log(selectedColor)
  }, [selectedColor])

  const cart = useCart();

  return (
  <>
      <Gallery productMedia={products && products.length > 0 && (products[0].color !== "-" || products.length > 1) ? products[selectedColor].image[0] : productInfo.image} />
    <div className="max-w-[350px] flex flex-col gap-2 mx-auto">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">{productInfo.title}</p>
        <HeartFavorite product={productInfo} />
      </div>
      <div className="space-y-2 text-sm pt-2 mt-2">
        <p className="tracking-tighter text-sm text-muted-foreground">
          <span className="font-medium text-black">AVAILABILITY</span> : ✅ In
          Stock
        </p>
        {productInfo.categories.length > 0 ? (
          <p className="tracking-tighter text-sm text-muted-foreground">
            <span className="font-medium text-black">PRODUCT TYPE</span> :{" "}
            {productInfo.categories
              .map((Category) => Category.title)
              .join(", ")}
          </p>
        ) : null}
        {productInfo.collections.length > 0 ? (
          <p className="tracking-tighter text-sm text-muted-foreground">
            <span className="font-medium text-black">COLLECTION TYPE</span> :{" "}
            {productInfo.collections
              .map((Category) => Category.title)
              .join(", ")}
          </p>
        ) : null}

        <p className="tracking-tighter text-sm text-muted-foreground">
          <span className="font-medium text-black">VENDOR</span> : RAAZAIN
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-700 line-clamp-3 mt-2">
          {productInfo.description}
        </p>
        <p className="text-2xl font-semibold text-primary">
          Dhs. {products && products[selectedColor] ? products[selectedColor].price[selectedSize] : productInfo.price}
        </p>
        {productInfo.discount === 0 || productInfo.discount === 0.1 ? "" : (
          <div className="flex flex-row items-center gap-x-2">
          <p className="text-xs line-through text-muted-foreground">
            Dhs. {productInfo.discount}
          </p>
          <p className="text-sm text-primary">{calculateDiscountPercentage()}% OFF</p>
        </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {products && products.length > 0 && (products[0].color !== "-" || products.length > 1) ? (
          <p className="text-base-medium text-grey-2">Colors: </p>
        ): "" }
        <div className="grid grid-cols-3 gap-2">
          {products?.map((product, index) => (
            product.color !== "-" && 
            <p
              className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                selectedColor === index && "bg-primary text-white"
              }`}
              key={index}
              onClick={() => {
                setselectedColor(index);
              }}
            >
              {product.color}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {productInfo.size1 === "" ? "" : (
          <p className="text-base-medium text-grey-2">Sizes:</p>
        )}
        <div className="flex gap-2">
          {products &&
            products[selectedColor] &&
            products[selectedColor].size.map((size: string, index: number) => (
              <p
              className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                selectedSize === index && "bg-primary text-white"
              }`}
                key={index}
                onClick={() => {
                  setselectedSize(index);
                }}
              >
                {size}
              </p>
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm">Quantity:</p>
        <div className="flex gap-4 items-center">
          <MinusCircle
            className="text-primary cursor-pointer"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          />
          <p className="text-body-bold">{quantity}</p>
          <PlusCircle
            className="text-primary cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          />
        </div>
      </div>
      <div className="flex flex-row gap-x-5 mt-3 rounded-lg">
        <Button>Buy Now</Button>
        <CartSidebar1 productInfo={productInfo} />
      </div>
    </div>
    </>
  );
};

export default ProductInfo;
