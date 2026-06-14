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
      <main className="flex-1 px-4 py-4 sm:p-8">
        <h1 className="text-xl font-bold mb-4 sm:text-2xl">
          Product Load Error
        </h1>
        <p className="text-red-600">{error.message}</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex-1 px-4 py-4 sm:p-8">
        <h1 className="text-xl font-bold mb-4 sm:text-2xl">
          Product Not Found
        </h1>
        <p>Could not find product with id: {id}</p>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <h1 className="text-xl font-bold text-center mt-4 sm:text-2xl">
        Product Details
      </h1>
      <div className="border p-4 mt-4 sm:mt-8 mx-4 sm:mx-0 sm:pr-8 relative">
        <div className="flex gap-2 justify-end sm:gap-4 sm:justify-end sm:absolute sm:top-4 sm:right-4 mb-4 sm:mb-0">
          <ActionButtons productId={product.id} />
        </div>

        <div className="flex justify-center sm:block">
          <Image
            src={productImage}
            width={120}
            height={120}
            alt="Picture of the author"
            className="w-30 h-30 sm:w-37.5 sm:h-37.5"
          />
        </div>
        <div className="font-semibold mt-4 sm:mt-0">
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
