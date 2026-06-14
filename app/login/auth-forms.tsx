"use client";
import { LoginForm } from "./login-form";
import { SignUpForm } from "./signup-form";
import { useState } from "react";

export function AuthForms() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <main className="flex-1 px-4 sm:px-0">
      <div className="flex gap-2 items-center justify-center border-b max-w-xs sm:max-w-md mx-auto mt-8">
        <button
          onClick={() => setMode("signin")}
          className={`flex-1 pb-2 text-sm sm:text-base ${
            mode === "signin"
              ? "border-b-2 border-violet-500 font-medium"
              : "text-gray-500"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 pb-2 text-sm sm:text-base ${
            mode === "signup"
              ? "border-b-2 border-teal-500 font-medium"
              : "text-gray-500"
          }`}
        >
          Sign Up
        </button>
      </div>

      {mode === "signin" ? <LoginForm /> : <SignUpForm />}
    </main>
  );
}
