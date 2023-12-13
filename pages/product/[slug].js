import React, { useEffect, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentProductID = router.query.slug;

  const p = products[currentProductID - 1];
  useEffect(() => {
    // console.log(`product id: ${currentProductID - 1} \n product:${p}`);
    console.log(p);
  }, []);
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      {/* {products.length !== 0 ? ( */}
      <div className="w-full md:py-20">
        <ToastContainer />
        <Wrapper>
          <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
            {/* left column start */}
            <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
              <ProductDetailsCarousel images={p.images} />
            </div>
            {/* left column end */}

            {/* right column start */}
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight text-[#9833a1]">
                {p.title}
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

              {/* PRODUCT PRICE */}
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-[#4b5f97]">
                  Price : &euro;{p.price}
                </p>
                {p.original_price && (
                  <>
                    <p className="text-base  font-medium line-through">
                      &euro;{p.original_price}
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      {getDiscountedPricePercentage(p.original_price, p.price)}%
                      off
                    </p>
                  </>
                )}
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>

              {/* PRODUCT SIZE RANGE START */}

              {p.sizes && (
                <div className="mb-10">
                  {/* HEADING START */}
                  <div className="flex justify-between mb-2">
                    <div className="text-md font-semibold">Select Size</div>
                    <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                      Select Guide
                    </div>
                  </div>
                  {/* HEADING END */}

                  {/* SIZE START */}

                  <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                    {p.sizes.data.map((item, i) => (
                      <div
                        key={i}
                        className={`border rounded-md text-center py-3 font-medium ${
                          item.enabled
                            ? "hover:border-[#a14da0ff] cursor-pointer"
                            : "cursor-not-allowed bg-black/[0.1] opacity-50"
                        } ${
                          selectedSize === item.size ? "border-[#a14da0ff]" : ""
                        }`}
                        onClick={() => {
                          setSelectedSize(item.size);
                          setShowError(false);
                        }}
                      >
                        {item.size}
                      </div>
                    ))}
                  </div>
                  {/* SIZE END */}

                  {/* SHOW ERROR START */}
                  {showError && (
                    <div className="text-red-600 mt-1">
                      Size selection is required
                    </div>
                  )}
                  {/* SHOW ERROR END */}
                </div>
              )}

              {/* PRODUCT SIZE RANGE END */}

              {/* ADD TO CART BUTTON START */}
              <button
                className="w-full py-4 rounded-full bg-[#91c4f2ff] text-black text-lg font-bold transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...p,
                        selectedSize,
                        oneQuantityPrice: p.price,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}
              {/* <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={() => {
                  console.log("clicked");
                }}
              >
                Call us to place order!
              </button> */}

              {/* WHISHLIST BUTTON START */}
              {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button> */}
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <ReactMarkdown>{p.description}</ReactMarkdown>
                </div>
              </div>
            </div>
            {/* right column end */}
          </div>

          <RelatedProducts products={products} />
        </Wrapper>
      </div>
      {/* ) : (
        <>
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">No Product!</span>
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
        </>
      )} */}
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://dummyjson.com/products`);
  const res = await fetch(`http://localhost:3000/api/product`);
  const data = await res.json();
  const products = data.products;

  // Pass data to the page via props
  return { props: { products } };
}

export default ProductDetails;
