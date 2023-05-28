import Image from "next/image";
import React, { useContext, useState } from "react";
import productsjson from "@/static/products.json";
import { AiOutlineSearch } from "react-icons/ai";
import { GrList } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { SearchContextType, searchValues } from "@/pages";

export default function Navbar() {
  const { searchValue, setSearchValue } = useContext(
    searchValues
  ) as SearchContextType;
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.target.value);
  };
  return (
    <main className="py-3 bg-white border-b-2 px-14">
      <div className="flex justify-between ">
        <div className="flex space-x-6">
          <div>
            <Image
              alt="img"
              width={100}
              height={100}
              src={
                "https://www.webtonative.com/static/images/logo/header-white.svg"
              }
            />
          </div>
          <div className="flex items-center w-48 m-1 border-2 rounded">
            <input
              value={searchValue}
              onChange={handleSearch}
              placeholder="Search"
              className="w-40 pl-2 outline-none"
            ></input>
            <AiOutlineSearch></AiOutlineSearch>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center font-medium ">
            <GrList className="font-bold"></GrList>
            <p>Categories</p>
          </div>
          <div className="relative">
            <IoIosNotifications className="text-xl text-gray-400" />
            <div className="absolute top-0 right-0 p-[3px] bg-green-500 rounded-full "></div>
          </div>
          <div className="">
            <FaUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
