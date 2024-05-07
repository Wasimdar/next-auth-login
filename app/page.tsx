import { auth } from "@/auth/auth";
import AuthButtonServer from "./AuthButton";

export default async function Page() {
  const session = await auth();
  console.log("session", session);
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{session?.user?.name}</h1>
      <h2 className="text-lg text-gray-600 mb-4">{session?.user?.email}</h2>
      <img
        className="rounded-full w-32 h-32 object-cover mb-4"
        src={session?.user?.image}
        alt={session?.user?.name}
      />

      <AuthButtonServer />
    </main>
  );
}
