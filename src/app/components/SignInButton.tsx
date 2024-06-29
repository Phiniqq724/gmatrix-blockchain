"use client"
import { FormButton } from "./Button";
import { signIn } from "@junobuild/core-peer";

const SignInButton = () => {
  return (
    <FormButton type="button" onClick={signIn} className="px-6 py-2 absolute top-6 right-6" variant="blue">
      Sign In
    </FormButton>
  );
};

export default SignInButton;