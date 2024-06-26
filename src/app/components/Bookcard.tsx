import { BookDataProps, mainBookDataProops } from "@/utils/data";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export interface BookCardProops extends mainBookDataProops {
  className?: string;
  href?: string;
}

export default function BookCard({
  cover,
  judul_buku,
  penerbit,
  className,
  href,
}: BookCardProops) {
  return (
    <main className={className}>
      <Link href={`${href}`}>
        <div className="block overflow-hidden rounded-xl ">
          <Image
            src={cover}
            width={172}
            height={196}
            alt="image"
            className="hover:ring-4 object-cover transition-all duration-200 hover:scale-110 hover:ring-gray-300 rounded-xl"
          />
        </div>
      </Link>
      <div className="font-semibold text-blue-400 text-center text-xl">
        {judul_buku}
      </div>
      <div className="text-center text-lg">{penerbit}</div>
    </main>
  );
}
