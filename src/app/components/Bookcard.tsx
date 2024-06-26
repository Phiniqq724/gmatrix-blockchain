import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export interface BookCardProops {
  src?: StaticImageData | undefined | string | StaticImport | ReactElement | any;
  title: string;
  penerbit?: string;
  className?: string;
  href?: string;
}

export default function BookCard({ src, title, penerbit, className, href }: BookCardProops) {
  return (
    <main className={className}>
      <Link href={`${href}`}>
        <div className="block overflow-hidden rounded-xl ">
          <Image src={src} alt="image" className="hover:ring-4 object-cover transition-all duration-200 hover:scale-110 hover:ring-gray-300 rounded-xl" />
        </div>
      </Link>
      <div className="font-semibold text-blue-400 text-center text-xl">{title}</div>
      <div className="text-center text-lg">{penerbit}</div>
    </main>
  );
}
