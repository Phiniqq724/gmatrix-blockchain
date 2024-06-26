"use client";


import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import BookHeader from "@/../public/images/book1-banner.png";
import SearchBars from "@/../src/app/components/Searchbar";

const UserBook = () => {

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SearchBars
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      <div className="relative w-full">
        <Image
          src={BookHeader}
          alt="Header"
          width={9000}
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Save to Favorite
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded">
            Borrow
          </button>
        </div>
        <div className="absolute top-2/4 left-12  text-white space-y-2">
        <h2 className="text-4xl">Frank Miller</h2>
          <h1 className="text-6xl font-bold">Batman: The Dark Knight</h1>
          
        </div>
      </div>
      <div className="mt-8 pr-5 text-2xl font-medium space-y-4 text-gray-700 text-justify">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim massa, gravida eu mi et, faucibus varius nunc. Nullam laoreet ultricies turpis, in iaculis sem eleifend et. Maecenas eget facilisis ligula. Praesent sollicitudin, velit a venenatis tempus.
          <br />
          <br />
          Purus lacus elementum elit, sed dignissim nisl enim ut mi. Suspendisse convallis purus erat. Aliquam eget orci dui.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim massa, gravida eu mi et, faucibus varius nunc. Nullam laoreet ultricies turpis, in iaculis sem eleifend et. Maecenas eget facilisis ligula. Praesent sollicitudin, velit a venenatis tempus.
          <br />
          <br />
          Purus lacus elementum elit, sed dignissim nisl enim ut mi. Suspendisse convallis purus erat. Aliquam eget orci dui.
        </p>
      </div>
    </div>
  );
};

export default UserBook;
