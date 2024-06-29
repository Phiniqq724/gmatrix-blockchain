"use client";
import { FormButton } from "@/app/components/Button";
import TextInput from "@/app/components/InputText";
import { authSubscribe, signIn, signOut, User } from "@junobuild/core-peer";
import Link from "next/link";
import React, { createContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../components/auth";

// export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

export default function UserSignin() {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  return (
    <section className="flex justify-center items-center h-screen w-full">
      <div className="w-full mx-auto bg-white rounded-xl shadow dark:border md:mt-0 max-w-xl xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6">
            <AuthContext.Provider value={{ user }}>
              {user !== undefined && user !== null ? (
                <div>
                  <FormButton type="button" onClick={signOut} className="w-full" variant="blue">
                    Sign Out
                  </FormButton>
                </div>
              ) : (
                <FormButton type="button" onClick={signIn} className="w-full" variant="blue">
                  Sign In
                </FormButton>
              )}
            </AuthContext.Provider>

            <p className="text-sm font-light text-black">
              Don{"'"}t have an account yet?{" "}
              <Link href="/register" className="font-medium text-blue-500 hover:underline ">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
