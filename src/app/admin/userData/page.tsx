import { LinkButton } from "@/app/components/Button";
import React from "react";

export default function userData() {
  return (
    <section className="ml-80 max-w-screen-2xl h-full w-full ">
      <div id="filter" className="flex gap-x-4 justify-start">
        <select name="status" id="status">
          <option value=""></option>
        </select>
      </div>
      <div className="w-full">
        <div className="relative overflow-x-auto sm:rounded-lg border-2 border-white mt-10">
          <table className="w-full text-sm text-center text-gray-600 ">
            <thead className="text-sm text-white bg-[#4340DA] ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Book Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-cyan-100 even:bg-sky-100 ">
                <th className="px-6 py-4 font-medium text-gray-900 ">Apple MacBook Pro 17</th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 flex gap-x-4 justify-center">
                  <LinkButton href="#" variant="blue">
                    View
                  </LinkButton>
                  <LinkButton href="#" variant="red">
                    Delete
                  </LinkButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
