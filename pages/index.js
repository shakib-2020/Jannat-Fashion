import React, { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { BiChevronDown } from "react-icons/bi";
import { addProducts } from "@/store/productSlice";
import { fetchDataFromApi } from "@/utils/api";
import Link from "next/link";

// product category
const category = ["all", "three Piece", "saree", "jewellery", "cosmetics"];
export default function Home({ products }) {
  const [showProduct, setShowProduct] = useState(products);
  const [selectedCat, setSelectedCat] = useState(null);
  const handleSelectCat = (item, index) => {
    const filteredProducts = products.filter((product) =>
      item !== "all" ? product.category === item : product
    );

    setShowProduct(filteredProducts);
    setSelectedCat(index);
  };
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <h2 className="text-[28px] md:text-[39px] mb-5 font-semibold leading-tight text-[#a14da0ff]">
            Explore our Products
          </h2>
          {/* <p className="text-md md:text-xl text-gray-400">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </p> */}
        </div>
        {/* heading and paragaph end */}
        <div className="flex flex-col sm:flex-row">
          {/* filter by category start */}
          <div className="hidden sm:block sm:w-[20%] h-fit border sm:mr-10 sm:my-14 md:px-0">
            <div className="text-xl p-5">
              <h2 className="text-2xl text-[#7e1f86ff]">Filters</h2>
              <span className="text-base text-gray-400">
                {products.length}+ Products
              </span>
              <hr className="mt-3" />
            </div>
            <div className="flex flex-col gap-2 text-lg font-semibold p-5 pt-0 text-gray-700">
              <div className="flex items-center justify-between mb-2">
                <h2>Category : </h2>
                <BiChevronDown />
              </div>
              <hr />

              <input
                className="hidden sm:visible w-full my-2 text-base px-2 py-2 border"
                type="text"
                placeholder="Search"
              />
              <div className="flex flex-col gap-4">
                {category.map((item, index) => (
                  <div key={index}>
                    <h2
                      className={`capitalize cursor-pointer ${
                        selectedCat === index && "font-bold text-[#a14da0ff]"
                      }`}
                      onClick={() => handleSelectCat(item, index)}
                    >
                      {item}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* filter by category end */}
          {/* products grid start */}
          <div className="sm:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {showProduct?.map((product) => (
              <ProductCard key={product?.id} data={product} />
            ))}
            {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
          </div>
        </div>

        {/* products grid end */}
      </Wrapper>
    </main>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://dummyjson.com/products`);
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/hello`);

  const res = await fetch(`https://jannat-fashion.vercel.app/api/product`); //production
  // const res = await fetch(`http://localhost:3000/api/product`); //test
  const data = await res.json();
  const products = data.products;
  // Pass data to the page via props
  return { props: { products } };
}
