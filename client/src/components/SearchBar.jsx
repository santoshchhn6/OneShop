import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const data = ["data1", "data2"];
  return (
    <div className="w-full md:w-[500px] relative">
      <form
        // onSubmit={handleSubmit}
        className="flex justify-between items-center  border border-gray-300 bg-slate-100 py-2 px-3 outline-none rounded-[0.5rem]"
      >
        <input
          type="text"
          placeholder="Search Product"
          className="bg-transparent outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <IoSearch
          size={24}
          className="text-slate-700 hover:text-slate-500 cursor-pointer"
          onClick={handleSubmit}
        />
      </form>
      {isFocused && search && <SearchList data={data} />}
    </div>
  );
};

const SearchList = ({ data }) => {
  return (
    <>
      {data?.length > 0 ? (
        <div className="z-50  absolute w-full md:w-[500px] max-h-[300px] border border-gray-300  bg-slate-100 rounded-[0.5rem] shadow-md overflow-y-auto">
          {data?.map((result, index) => (
            <p
              key={index}
              className="text-slate-700 p-2 hover:bg-slate-300 cursor-pointer"
              onSelect={() => {}}
            >
              {result}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchBar;
