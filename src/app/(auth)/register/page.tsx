import { FormButton } from "@/app/components/Button";
import TextInput from "@/app/components/InputText";
import Link from "next/link";
import React from "react";

export default function userRegister() {
  const handlleSubmit = () => {};

  return (
    <section className="flex justify-center items-center h-screen w-full">
      <div className="w-full mx-auto bg-white rounded-xl shadow dark:border md:mt-0 max-w-xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">Create New Account</h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="fullname" className="block mb-2 text-base font-medium text-black">
                Fullname
              </label>
              <TextInput type="text" name="fullname" id="email" placeholder="Fullname" required />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-base font-medium text-black">
                Username
              </label>
              <TextInput type="text" name="username" id="username" placeholder="Username" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-base font-medium text-black">
                Email
              </label>
              <TextInput type="email" name="email" id="email" placeholder="Username" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-base font-medium text-black">
                Password
              </label>
              <TextInput type="password" name="password" id="password" placeholder="••••••••" required />
            </div>

            <FormButton type="submit" className="w-full" variant="blue">
              Register
            </FormButton>

            <p className="text-sm font-light text-black">
              Already have account{" "}
              <Link href="/signin" className="font-medium text-blue-500 hover:underline ">
                Sign In Here!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
