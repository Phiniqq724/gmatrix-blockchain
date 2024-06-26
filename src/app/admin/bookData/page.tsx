import React from "react";

interface BookDataProops {
  id: number;
  status: "Avalilable" | "Borrowed";
  pengarang: string;
  penerbit: string;
  tahun_terbit: number;
  jumlah_buku: number;
  deskripsi: string;
  cover: string;
  create_at: Date;
  update_at: Date;
}
export default function bookData() {
  return <></>;
}
