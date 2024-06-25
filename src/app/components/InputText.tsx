import { HTMLInputTypeAttribute } from "react";

interface InputProops {
  type: HTMLInputTypeAttribute | undefined;
  name: string;
  id: string;
  className?: string;
  placeholder: string;
  required: boolean;
}

export default function TextInput({ className, id, name, placeholder, required, type }: InputProops) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`bg-gray-50 border border-gray-600 focus:border-blue-600 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-primary-600 block w-full p-2.5  ${className}`}
      required={required}
    />
  );
}
