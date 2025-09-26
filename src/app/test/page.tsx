"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// 1️⃣ Zod schema
const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/\d/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof passwordSchema>;

export default function PasswordForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(passwordSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    reset();
  };


  const renderInput = (label: string, name: keyof FormValues) => (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          {...register(name)}
          type="password"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors[name]
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-blue-400"
          }`}
          placeholder={label}
        />
      </div>
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-2xl">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {renderInput("Current Password", "currentPassword")}
        {renderInput("New Password", "newPassword")}
        {renderInput("Confirm Password", "confirmPassword")}
        <button>Submit</button>
      </form>
    </div>
  );
}
