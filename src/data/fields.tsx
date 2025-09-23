import Checkbox from "@/components/forms/Checkbox";
import EmailField from "@/components/forms/EmailField";
import Password from "@/components/forms/Password";
import SelectField from "@/components/forms/SelectField";
import TextField from "@/components/forms/TextField";
import UploadField from "@/components/forms/UploadField";
import type { FieldType, FieldConfig } from "@/lib/SchemaGenerator";

interface FormFieldProps {
  name: string;
  type?: FieldType;
  placeholder?: string;
  label?: string;
  forget_password?: boolean;
}

export const fieldComponentMap: {
  [key: string]: React.ComponentType<FormFieldProps>;
} = {
  text: TextField,
  password: Password,
  select: SelectField,
  email: EmailField,
  checkbox: Checkbox,
  upload: UploadField,
};

export const LoginFields: FieldConfig[] = [
  {
    name: "email",
    type: "email" as FieldType,
    placeholder: "Enter email id",
    label: "Email ID",
  },
  {
    name: "password",
    type: "password" as FieldType,
    placeholder: "Enter Password",
    label: "Password",
    forget_password: true,
  },
];

export const AddClientFields: FieldConfig[] = [
  {
    name: "upload-profile",
    type: "upload" as FieldType,
    label: "Upload Profile",
  },
  {
    name: "location",
    type: "select" as FieldType,
    placeholder: "Enter location",
    label: "Location",
  },
  {
    name: "client-organisation-name",
    type: "text" as FieldType,
    placeholder: "Enter Client Organisation Name",
    label: "Client Organisation Name",
  },
  {
    name: "contact-person-name",
    type: "text" as FieldType,
    placeholder: "Enter Contact Person Name",
    label: "Contact Person Name",
  },
  {
    name: "client-email",
    type: "email" as FieldType,
    placeholder: "Client Email",
    label: "Enter Client Email",
  },
];

export const UpdateProfileFields: FieldConfig[] = [
  {
    name: "Client Name",
    type: "text" as FieldType,
    placeholder: "Enter Client Name",
    label: "Client Name",
    required: true,
  },
  {
    name: "Contact Name",
    type: "text" as FieldType,
    placeholder: "Enter Contact Name",
    label: "Contact Name",
    required: true,
  },
];

export const ResetPasswordFields: FieldConfig[] = [
  {
    name: "current-password",
    type: "password" as FieldType,
    placeholder: "Enter Current Password",
    label: "Current Password",
    required: true,
  },
  {
    name: "new-password",
    type: "password" as FieldType,
    placeholder: "Enter New Password",
    label: "New Password",
    required: true,
  },
  {
    name: "confirm-password",
    type: "password" as FieldType,
    placeholder: "Enter Confirm Password",
    label: "Confirm Password",
    required: true,
  },
];
