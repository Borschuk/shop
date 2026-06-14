import { createClient } from "@/app/lib/server";
import ProductList from "@/app/components/ProductList";
import Link from "next/link";

export default async function page() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return (
      <main className="flex-1 px-4 sm:px-0">
        <div className="mt-8 text-center">
          <h1 className="text-xl font-bold mb-4 sm:text-2xl">
            Please Login first
          </h1>
          <Link href="/login" className="hover:underline">
            <button className="mt-8 cursor-pointer bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
              Login
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <div className="mt-8 px-4 sm:px-0">
        <ProductList />
      </div>
    </main>
  );
}
