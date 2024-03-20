import { SetStateAction, useEffect, useState } from "react";
import ProductBanner from "../components/ProductBanner";
import { useLocation } from "react-router-dom";

const Select = () => {
  const categories = ["Trending", "Men", "Women", "Kids"];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCategory = "trending";
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    const categoryFromQuery = queryParams.get("category");
    if (categoryFromQuery) {
      setCategory(categoryFromQuery);
    } else {
      setCategory(defaultCategory);
    }
  }, [location.search]);

  const handleCategoryChange = (event: { target: { value: any } }) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("category", newCategory);
    const newUrl = `${location.pathname}?${newSearchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center px-1 bg-gray-300 space-x-1 text-gray-700">
          <select
            className="w-32 py-1 px-2 outline-none"
            onChange={handleCategoryChange}
            value={category}
          >
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>

          <input
            type="text"
            className="flex-grow focus:outline-none px-2 py-1 text-black"
            placeholder="Search for products, brands and more..."
          />
          <button className="p-1 text-green-700">
            <SearchLogo />
          </button>
        </div>

        <div className="px-2 py-4">
          <div className="text-sm">
            Showing results for:{" "}
            <span className="text-green-800">{category}</span>
          </div>
        </div>

        <div className="grid grid-cols-5">
          <ProductBanner />
          <ProductBanner />
          <ProductBanner />
        </div>
      </div>
    </>
  );
};

export default Select;

const SearchLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
};
