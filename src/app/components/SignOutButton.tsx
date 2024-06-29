"use client"
import { FormButton } from "./Button";
import { signOut } from "@junobuild/core-peer";

const SignOutButton = () => {
  return (
    <FormButton type="button" onClick={signOut} className="px-6 py-2 absolute top-6 right-6" variant="blue">
      Sign Out
    </FormButton>
  );
};

export default SignOutButton;