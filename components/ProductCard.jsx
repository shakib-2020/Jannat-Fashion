import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// {
//   id: 30,
//   title: 'Key Holder',
//   description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
//   price: 30,
//   discountPercentage: 2.92,
//   rating: 4.92,
//   stock: 54,
//   brand: 'Golden',
//   category: 'home-decoration',
//   thumbnail: 'https://i.dummyjson.com/data/products/30/thumbnail.jpg',
//   images: [
//     'https://i.dummyjson.com/data/products/30/1.jpg',
//     'https://i.dummyjson.com/data/products/30/2.jpg',
//     'https://i.dummyjson.com/data/products/30/3.jpg',
//     'https://i.dummyjson.com/data/products/30/thumbnail.jpg'
//   ]
// }
const ProductCard = ({ data }) => {
  return (
    <Link
      href={`/product/${data.id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer shadow-md shadow-[#8ca0d7ff]/40"
    >
      <Image width={500} height={500} src={data.thumbnail} alt={data.title} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-bold text-[#7e1f86ff]">{data.title}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="text-[#4b5f97] mr-2 text-lg font-semibold">
            &euro;{data.price}
          </p>

          {data.original_price && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{data.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(data.original_price, data.price)}%
                off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
