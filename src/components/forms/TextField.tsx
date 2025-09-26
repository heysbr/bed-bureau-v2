"use client";

import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { UseFormRegister } from "react-hook-form";
import Error from "./Error";

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, string>>;
};

export default function TextField({
  label = "Email address",
  placeholder = "Enter your email",
  required = false,
  name = "email",
  error,
  register,
}: TextFieldProps) {
  return (
      <div className="">
        <Label htmlFor="email" className="my-2 text-app-label font-semibold">
          {label}{required && <span className="text-red-500">*</span>}
        </Label>
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
