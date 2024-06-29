import React from "react";
import { Modal } from "../../../../components/BookModal";

export default function addBooks() {
  return (
    <div className="w-screen h-screen bg-slate-700/40 overflow-scroll py-10">
      <div className="max-w-lg mx-auto">
        <Modal />
      </div>
    </div>
  );
}
