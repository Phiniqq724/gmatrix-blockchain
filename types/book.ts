import type {Doc} from '@junobuild/core-peer';

export default interface BookData {
  status: "Available" | "Borrowed";
  imgUrl: string;
  pengarang: string;
  subtitle: string;
  borrowed_by: string;
  tahun_terbit: number;
  deskripsi: string;
  last_time: Date;
}

export interface BookCoverData {
    judul_buku: string;
    penerbit: string;
    cover: string;
}

export type Book = Doc<Book>;
export type BookCover = Doc<BookCoverData>;
