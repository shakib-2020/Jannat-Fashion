import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { FaFacebookF, FaPhone, FaWhatsapp } from "react-icons/fa";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.price, 0);
  }, [cartItems]);

  const handlePayment = () => {};

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* HEADING AND PARAGRAPH START */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            {/* HEADING AND PARAGRAPH END */}

            {/* CART CONTENT START */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* CART ITEMS START */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/* CART ITEMS END */}

              {/* SUMMARY START */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div className="text-md md:text-lg font-medium text-black">
                      &#8377;{subTotal}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    Kindly place order via given mediums. Online payment system
                    is under development.
                  </div>
                </div>

                {/* BUTTON START */}
                <h2 className="text-center font-bold text-2xl mb-5">
                  Order via :{" "}
                </h2>
                <div className="flex justify-center gap-3">
                  <div
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=61552690433016",
                        "_blank"
                      )
                    }
                    className="w-24 h-16 rounded-md bg-[#91c4f2ff] flex items-center justify-center text-black hover:bg-pink-300 cursor-pointer"
                  >
                    <FaFacebookF size={24} />
                  </div>
                  <div
                    onClick={() =>
                      window.open("https://wa.me/+351920538551", "_blank")
                    }
                    className="w-24 h-16  rounded-md bg-[#91c4f2ff] flex items-center justify-center text-black hover:bg-pink-300 cursor-pointer"
                  >
                    <FaWhatsapp size={24} />
                  </div>
                  <div
                    onClick={() => window.open("tel:+351920538551", "_blank")}
                    className="w-24 h-16  rounded-md bg-[#91c4f2ff] flex items-center justify-center text-black hover:bg-pink-300 cursor-pointer"
                  >
                    <FaPhone size={24} />
                  </div>
                </div>
                {/* BUTTON END */}
              </div>
              {/* SUMMARY END */}
            </div>
            {/* CART CONTENT END */}
          </>
        )}

        {/* This is empty screen */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">Your cart is empty</span>
            <span className="text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
