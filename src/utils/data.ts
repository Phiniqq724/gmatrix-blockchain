"use client";
import { getDoc, listDocs } from "@junobuild/core-peer";
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

export const GetBook = async (key : string) => {
  try {
    const bookData = await getDoc({
      collection: "Buku",
      key: key
    });
    return bookData;
  } catch (error) {
    console.error("Error fetching books:", error);
    return;
  }
};
