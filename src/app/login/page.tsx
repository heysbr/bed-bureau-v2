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
import PageTitle from "@/components/layout/PageTittle";

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
    <div className="relative h-screen bg-app-bg flex md:px-20 md:items-center ">
      <Image src={Logo} alt="logo" className="absolute top-5 left md:left-25"  />
      <div className="flex-1 hidden md:flex flex-col items-center justify-center">
        <span className="text-4xl m-5">Welcom to 
        <br />
        <span className="font-semibold text-[#684ABC]">Bed Bureau</span></span>
        <Image src={BgImage} alt="bg-image" />
      </div>

      <div className="flex flex-col md:h-full gap-y-5 p-5 w-full md:w-fit py-20 md:items-end  md:justify-center">
        <PageTitle className="md:hidden" />
        <form
          onSubmit={handleSubmit(submit)}
          // className="flex flex-col gap-y-10 px-12 bg-app-form-bg p-5 shadow-[#DFE5F0] rounded shadow-[0px_4px_15px_0px_#DFE5F0] md:w-md h-3/5"
          className="flex flex-col bg-white md:p-20 border p-5 space-y-2 md:space-y-6 w-full md:w-125 rounded-lg shadow-[0px_4px_15px_0px_#DFE5F0]"
        >
          <Heading className="hidden md:block text-2xl font-semibold">Login</Heading>
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
          <Button variant="appBtn" className="w-full mt-4">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
