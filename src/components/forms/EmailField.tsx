"use client";

import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import Error from "./Error";

type EmailFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, string>>;
};

export default function EmailField({
  label = "Email address",
  placeholder = "Enter your email",
  name = "email",
  error,
  register,
}: EmailFieldProps) {
  
  return (
    <div className="">
      <Label htmlFor="email"  className="my-2 text-app-label font-semibold">{label}</Label>
      <Input
        type="email"
        placeholder={placeholder}
        {...(register ? register(name) : {})}
        // {...props}
      />
      {error && <Error message={error} />}
    </div>
  );
}
