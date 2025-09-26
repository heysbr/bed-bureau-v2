"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const passwordSchema = z.object({ email: z.email("Invalid email") });

type FormSchema = z.infer<typeof passwordSchema>;

export default function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(passwordSchema),
    mode: "all",
  });

  return (
    <form onSubmit={handleSubmit(() => alert("Submitted"))}>
      <TextField
        {...register("email")}
        error={errors.email?.message}
        label="enter email address"
        placeholder="email dal do"
        required
      />
      <button>Submit</button>
    </form>
  );
}

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Error from "@/components/forms/Error";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export function TextField({
  label = "Email address",
  placeholder = "Enter your email",
  required = false,
  error,
  ...props
}: TextFieldProps) {
  return (
    <div className="">
      <Label htmlFor="email" className="my-2 text-app-label font-semibold">
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input placeholder={placeholder} {...props} />
      {error && <Error message={error} />}
    </div>
  );
}
