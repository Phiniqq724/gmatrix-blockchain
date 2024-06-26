"use client";

import Image from "next/image";
import React, { useState } from "react";

import SearchBars from "@/app/components/Searchbar";
import { LinkButton } from "../components/Button";
import BookCard, { BookCardProops } from "../components/Bookcard";

import BatmanImage from "@/../public/assets/batman.png";
import Flashimage from "@/../public/assets/flash.png";
import Suicidesquad from "@/../public/assets/suicidesquad.png";
import titans from "@/../public/assets/titans.png";
import harleyquinn from "@/../public/assets/harleyquinn.png";

const books: BookCardProops[] = [
  {
    src: Suicidesquad,
    title: "Suicide Squad",
    penerbit: "Suicide Squad",
  },
  {
    src: Flashimage,
    title: "Flash",
    penerbit: "Flash",
  },
  {
    src: titans,
    title: "Titans",
    penerbit: "Titans",
  },
  {
    src: harleyquinn,
    title: "Harley Quinn",
    penerbit: "Harley Quinn",
  },
];

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="w-full flex flex-col">
      <div className="mx-auto">
        <SearchBars handleSearchInputChange={handleSearchInputChange} searchInput={searchTerm} />
      </div>
      <div className="grid grid-cols-4 gap-[60px] mx-auto">
        <div className="col-span-3 w-[620px] h-[400px] flex ">
          <Image src={BatmanImage} alt="Batman" className="-z-10 absolute" />
          <div className="text-white text-4xl items-end place-content-end p-[20px] flex justify-between w-full">
            <div>
              <h1 className="font-light">Frank Miller</h1>
              <h1 className="font-bold">
                BATMAN: <br />
                THE DARK KNIGHT
              </h1>
            </div>
            <div>
              <LinkButton href="#" variant="blue" className="text-2xl rounded-xl">
                See More!
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-center text-2xl">Popular Book</h1>
          <BookCard src={Flashimage} title="Flash" penerbit="Flash" className="" />
        </div>
        {filteredBooks.map((book, index) => (
          <BookCard key={index} src={book.src} title={book.title} penerbit={book.penerbit} />
        ))}
      </div>
    </main>
  );
}
