import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactElement } from "react";

interface BookCardProops {
  src?:
    | StaticImageData
    | undefined
    | string
    | StaticImport
    | ReactElement
    | any;
  title?: string;
  author?: string;
  className?: string;
}

export default function BookCard({
  src,
  title,
  author,
  className,
}: BookCardProops) {
  return (
    <main className={className}>
      <div>
        <Image src={src} alt="image" className="rounded-lg w-[200px]" />
      </div>
      <div className="font-semibold text-blue-400 text-center text-xl">
        {title}
      </div>
      <div className="text-center text-lg">{author}</div>
    </main>
  );
}
