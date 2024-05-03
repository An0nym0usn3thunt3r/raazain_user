"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MinusCircle, PlusCircle, ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";

export function CartSidebar() {
  const cart = useCart();
  const { user } = useUser();
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="sm"
          className="flex justify-between gap-x-2 items-center"
          color="primary"
        >
          <p className="text-md">Cart ({cart.cartItems.length})</p>
          <ShoppingBag className="text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            {cart.cartItems.length === 0 ? (
              <h1>You dont have any items</h1>
            ) : (
              <ul className="-my-6 divide-y divide-gray-200 overflow-y-auto">
                <>
                  {cart.cartItems.map((cartItem) => (
                    <li className="flex py-6">
                      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={cartItem.item.image[0]}
                          alt="Product image"
                          width={128}
                          height={128}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div className="flex flex-col">
                          <div className="flex flex-row justify-between font-medium text-gray-900">
                            <h3 className="text-sm">{cartItem.item.title}</h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2 w-[16rem]">
                            {cartItem.item.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-center justify-between text-sm mt-2">
                          <p className="text-primary text-sm ">
                            Dhs. {cartItem.item.price}
                          </p>
                          <div className="flex flex-row gap-x-3 items-center">
                            <Button variant="outline" size="icons">
                              <MinusCircle
                                className="text-primary cursor-pointer"
                                onClick={() =>
                                  cart.decreaseQuantity(cartItem.item._id)
                                }
                              />
                            </Button>
                            <p className="text-body-bold">
                              {cartItem.quantity}
                            </p>
                            <Button variant="outline" size="icons">
                              <PlusCircle
                                className="text-primary cursor-pointer "
                                onClick={() =>
                                  cart.increaseQuantity(cartItem.item._id)
                                }
                              />
                            </Button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => cart.removeItem(cartItem.item._id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              </ul>
            )}
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>$ {totalRounded}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button className="w-full">Checkout</Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => {}}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
