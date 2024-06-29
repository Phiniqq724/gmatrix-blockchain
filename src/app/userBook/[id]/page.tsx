// "use client";

// import React, { useState, ChangeEvent, useEffect } from "react";
// import Image from "next/image";
// import BookHeader from "@/../public/images/book1-banner.png";
// import SearchBars from "@/../src/app/components/Searchbar";
// import { FormButton, LinkButton } from "@/app/components/Button";
// import { book } from "@/utils/data";
// import { BookData } from "../../../../types/book";
// import { getDoc } from "@junobuild/core-peer";

// const UserBook = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [bookData, setBookData] = useState<BookData | null>(null);

//   const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(e.target.value);
//   };
//   const getData = async (slug: string) => {
//     try {
//       const data = await getDoc<BookData>({
//         collection: "Buku",
//         key: slug,
//       });
//     } catch (error) {
//       console.log((error as Error).message);
//     }
//   };
//   useEffect(() => {

//     if(book.)

//   }, []);

//   return (
//     <div className="flex w-full max-w-7xl flex-col mx-auto">
//       <div className="items-center flex ">
//         <SearchBars searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} />
//         <FormButton variant="blue">Search</FormButton>
//       </div>

//       <div className="relative w-full flex items-center">
//         <Image src={bookData?.cover} alt="Header" width={400} className="object-cover mr-10" />
//         <div>
//           <div className="text-black space-y-2">
//             <h1 className="text-6xl font-semibold">{bookData?.judul_buku}</h1>
//             <h2 className="text-4xl">{bookData?.subtitle}</h2>
//             <p className="text-base">
//               <span className="font-normal">
//                 <i>{bookData?.deskripsi}</i>
//               </span>
//             </p>
//             <div className="pt-6">
//               <p className="font-medium text-base">
//                 Pengarang : <span className="font-normal">{bookData?.pengarang}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Penerbit : <span className="font-normal">{bookData?.penerbit}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Tahun Terbit : <span className="font-normal">{bookData?.tahun_terbit}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Status : <span className="font-normal">{bookData?.status}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Dipinjam Oleh : <span className="font-normal">{bookData?.borrowed_by}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Waktu Buku kembali : <span className="font-normal">{bookData?.time_remain.toLocaleDateString()}</span>
//               </p>
//               <p className="font-medium text-base">
//                 Dibuat Pada : <span className="font-normal">{bookData?.create_at.toLocaleDateString()}</span>
//               </p>
//             </div>
//           </div>
//           <div className="space-x-2 my-6">
//             <FormButton variant="blue">Add to Favorite</FormButton>
//             <FormButton variant="blue">Borrow</FormButton>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 pr-5 text-sm font-medium space-y-4 text-gray-700 text-justify">
//         <LinkButton href="/userDashboard" variant="blue">
//           Back to Dashboard
//         </LinkButton>
//       </div>
//     </div>
//   );
// };

// export default UserBook;
