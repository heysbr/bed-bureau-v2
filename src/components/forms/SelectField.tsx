import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { UseFormRegister } from "react-hook-form";
import Error from "./Error";

type SelectFieldProps = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  name?: string;
  error?: string;
  register?: UseFormRegister<Record<string, string>>;
};

export default function SelectField({
  label = "Email address",
  placeholder = "Enter your email",
  required = false,
  name = "email",
  error,
  // register,
}: SelectFieldProps) {
  return (
    <>
      <div className="">
        <Label htmlFor={name} className="my-2 text-app-label font-semibold">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Label>
        <Select>
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
        {error && <Error message={error} />}
      </div>
    </>
  );
}
