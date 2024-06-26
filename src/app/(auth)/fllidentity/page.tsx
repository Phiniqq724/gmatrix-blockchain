import { FormButton } from "@/app/components/Button";
import TextInput from "@/app/components/InputText";
import React from "react";

export default function userFillIdentity() {
  const handleSubmit = () => {};

  return (
    <section className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="w-full mx-auto bg-white rounded-xl shadow dark:border md:mt-0 max-w-xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl text-center">
            Before Starting
          </h1>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl text-center">
            Let's Complete Your Data
          </h2>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block mb-2 text-base font-medium text-black">
                Full name
              </label>
              <TextInput type="text" name="fullname" id="fullname" placeholder="Full name"  required />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-base font-medium text-black">
                Username
              </label>
              <TextInput type="text" name="username" id="username" placeholder="Username"  required />
            </div>
            <div>
              <label htmlFor="nik" className="block mb-2 text-base font-medium text-black">
                NIK
              </label>
              <TextInput type="text" name="nik" id="nik" placeholder="NIK" required />
            </div>
            <div>
              <label htmlFor="birth" className="block mb-2 text-base font-medium text-black">
                Birth
              </label>
              <TextInput type="text" name="birth" id="birth" placeholder="Birth" required />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-base font-medium text-black">
                Address
              </label>
              <TextInput type="text" name="address" id="address" placeholder="Address" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-base font-medium text-black">
                Email
              </label>
              <TextInput type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <FormButton type="submit" className="w-full" variant="blue">
              Continue
            </FormButton>
          </form>
        </div>
      </div>
    </section>
  );
}
