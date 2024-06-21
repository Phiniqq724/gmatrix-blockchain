"use client";
import { useState } from "react";
// import { makeAzleActor } from "../service/actor";
// import { _SERVICE as AZLE } from "@/config/declarations/dfx_generated/azle.did";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/frontend");
  const [message, setMessage] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const azle: AZLE = await makeAzleActor();
      const getRandomNumber = await azle.randomNumber();
      console.log("getRandomNumber ", getRandomNumber);
      setMessage(getRandomNumber);
      setLoading(false);
    } catch (error) {
      setMessage(error as unknown as any);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="italic mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">NextJS + Azle Canister Template</h1>
        <br />
        <br />
        <div className="flex items-center justify-center">
          <button
            disabled={isLoading}
            type="button"
            onClick={handleSubmit}
            className="bg-purple-600 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Random Number
          </button>
        </div>
        <div className="flex items-center justify-center mt-10 text-2xl text-white">{message}</div>
      </div>
    </>
  );
}
