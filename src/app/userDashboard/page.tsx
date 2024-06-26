"use client";

import Image from "next/image";
import { useState } from "react";

import SearchBars from "@/app/components/Searchbar";
import { LinkButton } from "../components/Button";
import BookCard from "../components/Bookcard";

import BatmanImage from "@/../public/assets/batman.png";
import Flashimage from "@/../public/assets/flash.png";
import Suicidesquad from "@/../public/assets/suicidesquad.png";
import titans from "@/../public/assets/titans.png";
import harleyquinn from "@/../public/assets/harleyquinn.png";
import Atomichabits from "@/../public/assets/AtomicHabits.jpg";
import bookofbill from "@/../public/assets/bookofbill.jpg";
import jujutsukaisen from "@/../public/assets/JujutsuKaisen.jpg";
import onepiece from "@/../public/assets/onepiece.jpg";
import youarehere from "@/../public/assets/youarehere.jpg";

const books = [
  {
    src: Suicidesquad,
    title: "Suicide Squad",
    author: "Suicide Squad",
  },
  {
    src: Flashimage,
    title: "Flash",
    author: "Flash",
  },
  {
    src: titans,
    title: "Titans",
    author: "Titans",
  },
  {
    src: harleyquinn,
    title: "Harley Quinn",
    author: "Harley Quinn",
  },
  {
    src: onepiece,
    title: "One Piece",
    author: "Oda",
  },
  {
    src: jujutsukaisen,
    title: "Jujutsu Kaisen Vol 1",
    author: "Gege Akutami",
  },
  {
    src: Atomichabits,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    src: bookofbill,
    title: "Book Of Bill",
    author: "Alex Hirsch",
  },
  {
    src: youarehere,
    title: "You are Here",
    author: "David Nicholls",
  },
];

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="w-full flex flex-col">
      <div className="mx-auto">
        <SearchBars onChange={(value) => setSearchTerm(value)} />
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
              <LinkButton
                href="#"
                variant="blue"
                className="text-2xl rounded-xl"
              >
                See More!
              </LinkButton>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-center text-2xl">Popular Book</h1>
          <BookCard
            src={Flashimage}
            title="Flash"
            author="Flash"
            className=""
          />
        </div>
        {filteredBooks.map((book, index) => (
          <BookCard
            key={index}
            src={book.src}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </main>
  );
}
