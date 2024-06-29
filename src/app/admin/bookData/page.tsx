"use client";
import { FormButton, LinkButton } from "@/app/components/Button";
import SearchBars from "@/app/components/Searchbar";
import { book, BookDataProps } from "@/utils/data";

import React, { useEffect, useState } from "react";
import { Modal } from "../../../../components/modal";

export default function BookData() {
  const [selected, setSelected] = useState("All");
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredBook, setFilteredBook] = useState<BookDataProps[]>([]);
  const [timeLeft, setTimeLeft] = useState<Record<number, { days: number; hours: number; minutes: number; seconds: number }>>({});

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    let filtered = book;

    if (selected !== "All") {
      filtered = filtered.filter((Book) => Book.status === selected);
    }

    if (searchInput) {
      filtered = filtered.filter((Book) => Book.judul_buku.toLowerCase().includes(searchInput.toLowerCase()));
    }

    setFilteredBook(filtered);
  }, [selected, searchInput]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const bookStatusAvailable = book.filter((Book) => Book.status === "Available");
  const bookStatusBorrowed = book.filter((Book) => Book.status === "Borrowed");

  const calculateTimeLeft = (targetDate: Date) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = Math.max(target.getTime() - now.getTime(), 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft: any = {};
      filteredBook.forEach((b: any) => {
        newTimeLeft[b.id] = calculateTimeLeft(b.time_remain);
      });
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, [filteredBook]);

  return (
    <section className="max-w-screen-2xl h-full w-full">
      <div className="mt-5">
        <Modal />
      </div>
      <div className="w-full flex mt-12 gap-x-4">
        <div className="inset-2 flex max-w-sm w-full justify-between rounded-md bg-transparent p-3 shadow-sm border border-[#4340DA]">
          <div className="block">
            <p className="text-5xl font-medium tracking-wide text-gray-800 mb-1">{book.length}</p>
            <p className="text-base font-normal text-gray-800 mb-2">Books</p>
            <p className=" bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">Total Books</p>
          </div>
          <div className=" right-0 top-0"></div>
        </div>
        <div className="inset-2 flex max-w-sm w-full justify-between rounded-md bg-transparent p-3 shadow-sm border border-[#4340DA]">
          <div className="block">
            <p className="text-5xl font-medium tracking-wide text-gray-800 mb-1">{bookStatusAvailable.length}</p>
            <p className="text-base font-normal text-gray-800 mb-2">Books</p>
            <p className=" bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">Available Book</p>
          </div>
          <div className=" right-0 top-0"></div>
        </div>
        <div className="inset-2 flex max-w-sm w-full justify-between rounded-md bg-transparent p-3 shadow-sm border border-[#4340DA]">
          <div className="block">
            <p className="text-5xl font-medium tracking-wide text-gray-800 mb-1">{bookStatusBorrowed.length}</p>
            <p className="text-base font-normal text-gray-800 mb-2">Books</p>
            <p className=" bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">Borrowed Book</p>
          </div>
          <div className=" right-0 top-0"></div>
        </div>
      </div>
      <div className="flex mt-10 items-center justify-between">
        <div className="flex items-center justify-start">
          <SearchBars searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} />
          <FormButton variant="blue">Search</FormButton>
        </div>
        <div></div>
      </div>
      <div id="filter" className="flex gap-x-4 justify-start">
        <select name="status" id="status" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Borrowed">Borrowed</option>
        </select>
      </div>
      <div className="w-full">
        <div className=" rounded-lg border-2 border-white mt-4">
          <table className="w-full text-sm text-start rounded-lg text-gray-600">
            <thead className="text-sm text-left text-white rounded-lg bg-[#4340DA]">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Judul Buku
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Dipinjam Oleh
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu Kembali
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu Dibuat
                </th>
                <th scope="col" className="px-6 py-3">
                  Waktu Diperbarui
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBook.map((b, i) => {
                const timeLeftForBook = timeLeft ? timeLeft[i] : timeLeft;
                return (
                  <tr key={i} className="odd:bg-cyan-100 even:bg-sky-100 text-left">
                    <th className="px-6 py-3">{i + 1}</th>
                    <td className="px-6 py-3">{b.judul_buku}</td>
                    <td className="px-6 py-3">{b.status}</td>
                    <td className="px-6 py-3">{b.borrowed_by}</td>
                    <td className="px-6 py-3 text-center">{timeLeftForBook ? `${timeLeftForBook?.days}d ${timeLeftForBook?.hours}h ${timeLeftForBook?.minutes}m ${timeLeftForBook?.seconds}s` : "Calculating..."}</td>
                    <td className="px-6 py-3">{b.create_at.toDateString()}</td>
                    <td className="px-6 py-3">{b.update_at.toDateString()}</td>
                    <td className="px-6 py-3 text-center flex gap-x-4 justify-center">
                      <LinkButton href={`bookData/book/${b.judul_buku}`} variant="blue">
                        View
                      </LinkButton>
                      <LinkButton href="#" variant="red">
                        Delete
                      </LinkButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
