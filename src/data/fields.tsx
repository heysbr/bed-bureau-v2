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


export const clients = [
  {
    id: 1,
    location: "New York",
    clientName: "Client name 1",
    contactName: "Leslie Alexander",
    contactEmail: "lesie.alexander@example.com",
    registeredOn: "05 July 2022",
    status: "Active",
  },
  {
    id: 2,
    location: "London",
    clientName: "Client name 2",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "24 June 2022",
    status: "Active",
  },
  {
    id: 3,
    location: "Berlin",
    clientName: "Client name 3",
    contactName: "Jane Cooper",
    contactEmail: "jane.cooper@example.com",
    registeredOn: "20 June 2022",
    status: "Active",
  },
  {
    id: 4,
    location: "Paris",
    clientName: "Client name 4",
    contactName: "Robert Fox",
    contactEmail: "robert.fox@gmail.com",
    registeredOn: "14 June 2022",
    status: "Pending",
  },
  {
    id: 5,
    location: "Toronto",
    clientName: "Client name 5",
    contactName: "Jenny Wilson",
    contactEmail: "jenny.wilson@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 6,
    location: "Sydney",
    clientName: "Client name 6",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "10 May 2022",
    status: "Inactive",
  },
  {
    id: 7,
    location: "Dubai",
    clientName: "Client name 7",
    contactName: "Leslie Alexander",
    contactEmail: "lesie.alexander@example.com",
    registeredOn: "20 May 2022",
    status: "Active",
  },
  {
    id: 8,
    location: "Tokyo",
    clientName: "Client name 8",
    contactName: "Robert Fox",
    contactEmail: "robert.fox@gmail.com",
    registeredOn: "14 June 2022",
    status: "Inactive",
  },
  {
    id: 9,
    location: "Delhi",
    clientName: "Client name 9",
    contactName: "Jenny Wilson",
    contactEmail: "jenny.wilson@example.com",
    registeredOn: "20 June 2022",
    status: "Pending",
  },
  {
    id: 10,
    location: "Singapore",
    clientName: "Client name 10",
    contactName: "Ronald Richards",
    contactEmail: "ronald.richards@example.com",
    registeredOn: "10 May 2022",
    status: "Active",
  },
];