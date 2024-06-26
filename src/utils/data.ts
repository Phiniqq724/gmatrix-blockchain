import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import Suicidesquad from "@/../public/assets/suicidesquad.png";
import titans from "@/../public/assets/titans.png";
import harleyquinn from "@/../public/assets/harleyquinn.png";
import Atomichabits from "@/../public/assets/AtomicHabits.jpg";
import bookofbill from "@/../public/assets/bookofbill.jpg";
import jujutsukaisen from "@/../public/assets/JujutsuKaisen.jpg";
import onepiece from "@/../public/assets/onepiece.jpg";
import youarehere from "@/../public/assets/youarehere.jpg";
import BatmanImage from "@/../public/assets/batman.png";
import Flashimage from "@/../public/assets/flash.png";

export interface mainBookDataProops {
  judul_buku: string;
  penerbit: string;
  cover: StaticImageData | undefined | string | StaticImport | ReactElement | any;
}

export interface BookDataProps extends mainBookDataProops {
  id: number;
  status: "Available" | "Borrowed";
  pengarang: string;
  tahun_terbit: number;
  deskripsi: string;
  imgUrl: StaticImageData | undefined | string | StaticImport | ReactElement | any;
  borrowed_by: string;
  time_remain: Date;
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
    cover: Suicidesquad,
    imgUrl: Suicidesquad,
    borrowed_by: "Muhammad Zuhair Zuhdi",
    time_remain: new Date("2024-07-15T12:17:00"),
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
    cover: Suicidesquad,
    imgUrl: Suicidesquad,
    borrowed_by: "Naufal Nabil R",
    time_remain: new Date("2024-08-16T07:30:00"),
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
    cover: titans,
    imgUrl: titans,
    borrowed_by: "Haza Nasrullah",
    time_remain: new Date("2024-07-28T09:56:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 1,
    judul_buku: "Suicide Squad",
    status: "Available",
    pengarang: "Suicide Squad",
    penerbit: "Suicide Squad",
    tahun_terbit: 2016,
    deskripsi: "Suicide Squad menceritakan sekelompok penjahat super yang dipaksa bekerja sama untuk menyelamatkan dunia dari ancaman besar, dengan imbalan pengurangan hukuman penjara mereka.",
    cover: Suicidesquad,
    imgUrl: Suicidesquad,
    borrowed_by: "",
    time_remain: new Date("2024-07-15T12:17:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 2,
    judul_buku: "Flash",
    status: "Available",
    pengarang: "Flash",
    penerbit: "Flash",
    tahun_terbit: 2014,
    deskripsi: "Flash mengikuti kisah Barry Allen, seorang penyelidik forensik yang mendapatkan kekuatan kecepatan super setelah kecelakaan laboratorium dan menjadi pahlawan super yang dikenal sebagai Flash.",
    cover: Flashimage,
    imgUrl: Flashimage,
    borrowed_by: "",
    time_remain: new Date("2024-08-16T07:30:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 3,
    judul_buku: "Titans",
    status: "Available",
    pengarang: "Titans",
    penerbit: "Titans",
    tahun_terbit: 2018,
    deskripsi: "Titans menceritakan tentang sekelompok pahlawan muda yang dipimpin oleh Nightwing (Dick Grayson) yang bekerja sama untuk melawan kejahatan dan mengatasi berbagai ancaman yang datang.",
    cover: titans,
    imgUrl: titans,
    borrowed_by: "",
    time_remain: new Date("2024-07-20T10:45:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 4,
    judul_buku: "Harley Quinn",
    status: "Available",
    pengarang: "Harley Quinn",
    penerbit: "Harley Quinn",
    tahun_terbit: 2013,
    deskripsi: "Harley Quinn adalah mantan psikiater yang jatuh cinta pada Joker dan menjadi penjahat yang eksentrik dan berbahaya dengan kepribadian yang unik dan gaya hidup yang penuh petualangan.",
    cover: harleyquinn,
    imgUrl: harleyquinn,
    borrowed_by: "",
    time_remain: new Date("2024-07-30T08:30:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 5,
    judul_buku: "One Piece",
    status: "Available",
    pengarang: "Eiichiro Oda",
    penerbit: "Shueisha",
    tahun_terbit: 1997,
    deskripsi: "One Piece mengikuti petualangan Monkey D. Luffy dan kru bajak lautnya dalam pencarian mereka untuk menemukan harta karun legendaris yang dikenal sebagai 'One Piece' dan menjadi Raja Bajak Laut.",
    cover: onepiece,
    imgUrl: onepiece,
    borrowed_by: "",
    time_remain: new Date("2024-09-01T12:00:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 6,
    judul_buku: "Jujutsu Kaisen Vol 1",
    status: "Available",
    pengarang: "Gege Akutami",
    penerbit: "Shueisha",
    tahun_terbit: 2018,
    deskripsi: "Jujutsu Kaisen Vol 1 memperkenalkan Yuji Itadori, seorang siswa sekolah menengah yang terlibat dalam dunia kutukan dan menjadi anggota Jujutsu Sorcerers untuk melawan roh jahat.",
    cover: jujutsukaisen,
    imgUrl: jujutsukaisen,
    borrowed_by: "",
    time_remain: new Date("2024-08-05T14:20:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 7,
    judul_buku: "Atomic Habits",
    status: "Available",
    pengarang: "James Clear",
    penerbit: "Avery",
    tahun_terbit: 2018,
    deskripsi: "Atomic Habits adalah panduan praktis yang menunjukkan bagaimana perubahan kecil dalam kebiasaan sehari-hari dapat menghasilkan perbaikan besar dalam kehidupan pribadi dan profesional.",
    cover: Atomichabits,
    imgUrl: Atomichabits,
    borrowed_by: "",
    time_remain: new Date("2024-08-12T15:50:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 8,
    judul_buku: "Book Of Bill",
    status: "Available",
    pengarang: "Alex Hirsch",
    penerbit: "Disney Press",
    tahun_terbit: 2018,
    deskripsi: "Book of Bill adalah buku dari serial animasi Gravity Falls, yang berisi berbagai rahasia, petunjuk, dan cerita tentang karakter dan kejadian di kota Gravity Falls.",
    cover: bookofbill,
    imgUrl: bookofbill,
    borrowed_by: "",
    time_remain: new Date("2024-08-25T09:45:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
  {
    id: 9,
    judul_buku: "You are Here",
    status: "Available",
    pengarang: "David Nicholls",
    penerbit: "David Nicholls",
    tahun_terbit: 2014,
    deskripsi: "You are Here adalah novel yang menceritakan kisah perjalanan dan pencarian diri seorang pria yang mencoba memahami tempatnya di dunia dan menemukan makna hidup.",
    cover: youarehere,
    imgUrl: youarehere,
    borrowed_by: "",
    time_remain: new Date("2024-09-10T11:15:00"),
    create_at: new Date(),
    update_at: new Date(),
  },
];
