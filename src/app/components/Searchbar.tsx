import { ChangeEvent } from "react";

interface searchInputProops {
  searchInput?: string;
  handleSearchInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBars({
  searchInput,
  handleSearchInputChange,
}: searchInputProops) {
  return (
    <main className="flex mr-4 h-[145px] items-center">
      <div className="">
        <input
          type="text"
          title="search"
          placeholder="Search"
          className="w-[690px] h-[45px] rounded-lg outline outline-1 outline-black focus:outline-[#4340DA] focus:ring-2 focus:ring-sky-300 bg-transparent p-[10px]"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
    </main>
  );
}
