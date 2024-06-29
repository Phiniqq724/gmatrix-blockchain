"use client";
import { FormButton, LinkButton } from "@/app/components/Button";
import SearchBars from "@/app/components/Searchbar";
import React, { useEffect, useState } from "react";
import UserData from "../../../../types/user";

export default function UserDatas() {
  //   const [selected, setSelected] = useState("All");
  //   const [searchInput, setSearchInput] = useState<string>("");
  //   const [filteredUser, setFilteredUser] = useState<UserData[]>();

  //   function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
  //     setSelected(e.target.value);
  //   }

  //   useEffect(() => {
  //     let filtered = user;

  //     if (selected !== "All") {
  //       filtered = filtered.filter((User: UserData) => User.status === selected);
  //     }

  //     if (searchInput) {
  //       filtered = filtered.filter((User) => User.name.toLowerCase().includes(searchInput.toLowerCase()) || User.username.toLowerCase().includes(searchInput.toLowerCase()) || User.email.toLowerCase().includes(searchInput.toLowerCase()));
  //     }

  //     setFilteredUser(filtered);
  //   }, [user, selected, searchInput]);

  //   const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchInput(e.target.value);
  //   };

  //   const userStatus = user.filter((User) => User.status === "Authenticate");

  return (
    <section className="max-w-screen-2xl h-full w-full">
      {/* <div className="w-full flex mt-12 gap-x-4">
        <div className="inset-2 flex max-w-sm w-full justify-between rounded-md bg-transparent p-3 shadow-sm border border-[#4340DA]">
          <div className="block">
            <p className="text-5xl font-medium tracking-wide text-gray-800 mb-1">{user.length}</p>
            <p className="text-base font-normal text-gray-800 mb-2">Users</p>
            <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">Total User</p>
          </div>
          <div className=" relative right-0 top-0"></div>
        </div>
        <div className="inset-2 flex max-w-sm w-full justify-between rounded-md bg-transparent p-3 shadow-sm border border-[#4340DA]">
          <div className="block">
            <p className="text-5xl font-medium tracking-wide text-gray-800 mb-1">{userStatus.length}</p>
            <p className="text-base font-normal text-gray-800 mb-2">Users</p>
            <p className="relative bottom-0 left-0 mt-10 font-inter text-xl font-semibold text-black">Authenticate User</p>
          </div>
          <div className=" relative right-0 top-0"></div>
        </div>
      </div>
      <div className=" mt-10 flex items-center justify-start">
        <SearchBars searchInput={searchInput} handleSearchInputChange={handleSearchInputChange} />
        <FormButton variant="blue">Search</FormButton>
      </div>
      <div id="filter" className="flex gap-x-4 justify-start">
        <select name="status" id="status" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Authenticate">Authenticate</option>
          <option value="Onauthenticate">Onauthenticate</option>
        </select>
      </div>
      <div className="w-full">
        <div className="relative rounded-lg border-2 border-white mt-4">
          <table className="w-full text-sm text-start rounded-lg text-gray-600 ">
            <thead className="text-sm text-left text-white rounded-lg bg-[#4340DA] ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.map((u, i) => (
                <tr key={i} className="odd:bg-cyan-100 even:bg-sky-100 text-left">
                  <th className="px-6 py-4 font-medium text-gray-900 ">{i + 1}</th>
                  <th className="px-6 py-4 font-medium text-gray-900 ">{u.name}</th>
                  <td className="px-6 py-4">{u.username}</td>
                  <td className="px-6 py-4">{u.email}</td>
                  <td className="px-6 py-4">{u.status}</td>
                  <td className="px-6 py-4 flex gap-x-4 justify-center">
                    <LinkButton href="#" variant="red">
                      Delete
                    </LinkButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </section>
  );
}
