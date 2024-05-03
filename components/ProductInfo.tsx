"use client";

import { useEffect, useState } from "react";
import HeartFavorite from "./HeartFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";

import useCart from "@/lib/hooks/useCart";
import { Button } from "./ui/button";
import Categories from "./Categories";

const ProductInfo = ({ productInfo }: { productInfo: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(productInfo.color1? productInfo.color1 : "");
  const [selectedSize, setSelectedSize] = useState<string>(productInfo.size1? productInfo.size1 : "");
  const [selectedColorPrice, setSelectedColorPrice] = useState<number>(productInfo.cp1? productInfo.cp1 : 0);
  const [selectedSizePrice, setSelectedSizePrice] = useState<number>(productInfo.sp1? productInfo.sp1 : 0);
  const [quantity, setQuantity] = useState<number>(1);

  const [colors, setColors] = useState<string[]>([])
  const [sizes, setSizes] = useState<string[]>([])
  const [cp, setCp] = useState<number[]>([])
  const [sp, setSp] = useState<number[]>([])

  const handleSetColors = () => {
    let colorArr = [];
    let priceArr = [];
    productInfo.color1 !== "" ? (colorArr.push(productInfo.color1), priceArr.push(productInfo.cp1)) : null;
    productInfo.color2 !== "" ? (colorArr.push(productInfo.color2), priceArr.push(productInfo.cp2)) : null;
    productInfo.color3 !== "" ? (colorArr.push(productInfo.color3), priceArr.push(productInfo.cp3)) : null;
    productInfo.color4 !== "" ? (colorArr.push(productInfo.color4), priceArr.push(productInfo.cp4)) : null;
    productInfo.color5 !== "" ? (colorArr.push(productInfo.color5), priceArr.push(productInfo.cp5)) : null;

    setColors(colorArr);
    setCp(priceArr)
}


  const handleSetSize = () => {
    let sizeArr = []
    let priceArr = [];
    productInfo.size1 != "" ? (sizeArr.push(productInfo.size1), priceArr.push(productInfo.sp1)) : null;
    productInfo.size2 != "" ? (sizeArr.push(productInfo.size2), priceArr.push(productInfo.sp2)) : null;
    productInfo.size3 != "" ? (sizeArr.push(productInfo.size3), priceArr.push(productInfo.sp3)) : null;
    productInfo.size4 != "" ? (sizeArr.push(productInfo.size4), priceArr.push(productInfo.sp4)) : null;
    productInfo.size5 != "" ? (sizeArr.push(productInfo.size5), priceArr.push(productInfo.sp5)) : null;

    setSizes(sizeArr)
    setSp(priceArr)
  }

  useEffect(()=>{
    handleSetColors();
    handleSetSize();
  }, [])

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
        {
          productInfo.categories.length > 0 ? 
            <p className="tracking-tighter text-sm text-muted-foreground">
              <span className="font-medium text-black">PRODUCT TYPE</span> :{" "}
              {productInfo.categories.map((Category) => Category.title).join(", ")}
            </p>
         : null
        }
        {
          productInfo.collections.length > 0 ? 
            <p className="tracking-tighter text-sm text-muted-foreground">
              <span className="font-medium text-black">COLLECTION TYPE</span> :{" "}
              {productInfo.collections.map((Category) => Category.title).join(", ")}
            </p>
         : null
        }
        
        <p className="tracking-tighter text-sm text-muted-foreground">
          <span className="font-medium text-black">VENDOR</span> : RAAZAIN
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-700 line-clamp-3 mt-2">
          {productInfo.description}
        </p>
        <p className="text-2xl font-semibold text-primary">
          Dhs. {productInfo.price + selectedColorPrice + selectedSizePrice}
        </p>
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-xs line-through text-muted-foreground">
            Dhs. {productInfo.discount}
          </p>
          <p className="text-sm text-primary">21% OFF</p>
        </div>
      </div>

      {colors.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Colors:</p>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <p
                key={index}
                className={`border border-primary px-2 py-1 rounded-lg cursor-pointer ${
                  selectedColor === color && "bg-primary text-white"
                }`}
                onClick={() => {setSelectedColor(color); setSelectedColorPrice(cp[index])}}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {sizes.length > 0 && (
        <div className="flex flex-col gap-2">
          <p className="text-base-medium text-grey-2">Sizes:</p>
          <div className="flex gap-2">
            {sizes.map((size, index) => (
              <p
                key={index}
                className={`border border-black px-2 py-1 rounded-lg cursor-pointer ${
                  selectedSize === size && "bg-primary text-white"
                }`}
                onClick={() => {setSelectedSize(size); setSelectedSizePrice(sp[index])}}
              >
                {size}
              </p>
            ))}
          </div>
        </div>
      )}

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
              color: selectedColor,
              size: selectedSize,
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
