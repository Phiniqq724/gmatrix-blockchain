"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchBars from "@/app/components/Searchbar";
import { FormButton, LinkButton } from "../components/Button";
import { Book, BookData } from "../../../types/book";
import BookCard from "../components/Bookcard"
import { listDocs } from "@junobuild/core-peer";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [Books, setItems] = useState<BookData[]>([]);

  const list = async () => {
    const { items } = await listDocs<Book>({
      collection: "Buku",
      filter: {},
    });

    setItems(items);
  };

  const filteredBooks = Books.filter((Book) => Book.judul_buku.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="w-full flex flex-col">
      <div className="mx-auto flex items-center">
        <SearchBars handleSearchInputChange={handleSearchInputChange} searchInput={searchTerm} />
        <FormButton variant="blue">Search</FormButton>
      </div>
      <div className="grid grid-cols-4 gap-[60px] mx-auto">
        {filteredBooks.map((book, index) => (
          <BookCard key={index} cover={book.cover} judul_buku={book.judul_buku} penerbit={book.penerbit} borrowed_by={book.borrowed_by} deskripsi={book.deskripsi} imgUrl={book.imgUrl} last_time={book.last_time} pengarang={book.pengarang} status={book.status} subtitle={book.subtitle} tahun_terbit={book.tahun_terbit}  href={`/userBook/${book.slug}`}    />
        ))}
      </div>
    </main>
  );
}
