"use client";

import { createProduct } from "@/actions/products";
import { useRef, useEffect, useActionState } from "react";

const initialState = {
  error: "",
};

export default function page() {
  const [state, formAction] = useActionState(createProduct, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <main className="flex-1">
      <h1 className="text-2xl font-bold text-center mt-4">Add Product</h1>
      <div className="border p-4 mt-8">
        <form ref={formRef} action={formAction} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 rounded"
            name="name"
          />
          <input
            type="text"
            placeholder="Product Price"
            className="border p-2 rounded"
            name="price"
          />
          <input
            type="text"
            placeholder="Product Description"
            className="border p-2 rounded"
            name="description"
          />
          <input
            type="text"
            placeholder="Country"
            className="border p-2 rounded"
            name="country"
          />
          <input
            type="text"
            placeholder="Size"
            className="border p-2 rounded"
            name="size"
          />
          <input
            type="text"
            placeholder="Color"
            className="border p-2 rounded"
            name="color"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-2 rounded"
            name="phone"
          />
          <button
            type="submit"
            className="cursor-pointer bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Add Product
          </button>
          {state?.error && (
            <div className="text-red-600 text-sm mt-2">{state.error}</div>
          )}
        </form>
      </div>
    </main>
  );
}
