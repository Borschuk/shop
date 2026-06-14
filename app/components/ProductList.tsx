import Link from "next/link";
import ProductCard from "./ProductCard";
import { createClient } from "../lib/server";

export default async function ProductList() {
  const supabase = await createClient();

  const { data: authData } = await supabase.auth.getUser();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-white text-center sm:text-2xl">
        You log in as - {authData?.user?.email}
      </h1>
      <div className="flex flex-wrap gap-4 px-4 py-2 sm:px-2 justify-center">
        {products?.length === 0 && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-white text-center">No products available.</p>
            <button className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
              <Link href="/add-product">Add Product</Link>
            </button>
          </div>
        )}
        {products?.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
}
