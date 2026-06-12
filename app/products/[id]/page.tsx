import type { Product } from "@/app/lib/types";
import { createClient } from "@/app/lib/server";
import ActionButtons from "@/app/components/ActionButtons";
import Image from "next/image";
import productImage from "../../product.png";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return (
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Product Load Error</h1>
        <p className="text-red-600">{error.message}</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p>Could not find product with id: {id}</p>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <h1 className="text-2xl font-bold text-center mt-4">Product Details</h1>
      <div className="border p-4 mt-8 pr-8 relative">
        <div className="flex gap-4 justify-end absolute top-4 right-4">
          <ActionButtons productId={product.id} />
        </div>

        <div>
          <Image
            src={productImage}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className="font-semibold">
          Product Name: {product.product_name}
        </div>
        <div className="mt-2">
          Product Price:{" "}
          <span className="font-bold text-red-400">
            ${product.product_price}
          </span>
        </div>
        <div className="mt-4 space-y-2">
          <div>Product Description: {product.product_description}</div>
          <div>Country: {product.product_country}</div>
          <div>Size: {product.product_size}</div>
          <div>Color: {product.product_color}</div>
          <div>Phone: {product.phone}</div>
        </div>
      </div>
    </main>
  );
}
