import Image from "next/image";
import React from "react";
import { TfiHeart } from "react-icons/tfi";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

interface proptype {
  thumbnail: string;
  title: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  old_price?: number;
}
const ProductCard: React.FC<proptype> = ({
  category,
  discountPercentage,
  price,
  rating,
  stock,
  thumbnail,
  title,
  old_price,
}) => {
  return (
    <div className="items-center">
      <div className="relative overflow-hidden bg-white rounded">
        <TfiHeart className="absolute font-semibold text-gray-600 right-4 top-7"></TfiHeart>
        <Image
          className="object-cover w-full h-40"
          width={100}
          height={100}
          src={thumbnail}
          alt="product_image"
        />
        <div className="p-4">
          <p className="font-semibold">{title} </p>
          <p className="text-xs font-medium text-gray-600">{category}</p>
          <div className="flex items-center gap-2">
            <div className="flex my-1 text-yellow-400">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </div>

            <p className="text-xs font-medium text-gray-500">
              {" "}
              &#40;{stock}&#41;
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">$ {price}</p>
            {old_price && (
              <del className="text-sm font-semibold text-gray-500">
                $ {old_price}
              </del>
            )}
            <p className="text-sm font-medium text-green-500">
              {discountPercentage}% off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
