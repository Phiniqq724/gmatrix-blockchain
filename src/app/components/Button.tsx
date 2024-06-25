import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  variant?: "blue" | "white";
  withArrow?: boolean;
  children?: ReactNode;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({ className, variant, children, href }: LinkButtonProps) {
  const blueButton = variant === "blue";

  if (blueButton) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-1 rounded-[8px] border-2 border-[#4340DA] bg-[#4340DA] px-7 py-4 text-white transition duration-300 font-medium hover:bg-white hover:text-[#4340DA] sm:py-2 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`group inline-flex items-center gap-1 rounded-[8px] hover:border-2 border-2 border-white hover:border-[#4340DA] bg-white px-7 py-4 text-[#4340DA] font-medium transition duration-300 sm:py-2 ${className}`}>
      {children}
    </Link>
  );
}

interface FormButtonProps extends ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function FormButton({ className, variant, children, type, disabled, onClick }: FormButtonProps) {
  const blueButton = variant === "blue";

  if (blueButton) {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`group inline-flex items-center gap-1 rounded-[8px] border-2 border-[#4340DA] bg-[#4340DA] px-7 py-4 text-white transition duration-300 font-medium hover:bg-white hover:text-[#4340DA] sm:py-2 ${className}`}
        disabled={disabled}
      >
        <p className="mx-auto">{children}</p>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`group inline-flex items-center gap-1 rounded-[8px] hover:border-2 border-2 border-white hover:border-[#4340DA] bg-white px-7 py-4 text-[#4340DA] font-medium transition duration-300 sm:py-2 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
