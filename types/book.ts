import type { Doc } from "@junobuild/core-peer";

export interface BookData {
  judul_buku: string;
  penerbit: string;
  cover: string;
  status: "Available" | "Borrowed";
  imgUrl: string[];
  pengarang: string;
  subtitle: string;
  borrowed_by: string;
  tahun_terbit: number;
  deskripsi: string;
  last_time: Date;
}
export type Book = Doc<BookData>;
