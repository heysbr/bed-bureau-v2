import FormField from "@/components/forms/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ResetPasswordFields as Fields } from "@/data/fields";

export default function page() {
  return (
    <Dialog>
      <DialogTrigger className="bg-app-primary hover:bg-app-primary/90 text-white hover:text-white rounded-xl px-6 py-1">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col justify-between bg-white p-20 space-y-6 w-1/3 rounded-lg shadow">
              {Fields.map((field, index) => (
                <FormField
                  key={index}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  label={field.label}
                  //  register={register}
                  //  error={errors[field.name]?.message}
                  // link={field?.link}
                  //  forgetPassword={field?.forget_password}
                />
              ))}
              <p className="text-xs text-app-primary">
                Note: You must complete all the mandatory fields
              </p>
              <Button variant="appBtn" className="w-full mt-4">
                Update
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
