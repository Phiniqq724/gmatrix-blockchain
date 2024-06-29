"use client";
import { User, authSubscribe, initSatellite } from "@junobuild/core-peer";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../../components/auth";
import { useRouter } from "next/navigation";
import SignInButton from '../app/components/SignInButton';
import SignOutButton from '../app/components/SignOutButton';


interface AuthContextLayoutProps {
  signin: React.ReactNode;
  signout: React.ReactNode;
  children?: React.ReactNode;
}

export default function AuthContextLayout({
  signin,
  signout,
  children,
}: AuthContextLayoutProps) {
  const [user, setUser] = useState<User | undefined | null>(undefined);
  const router = useRouter();
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
      
    const sub = authSubscribe((user) => setUser(user));
    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <div>
        {user !== undefined && user !== null ? (
          <>
            <div>
              <div className="absolute top-6 right-6">
              {signout}
              </div>
              {children}
            </div>
          </>
        ) : (
          <div className="absolute top-6 right-6">{signin}</div>
        )}
      </div>
    </AuthContext.Provider>
  );
}
