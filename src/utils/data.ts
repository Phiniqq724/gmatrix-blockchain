import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export interface BookDataProps {
  id: number;
  judul_buku: string;
  status: "Available" | "Borrowed";
  pengarang: string;
  penerbit: string;
  tahun_terbit: number;
  deskripsi: string;
  cover: StaticImageData | undefined | string | StaticImport | ReactElement | any;
  imgUrl: StaticImageData | undefined | string | StaticImport | ReactElement | any;
  borrowed_by: string;
  time_remain: string;
  create_at: Date;
  update_at: Date;
}

export const book: BookDataProps[] = [
  {
    id: 1,
    judul_buku: "The Way Fyss",
    status: "Borrowed",
    pengarang: "Irawan Handrianto",
    penerbit: "Telkom University",
    tahun_terbit: 2021,
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.",
    cover: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    imgUrl: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    borrowed_by: "Muhammad Zuhair Zuhdi",
    time_remain: "2024-07-15T12:17:00",
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 2,
    judul_buku: "The Way Fyss",
    status: "Borrowed",
    pengarang: "Irawan Handrianto",
    penerbit: "Telkom University",
    tahun_terbit: 2021,
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.",
    cover: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    imgUrl: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    borrowed_by: "Naufal Nabil R",
    time_remain: "2024-08-16T07:30:00",
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 3,
    judul_buku: "The Warden",
    status: "Borrowed",
    pengarang: "John Doe",
    penerbit: "ABC Publisher",
    tahun_terbit: 2022,
    deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quidem.",
    cover: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    imgUrl: "https://images.unsplash.com/photo-1616911111011-888888888888?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    borrowed_by: "Haza Nasrullah",
    time_remain: "2024-07-28T09:56:00",
    create_at: new Date(),
    update_at: new Date(),
  },
];
