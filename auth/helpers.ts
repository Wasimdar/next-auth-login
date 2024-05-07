"use server";
import { signIn as naSignIn, signOut as naSignout } from "./auth";

export async function signIn() {
  await naSignIn();
}

export async function signOut() {
  await naSignout();
}
