"use client";

import { useRouter } from "next/navigation";

export default function AuthAdmin() {
  const is_authenticated: Boolean = Boolean(
    localStorage.getItem("is_authenticated")
  );
  const { push } = useRouter();

  if (!is_authenticated) {
    push("/login");
  }

  return (
    <main className="w-full min-h-screen bg-zinc-900 text-zinc-100 antialiased">
      <h1>bem vindo</h1>
    </main>
  );
}
