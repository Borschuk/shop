"use client";

import { deleteProduct } from "@/actions/products";
import { useActionState, useState } from "react";
import EditPopup from "./EditPopup";

const initialState = {
  error: "",
};

export default function ActionButtons({ productId }: { productId: string }) {
  const [state, formAction] = useActionState(deleteProduct, initialState);
  const [edit, setEdit] = useState(false);

  function toggleEditForm() {
    setEdit((prev) => !prev);
  }

  return (
    <div className="font-semibold flex gap-4">
      <form action={formAction}>
        <input type="hidden" name="id" value={productId} />
        <button
          type="submit"
          className="cursor-pointer bg-red-400 text-white p-2 rounded hover:bg-red-500"
        >
          Remove
        </button>

        {(state as any)?.error && (
          <div className="text-red-600 text-sm mt-2">
            {(state as any).error}
          </div>
        )}
      </form>
      <button
        type="button"
        onClick={toggleEditForm}
        className="cursor-pointer bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
      >
        Edit
      </button>
      <EditPopup open={edit} onOpenChange={setEdit} productId={productId} />
    </div>
  );
}
