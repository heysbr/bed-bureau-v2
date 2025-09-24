import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import ClientLogo from "@/assets/icons/client.svg"
import Image from "next/image";

export default function page() {
  return (
    <div className="space-y-6">
      
      <div className="flex justify-between">
        <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/manage-client" className="text-[#ABAFB7]">
              Manage Client
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#2A2338] font-semibold">
              Details
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

        <Button variant="appBtn" className="shadow-none rounded-sm">
          <Pencil /> Edit
        </Button>
      </div>
      <div className="flex flex-row bg-white shadow-[0px_4px_8px_0px_#101E730F] h-50 rounded-md gap-10 p-5">
        <Image src={ClientLogo} alt="Client Logo" className="rounded-full size-20  object-cover"/>
        <div className="grid grid-cols-2 text-[#969DAB] text-sm [&>*:nth-child(even)]:text-[#2A2338] [&>*:nth-child(even)]:font-medium">
          <div className="">Client Name:</div>
          <div className="">Leslie Alexander</div>
          <div className="">Contact Name:</div>
          <div className="">Ronald</div>
          <div className="">Contact Email Id:</div>
          <div className="">leslie.alexander@example.com</div>
          <div className="">Location:</div>
          <div className="">MID (PROVIDE)</div>
          <div className="">Registered On:</div>
          <div className="">05 July 2022</div>
          <div className="">Status:</div>
          <div className="text-[#10940D]">Active</div>
        </div>
      </div>
      <div className="bg-white shadow-[0px_4px_8px_0px_#101E730F] flex items-center p-10 py-5 gap-50  rounded-md text-base">
        <span className="font-semibold ">
          Your Public URL
          <span className="text-app-primary font-medium mx-5">
            www.bedbureau.com/client/clientname
          </span>
        </span>
        <Button variant="appBtn" className="">
          Open Link
        </Button>
      </div>
    </div>
  );
}
