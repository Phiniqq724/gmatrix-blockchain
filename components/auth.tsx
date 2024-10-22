"use client"
import { authSubscribe, type User } from "@junobuild/core-peer";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { Login } from "./login";
import { Logout } from "./logout";

export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

interface AuthProps {
  children?: ReactNode;
}

export const Auth = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | undefined | null>(undefined);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));
    

    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {user !== undefined && user !== null ? (
        <div className="flex ">
          <Logout />
          {children}
        </div>
      ) : (
        <Login />
      )}
    </AuthContext.Provider>
  );
};
