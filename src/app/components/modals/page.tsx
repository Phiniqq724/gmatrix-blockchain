import { mainBookDataProops } from "@/utils/data";

import { FormComp, GenderDropdown } from "../Form";
import { FormButton } from "../Button";

interface ModalProps extends mainBookDataProops {
  variants: "borrow" | "editbook" | "addbook" | "editprofile" | "detailbook";
}

export default function Modal({
  variants,
  penerbit,
  judul_buku,
  pengarang,
  tahun_terbit,
  deskripsi,
}: ModalProps) {
  const borrowVar = variants === "borrow";
  const editBookVar = variants === "editbook";
  const addBookVar = variants === "addbook";
  const editProfileVar = variants === "editprofile";
  const detailBookVar = variants === "detailbook";

  if (borrowVar) {
    return (
      <main className="w-[495px] h-auto flex bg-white rounded-xl">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mt-4 text-black">
            Borrow
          </h1>
          <FormComp
            label="Judul"
            type="text"
            variants="normal"
            value={judul_buku}
          />
          <FormComp
            label="Penerbit"
            type="text"
            variants="normal"
            value={penerbit}
          />
          <FormComp label="ISBN" type="text" variants="normal" />
          <FormComp label="Jumlah Buku" type="text" variants="normal" />
          <FormComp label="Lokasi" type="text" variants="normal" />
          <div className="w-full flex justify-between my-4">
            <FormButton variant="white">Cancel</FormButton>
            <FormButton variant="blue">Borrow</FormButton>
          </div>
        </div>
      </main>
    );
  } else if (editBookVar) {
    <main className="w-[495px] h-auto flex bg-white rounded-xl">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-center mt-4 text-black">
          Edit Book
        </h1>
        <FormComp
          label="Judul"
          type="text"
          variants="normal"
          value={judul_buku}
        />
        <FormComp
          label="Penerbit"
          type="text"
          variants="normal"
          value={penerbit}
        />
        <FormComp label="ISBN" type="text" variants="normal" />
        <FormComp label="Jumlah Buku" type="text" variants="normal" />
        <FormComp label="Lokasi" type="text" variants="normal" />
        <FormComp label="Cover" type="file" variants="normal" />
        <FormComp label="Deskripsi" type="text" variants="textarea" />
        <div className="w-full flex justify-between my-4">
          <FormButton variant="white">Cancel</FormButton>
          <FormButton variant="blue">Save</FormButton>
        </div>
      </div>
    </main>;
  } else if (addBookVar) {
    <main className="w-[495px] h-auto flex bg-white rounded-xl">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-center mt-4 text-black">
          Add Book
        </h1>
        <FormComp
          label="Judul"
          type="text"
          variants="normal"
          value={judul_buku}
        />
        <FormComp
          label="Penerbit"
          type="text"
          variants="normal"
          value={penerbit}
        />
        <FormComp label="ISBN" type="text" variants="normal" />
        <FormComp label="Jumlah Buku" type="text" variants="normal" />
        <FormComp label="Lokasi" type="text" variants="normal" />
        <FormComp label="Cover" type="file" variants="normal" />
        <FormComp label="Deskripsi" type="text" variants="textarea" />
        <div className="w-full flex justify-between my-4">
          <FormButton variant="white">Cancel</FormButton>
          <FormButton variant="blue">Add</FormButton>
        </div>
      </div>
    </main>;
  } else if (editProfileVar) {
    return (
      <main className="w-[495px] h-auto flex bg-white rounded-xl">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-center mt-4 text-black">
            Customize Your Profile
          </h1>
          <FormComp
            label="Username"
            type="text"
            variants="normal"
            placeholder="@"
          />
          <FormComp label="Full Name" type="text" variants="normal" />
          <FormComp label="Email" type="email" variants="normal" />
          <FormComp label="Birth Date" type="date" variants="normal" />
          <GenderDropdown label="Gender" />
          <FormComp label="NISN" type="text" variants="normal" />
          <FormComp
            label="Confirm Password"
            type="text"
            variants="normal"
            required
          />
          <div className="w-full flex justify-between my-4">
            <FormButton variant="white">Cancel</FormButton>
            <FormButton variant="blue">Add</FormButton>
          </div>
        </div>
      </main>
    );
  } else if (detailBookVar) {
  } else {
    // Default code if none of the variants match
  }
  return (
    <main className="w-[495px] h-auto flex bg-white rounded-xl">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold text-center mt-4 text-black">
          Details
        </h1>
        <FormComp label="Status" type="text" variants="normal" />
        <FormComp label="Time Remain" type="text" variants="normal" />
        <div className="w-full flex justify-center my-4">
          <FormButton variant="white">Close</FormButton>
        </div>
      </div>
    </main>
  );
}
