"use client";
import { useSession, signOut } from "next-auth/react";
import { signIn } from "@/auth/helpers";

export default function AuthButton() {
  const session = useSession();
  console.log("session", session);
  return session?.data?.user ? (
    <button
      onClick={async () => {
        await signOut();
      }}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  ) : (
    <button
      onClick={async () => {
        await signIn();
      }}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Sign In
    </button>
  );
}
