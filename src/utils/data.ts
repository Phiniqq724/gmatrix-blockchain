"use client";
import { listDocs } from "@junobuild/core-peer";
import { Book } from "../../types/book";

export const GetAllBooks = async () => {
  try {
    const bookData = await listDocs<Book>({ collection: "Buku" });
    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const GetBook = async () => {
  try {
    const bookData = await listDocs<Book>({ collection: "Buku" });
    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    return;
  }
};
