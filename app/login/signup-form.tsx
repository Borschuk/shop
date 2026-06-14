"use client";

import { signUp } from "@/actions/auth";
import { useActionState } from "react";

const initialState = {
  error: "",
};

export function SignUpForm() {
  const [state, formAction] = useActionState(signUp, initialState);

  return (
    <main className="flex-1 px-4 sm:px-0">
      <h1 className="text-xl font-bold text-center mt-4 sm:text-2xl">
        Sign Up
      </h1>
      <div className="border p-4 mt-4 sm:mt-8 max-w-lg mx-auto">
        <form action={formAction} className="flex flex-col gap-4 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="cursor-pointer bg-teal-500 text-white p-2 rounded hover:bg-teal-600"
          >
            Sign Up
          </button>
          {state.error && <p className="text-red-500">{state.error}</p>}
        </form>
      </div>
    </main>
  );
}
