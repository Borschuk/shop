"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/server";

export async function createProduct(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const country = formData.get("country") as string;
  const size = formData.get("size") as string;
  const color = formData.get("color") as string;
  const phone = formData.get("phone") as string;

  const { data: insertData, error } = await supabase.from("products").insert({
    product_name: name,
    product_price: price,
    product_description: description,
    product_country: country,
    product_size: size,
    product_color: color,
    phone,
    user_id: user.id,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { error: error.message };
  }

  revalidatePath("/products");
  return { success: true, product: insertData };
}

export async function deleteProduct(prevState: unknown, formData: FormData) {
  const supabase = await createClient();
  const id = formData.get("id") as string;
  if (!id) {
    return { error: "Missing product id" };
  }

  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Supabase delete error:", error);
    return { error: error.message };
  }

  revalidatePath("/products");
  redirect("/products");
}

export async function updateProduct(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Unauthorized" };
  }

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const country = formData.get("country") as string;
  const size = formData.get("size") as string;
  const color = formData.get("color") as string;
  const phone = formData.get("phone") as string;

  if (!id) {
    return { error: "Missing product id" };
  }

  const { error } = await supabase
    .from("products")
    .update({
      product_name: name,
      product_price: price,
      product_description: description,
      product_country: country,
      product_size: size,
      product_color: color,
      phone: phone,
    })
    .eq("id", id);

  if (error) {
    console.error("Supabase update error:", error);
    return { error: error.message };
  }

  revalidatePath("/products");
  return { success: true };
}
