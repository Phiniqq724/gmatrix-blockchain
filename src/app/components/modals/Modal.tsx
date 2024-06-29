"use client";
import { FormComp, GenderDropdown, StatusDropdown } from "../Form";
import { FormButton } from "../Button";
import { useRouter } from "next/navigation";

interface ModalProps {
  variants: "borrow" | "editbook" | "addbook" | "editprofile";
}

export default function Modal({ variants }: ModalProps) {
  const borrowVar = variants === "borrow";
  const editBookVar = variants === "editbook";
  const addBookVar = variants === "addbook";
  const editProfileVar = variants === "editprofile";

  const router = useRouter();

  if (borrowVar) {
    return (
      <main className="w-full px-20 py-8 h-auto bg-white rounded-xl">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mt-4 text-black">Borrow</h1>
          <FormComp label="Judul" type="text" variants="normal" readOnly />
          <FormComp label="Penerbit" type="text" variants="normal" readOnly />
          <FormComp label="ISBN" type="text" variants="normal" readOnly />
          <FormComp label="Jumlah Buku" type="text" variants="normal" readOnly />
          <FormComp label="Lokasi" type="text" variants="normal" readOnly />
          <FormComp label="Deskripsi" type="text" variants="textarea" readOnly />

          <div className="w-full flex justify-between my-4 gap-x-4">
            <FormButton onClick={() => router.back()} variant="white" className="w-full">
              Cancel
            </FormButton>
            <FormButton variant="blue" className="w-full">
              Borrow
            </FormButton>
          </div>
        </div>
      </main>
    );
  } else if (editBookVar) {
    // return (
    //   <main className="w-full px-20 py-8 h-auto bg-white rounded-xl">
    //     <div className="mx-auto">
    //       <h1 className="text-2xl font-bold text-center mt-4 text-black">Edit Book</h1>
    //       <FormComp label="Judul" type="text" variants="normal" value={BookData?.judul_buku} />
    //       <FormComp label="Pengarang" type="text" variants="normal" value={BookData?.pengarang} />
    //       <FormComp label="Penerbit" type="text" variants="normal" value={BookData?.penerbit} />
    //       <FormComp label="Tahun Terbit" type="text" variants="normal" value={BookData?.tahun_terbit} />
    //       <StatusDropdown label="Status" value={BookData?.status} />
    //       <FormComp label="Dipinjam Oleh" type="text" variants="normal" value={BookData?.borrowed_by} />
    //       <FormComp label="Waktu Pinjaman (Deadline)" type="Date" variants="normal" value={BookData?.penerbit} />
    //       {/* <FormComp label="Cover" type="file" variants="normal" value={BookData?.cover}  /> */}
    //       <FormComp label="Deskripsi" type="text" variants="textarea" value={BookData?.deskripsi} />
    //       <div className="w-full flex justify-between my-4 gap-x-4">
    //         <FormButton onClick={() => router.back()} variant="white" className="w-full">
    //           Cancel
    //         </FormButton>
    //         <FormButton variant="blue" className="w-full">
    //           Save
    //         </FormButton>
    //       </div>
    //     </div>
    //   </main>
    // );
  } else if (addBookVar) {
    return (
      <main className="w-full px-20 py-8 h-auto bg-white rounded-xl">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mt-4 text-black">Add Book</h1>
          <FormComp label="Judul" type="text" variants="normal" />
          <FormComp label="Pengarang" type="text" variants="normal" />
          <FormComp label="Penerbit" type="text" variants="normal" />
          <FormComp label="Tahun Terbit" type="text" variants="normal" />
          <StatusDropdown label="Status" />
          <FormComp label="Dipinjam Oleh" type="text" variants="normal" />
          <FormComp label="Waktu Pinjaman (Deadline)" type="Date" variants="normal" />
          <FormComp label="Cover" type="file" variants="normal" />
          <FormComp label="Deskripsi" type="text" variants="textarea" />
          <div className="w-full flex justify-between my-4 gap-x-4">
            <FormButton onClick={() => router.back()} variant="white" className="w-full">
              Cancel
            </FormButton>
            <FormButton variant="blue" className="w-full">
              Add
            </FormButton>
          </div>
        </div>
      </main>
    );
  } else if (editProfileVar) {
    return (
      <main className="w-full px-20 py-8 h-auto bg-white rounded-xl">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mt-4 text-black">Customize Your Profile</h1>
          <FormComp label="Username" type="text" variants="normal" placeholder="@" />
          <FormComp label="Full Name" type="text" variants="normal" />
          <FormComp label="Email" type="email" variants="normal" />
          <FormComp label="Birth Date" type="date" variants="normal" />
          <GenderDropdown label="Gender" />
          <FormComp label="NISN" type="text" variants="normal" />
          <FormComp label="Confirm Password" type="text" variants="normal" required />
          <div className="w-full flex justify-between my-4 gap-x-4">
            <FormButton onClick={() => router.back()} variant="white" className="w-full">
              Cancel
            </FormButton>
            <FormButton variant="blue" className="w-full">
              Add
            </FormButton>
          </div>
        </div>
      </main>
    );
  }
}
