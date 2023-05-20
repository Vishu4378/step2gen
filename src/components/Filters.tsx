import { FilterContextType, filterValues } from "@/pages";
import React, { useContext } from "react";
import { VscSettings } from "react-icons/vsc";

const priceArr = [
  {
    label: "<$100",
  },
  {
    label: "$100-$199",
  },
  {
    label: "$200-$599",
  },
  {
    label: "$600-$999",
  },
  {
    label: ">$1000",
  },
];
interface PropType {
  categories: string[];
  brands: string[];
}

const Filters: React.FC<PropType> = ({ categories, brands }) => {
  const { setBrand, setCategory, setPrice, price, category, brand } =
    useContext(filterValues) as FilterContextType;

  return (
    <div className="bg-white rounded-sm w-80 h-5/6">
      <div>
        <div className="flex items-center justify-between px-4 py-2 text-xl font-semibold text-gray-800">
          <p>Filter</p>
          <VscSettings className="rotate-90"></VscSettings>
        </div>
        <hr></hr>
        <div className="p-4 text-sm font-semibold">
          <p className="pb-2">Brand</p>
          <form className="">
            {brands.map((item) => (
              <div className="flex items-center space-x-2" key={item}>
                <input
                  onChange={() =>
                    item !== brand ? setBrand(item) : setBrand("")
                  }
                  checked={item === brand}
                  type="checkbox"
                  value={item}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </form>
        </div>

        <hr></hr>
        <div className="p-4 text-sm font-semibold">
          <p className="pb-2">Category</p>
          <form className="">
            {categories.map((item) => (
              <div className="flex items-center space-x-2" key={item}>
                <input
                  onChange={() =>
                    item !== category ? setCategory(item) : setCategory("")
                  }
                  checked={item === category}
                  type="checkbox"
                  id={item}
                  name={item}
                  value={item}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </form>
        </div>
        <hr></hr>
        <div className="p-4 text-sm font-semibold">
          <p className="pb-2">Price</p>
          <form className="">
            {priceArr.map((item) => (
              <div className="flex items-center space-x-2" key={item.label}>
                <input
                  onChange={() =>
                    item.label !== price ? setPrice(item.label) : setPrice("")
                  }
                  type="checkbox"
                  checked={item.label === price}
                  id={item.label}
                  name={item.label}
                  value={item.label}
                />
                <label htmlFor={item.label}>{item.label}</label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
