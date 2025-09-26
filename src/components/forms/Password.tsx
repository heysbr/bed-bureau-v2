"use client";

import EyeIcon from "@/assets/icons/toggle_password.svg";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ForgetPassword from "./ForgetPassword";
import { UseFormRegister } from "react-hook-form";
import { useState } from "react";
import Error from "./Error";
import Image from "next/image";

type EmailFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  forgetPassword?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, unknown>>;
};

export default function Password({
  label = "Password",
  placeholder = "Enter Password",
  required = false,
  forgetPassword = false,
  error,
  register,
  name = "password",
}: EmailFieldProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative">
      <Label htmlFor="email" className="my-2 text-app-label font-semibold">{label}{required && <span className="text-red-500">*</span>}</Label>
      <div className="m-0 p-0 relative">
        <Input
          type={toggle ? "text" : "password"}
          placeholder={placeholder}
          {...(register ? register(name) : {})}
        />

        <Image src={EyeIcon} alt="Show Password" className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onPointerUp={() => setToggle(false)}  onPointerDown={() => setToggle(true)} />
      </div>
      {forgetPassword && <ForgetPassword />}
      {error && <Error message={error} />}
    </div>
  );
}

