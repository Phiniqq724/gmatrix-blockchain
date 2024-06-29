import Modal from "@/app/components/modals/Modal";
import React from "react";

export default function DetailBook() {
  return (
    <div className="w-screen h-screen bg-slate-700/40 overflow-scroll py-10">
      <div className="max-w-lg mx-auto">
        <Modal variants="editbook" />
      </div>
    </div>
  );
}
