import React, { HTMLInputTypeAttribute } from "react";

interface InputProops {
  type: HTMLInputTypeAttribute | undefined;
  name: string;
  id: string;
  className?: string;
  placeholder: string;
  required: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({ className, id, name, placeholder, required, type, onChange }: InputProops) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
      required={required}
    />
  );
}
