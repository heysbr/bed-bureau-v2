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

        <div className="flex flex-row justify-center">
          <form className="flex flex-col justify-between bg-white p-20 space-y-6 w-125 rounded-lg shadow-[0px_4px_15px_0px_#DFE5F0]">
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
            <p className="text-xs text-app-primary">Note: You must complete all the mandatory fields</p>
            <Button variant="appBtn" >
              Update
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
