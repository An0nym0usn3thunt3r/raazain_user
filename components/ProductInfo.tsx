"use client";

import { useEffect, useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";
import { Button } from "./ui/button";
import Categories from "./Categories";

interface Product {
  color: string;
  price: number[];
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

    for (let i = 1; i <= 5; i++) {
      const color = products[`color${i}`];
      const price = products[`cp${i}`];
      const size = products[`size${i}`];
      const image = products[`ci${i}`];

      if (!groupedProducts[color]) {
        groupedProducts[color] = {
          color: color,
          price: [],
          size: [],
          image: [],
        };
      }

      groupedProducts[color].price.push(price);
      if (!groupedProducts[color].size.includes(size)) {
        groupedProducts[color].size.push(size);
      }
      groupedProducts[color].image.push(image);
    }

    const hola = Object.values(groupedProducts) as Product[];
    console.log(hola);
    setProducts(hola);
  };

  useEffect(() => {
    console.log("\n\n\n state products");
    console.log(products);
  }, [products]);

  useEffect(() => {
    handleArray();
  }, []);

  const cart = useCart();

  return (
    <div className="max-w-[500px] flex flex-col gap-2 mx-auto">
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
          Dhs. {products && products[selectedColor] && products[selectedColor].price[selectedSize]}
        </p>
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-xs line-through text-muted-foreground">
            Dhs. {productInfo.discount}
          </p>
          <p className="text-sm text-primary">21% OFF</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-base-medium text-grey-2">Colors:</p>
        <div className="flex gap-2">
          {products?.map((product, index) => (
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
        <p className="text-base-medium text-grey-2">Sizes:</p>
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
        <Button
          className=" hover:bg-primary hover:text-white"
          onClick={() => {
            cart.addItem({
              item: productInfo,
              quantity,
              color: products && products[selectedColor] && products[selectedColor].color,
              size: products && products[selectedColor] && products[selectedColor].size[selectedSize],
            });
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
