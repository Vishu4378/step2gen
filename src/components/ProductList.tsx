import React, { useContext, useState, useEffect } from "react";
import productsjson from "@/static/products.json";
import ProductCard from "./ProductCard";
import {
  FilterContextType,
  SearchContextType,
  filterValues,
  searchValues,
} from "@/pages";

interface ProductArrType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  old_price?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
}

export default function ProductList() {
  const [productArr, setProductArr] = useState<ProductArrType[]>(
    productsjson.products
  );
  const { searchValue } = useContext(searchValues) as SearchContextType;

  const { brand, category, setBrand, setCategory, price } = useContext(
    filterValues
  ) as FilterContextType;

  const filteredSearchValue =
    productsjson.products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    }) || productsjson.products;
  const filteredcategory =
    filteredSearchValue.filter((product) => {
      return product.category.toLowerCase().includes(category.toLowerCase());
    }) || productsjson.products;
  const filteredBrand =
    filteredcategory.filter((product) => {
      return product.brand.toLowerCase().includes(brand.toLowerCase());
    }) || productsjson.products;
  const filteredPrice = filteredBrand.filter((product) => {
    if (price == "<$100") {
      return product.price < 100;
    } else if (price == "$100-$199") {
      return 100 <= product.price && 199 >= product.price;
    } else if (price == "$200-$599") {
      return 200 <= product.price && 599 >= product.price;
    } else if (price == "$600-$999") {
      return 600 <= product.price && 999 >= product.price;
    } else if (price == ">$1000") {
      return 1000 < product.price;
    } else {
      return true;
    }
  });
  console.log("ss", filteredSearchValue);
  console.log("cc", filteredcategory);
  console.log("bb", filteredBrand);
  console.log("pp", filteredPrice);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === "high_to_low") {
      const shortedArrHighToLow = [...productArr].sort(
        (a, b) => b.price - a.price
      );

      setProductArr(shortedArrHighToLow);
    } else if (value === "low_to_high") {
      const shortedArrHighToLow = [...productArr].sort(
        (a, b) => a.price - b.price
      );

      setProductArr(shortedArrHighToLow);
    } else {
      setProductArr(productArr);
    }
  };
  useEffect(() => {
    setProductArr(filteredPrice);
    console.log("ye");
  }, [searchValue, brand, category, price]);
  return (
    <main>
      <div>
        <div>
          <div className="flex justify-between w-10/12">
            <p className="text-sm font-semibold text-gray-500">
              Home / Home decoration / Artificial
            </p>
            <div>
              <select
                className="px-2 text-sm font-semibold text-gray-800 border outline-none"
                onChange={handleSort}
              >
                <option value="" selected disabled hidden>
                  Sort by
                </option>
                <option value="high_to_low">Price high to low</option>
                <option value="low_to_high">Price low to high </option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid w-10/12 gap-5 py-5 sm:grid-cols-2 xl:grid-cols-3">
          {productArr?.map((product) => {
            return (
              <div>
                <ProductCard {...product} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
