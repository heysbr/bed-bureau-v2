"use client";
import Image from "next/image";
import BgImage from "@/assets/icons/login_bg.svg";
import Heading from "@/components/layout/Heading";
import Logo from "@/assets/icons/bed_bureau_icon.svg";

import { LoginFields } from "@/data/fields";
import FormField from "@/components/forms/FormField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { generateSchema } from "@/lib/SchemaGenerator";
import { Button } from "@/components/ui/button";

const schema = generateSchema(LoginFields);
type FormData = z.infer<typeof schema>;

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  function submit(data: FormData) {
    alert("form submitted successfully...");
    console.table(data);
    router.push("/manage-client");
  }

  return (
    <div className="relative h-screen bg-app-bg flex justify-around px-20 items-center ">
      <Image src={Logo} alt="logo" className="absolute top-5 left-25" />
      <div className="flex flex-col items-center justify-center">
        <span className="text-4xl m-5">Welcom to 
        <br />
        <span className="font-semibold text-[#684ABC]">Bed Bureau</span></span>
        <Image src={BgImage} alt="bg-image" />
      </div>

      <div className="flex h-full items-center justify-center">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-y-10 px-12 bg-app-form-bg p-5 shadow-[#DFE5F0] rounded shadow-[0px_4px_15px_0px_#DFE5F0] w-md h-3/5"
        >
          <Heading>Login</Heading>
          {LoginFields.map((field, index) => (
            <FormField
              key={index}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              label={field.label}
              register={register}
              error={errors[field.name]?.message}
              // link={field?.link}
              forgetPassword={field?.forget_password}
            />
          ))}
          <Button variant="appBtn" className="">Login</Button>
        </form>
      </div>
    </div>
  );
}
