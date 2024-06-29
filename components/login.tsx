"use client";
import { signIn } from "@junobuild/core-peer";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const Login = () => {
  const router = useRouter();
  return <Button onClick={() => router.push("/signin")}>Sign in</Button>;
};
