interface FormProps {
  label: React.ReactNode;
  type: string;
  variants: "normal" | "textarea";
  placeholder?: string;
  value?: string;
  title?: string;
  required?: boolean;
}

interface DropdownProps {
  label: React.ReactNode;
  title?: string;
}

export function FormComp({
  label,
  type,
  variants,
  placeholder,
  value,
  title,
  required,
}: FormProps) {
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
          className="w-[415px] h-10 px-4 border-none bg-gray-100 placeholder:text-gray-300 rounded-xl outline-none focus:ring-0 focus:border-none "
          required={required}
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
          value={value}
          placeholder={placeholder}
          className="w-[415px] h-20 p-4 border-none bg-gray-100 placeholder:text-gray-300 rounded-xl outline-none focus:ring-0 focus:border-none "
        />
      </main>
    );
  }
}

export function GenderDropdown({ label, title }: DropdownProps) {
  return (
    <main className="flex flex-col gap-[10px] my-4">
      <span>{label}</span>
      <select
        title={title}
        className="w-[415px] h-10 px-4 border-none bg-gray-100 placeholder:text-gray-300 rounded-xl outline-none focus:ring-0 focus:border-none "
      >
        <option value=""></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </main>
  );
}
