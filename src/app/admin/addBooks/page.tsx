import Modal from "@/app/components/modals/page";
import React from "react";

export default function addBooks() {
  return (
    <div className="w-screen h-screen bg-slate-700/40 overflow-scroll py-10">
      <div className="max-w-lg mx-auto">
        <Modal variants="addbook" />
      </div>
    </div>
  );
}
