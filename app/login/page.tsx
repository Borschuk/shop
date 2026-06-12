import { AuthForms } from "./auth-forms";
import { createClient } from "@/app/lib/server";

import { signOut } from "@/actions/auth";

export default async function Page() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return <AuthForms />;
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-6">
      <p className="text-gray-400">
        You are already logged in as{" "}
        <span className="text-white font-medium">{user.email}</span>
      </p>
      <form action={signOut}>
        <button
          type="submit"
          className="cursor-pointer bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600"
        >
          Log Out
        </button>
      </form>
    </main>
  );
}
