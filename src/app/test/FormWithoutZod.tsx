"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormSchema = {
  password: string;
};

export default function PasswordFormNoZod() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchema>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormSchema) => {
    console.log("Valid password submitted:", data.password);
    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Password Validation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]).{8,}$/,
                message:
                  "Must include lowercase, UPPERCASE, number & special char",
              },
            })}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 text-sm
              ${
                errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
          />

          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-sm"
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        {errors.password ? (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            Must include lowercase, UPPERCASE, number & special char, min 8
            chars.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
