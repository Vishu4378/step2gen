import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import productsjson from "@/static/products.json";
import products from "../static/products.json";
import Navbar from "@/components/Navbar";
import Filters from "@/components/Filters";
import ProductList from "@/components/ProductList";
import { useContext, createContext, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export interface FilterContextType {
  category: string;
  setCategory: (value: string) => void;
  brand: string;
  setBrand: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
}

export const searchValues = createContext<SearchContextType | null>(null);
export const filterValues = createContext<FilterContextType | null>(null);

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const categories = productsjson.products.map((product) => product?.category);
  const filtered_Categories = [...new Set(categories)];

  const brands = productsjson.products.map((product) => product?.brand);
  const filtered_brands = [...new Set(brands)];

  return (
    <>
      <filterValues.Provider
        value={{ category, setCategory, brand, setBrand, price, setPrice }}
      >
        <searchValues.Provider value={{ searchValue, setSearchValue }}>
          <div className="">
            <Navbar></Navbar>
            <div className="flex gap-5 px-12 py-10">
              <Filters
                categories={filtered_Categories}
                brands={filtered_brands}
              ></Filters>
              <ProductList></ProductList>
            </div>
          </div>
        </searchValues.Provider>
      </filterValues.Provider>
    </>
  );
}
