import { book } from "@/utils/data";
import React from "react";

interface FormProps {
  label: React.ReactNode;
  type: string;
  variants: "normal" | "textarea";
  placeholder?: string;
  value?: string | number | any;
  title?: string;
  required?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

interface DropdownProps {
  label: React.ReactNode;
  title?: string;
  className?: string;
  value?: string | number | any;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function FormComp({ label, type, variants, placeholder, value, title, required, className, onChange, readOnly }: FormProps) {
  const inputVar = variants === "normal";
  const textVar = variants === "textarea";
  if (inputVar) {
    return (
      <main className="flex flex-col gap-[10px] my-4">
        <span>{label}</span>
        <input
          type={type}
          title={title}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
          required={required}
          readOnly={readOnly}
        />
      </main>
    );
  } else if (textVar) {
    return (
      <main className="flex flex-col gap-[10px] my-4">
        <span>{label}</span>
        <textarea
          title={title}
          required={required}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
        />
      </main>
    );
  }
}

export function GenderDropdown({ label, title, className, onChange }: DropdownProps) {
  return (
    <main className="flex flex-col gap-[10px] my-4">
      <span>{label}</span>
      <select
        title={title}
        onChange={onChange}
        className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
      >
        <option value=""></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </main>
  );
}
export function StatusDropdown({ label, title, className, onChange, value }: DropdownProps) {
  return (
    <main className="flex flex-col gap-[10px] my-4">
      <span>{label}</span>
      <select
        title={title}
        onChange={onChange}
        className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
      >
        <option value=""></option>
        <option value="Available">Available</option>
        <option value="Borrowed">Borrowed</option>
      </select>
    </main>
  );
}
