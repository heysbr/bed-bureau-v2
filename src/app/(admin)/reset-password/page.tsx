"use client";

import FormField from "@/components/forms/FormField";
import PageTitle from "@/components/layout/PageTittle";
import { Button } from "@/components/ui/button";

import { ResetPasswordFields as Fields } from "@/data/fields";

export default function page() {
  return (
    <>
      <div className="space-y-6">
        <PageTitle />

        <div className="flex flex-row justify-center ">
          <form className="flex flex-col bg-white md:p-20 p-5 space-y-2 md:space-y-6 w-full md:w-125 rounded-lg shadow-[0px_4px_15px_0px_#DFE5F0]">

            {Fields.map((field, index) => (
              <FormField
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                //  register={register}
                //  error={errors[field.name]?.message}
                // link={field?.link}
                //  forgetPassword={field?.forget_password}
              />
            ))}
            <p className="text-xs m-0 mt-5 text-app-primary">Note: You must complete all the mandatory fields</p>
            <Button variant="appBtn" className="w-full mt-4">
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
