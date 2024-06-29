"use client";

import React, { useEffect, useState } from "react";
import SearchBars from "@/app/components/Searchbar";
import { FormButton } from "@/app/components/Button";

import BookCard from "@/app/components/Bookcard";
import { listDocs } from "@junobuild/core-peer";
import { Book, BookData } from "../../../types/book";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [Books, setBooks] = useState<Book[]>([]);
  const list = async () => {
    const { items } = await listDocs<Book>({
      collection: "Buku",
      filter: {},
    });
    console.log(items);
    setBooks(items.map((item) => item.data));
  };

  // useEffect(() => {
  //   list();
  // }, []);

  // const filteredBooks = Books.filter((book) => book.data.judul_buku.toLowerCase().includes(searchTerm.toLowerCase()));

  // const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };
  
console.log(Books)
  return (
    <main className="w-full flex flex-col">
      <div className="mx-auto flex items-center">
        <SearchBars  />
        <FormButton variant="blue">Search</FormButton>
      </div>
      <div className="grid grid-cols-4 gap-[60px] mx-auto">
        {Books.map((book, index) => (
          <BookCard
            key={index}
            cover={book.data.cover || "cover"}
            judul_buku={book.data.judul_buku || "judul"}
            penerbit={book.data.penerbit || "penerbit"}
            borrowed_by={book.data.borrowed_by || ""}
            deskripsi={book.data.deskripsi || "deskripsi"}
            imgUrl={book.data.imgUrl || "image"}
            last_time={book.data.last_time || null}
            pengarang={book.data.pengarang || "pengarang"}
            status={book.data.status || "status"}
            subtitle={book.data.subtitle || "subtitle"}
            tahun_terbit={book.data.tahun_terbit || 2003}
            href={`/userBook/${encodeURIComponent(book.data.judul_buku)}`}
          />
        ))}
      </div>
    </main>
  );
}
