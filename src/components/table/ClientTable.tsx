import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

import { clients } from "@/data/fields";

export default function ClientTable() {
  const router = useRouter();
  return (
    <>
      <Table>
        <TableHeader >
          <TableRow>
            <TableHead colSpan={8} className="text-xl font-medium p-5">List of All Clients</TableHead>
          </TableRow>
          <TableRow className="bg-app-table-header hover:bg-app-table-header">
            <TableHead className="px-5 text-center" >S. No.</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Contact Name</TableHead>
            <TableHead>Contact Email</TableHead>
            <TableHead>Registered On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium px-5 text-center">{client.id}</TableCell>
              <TableCell>{client.location}</TableCell>
              <TableCell>{client.clientName}</TableCell>
              <TableCell>{client.contactName}</TableCell>
              <TableCell>{client.contactEmail}</TableCell>
              <TableCell>{client.registeredOn}</TableCell>
              <TableCell className={`text-sm ${client.status==="Active" ? "text-[#10940D]" : client.status==="Pending" ? "text-[#F8A80C]":"text-[#52575C]"}`}>{client.status}</TableCell>
              <TableCell>
                {/* <EllipsisVertical className="text-[#A0A4A8]" size={16} /> */}
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <EllipsisVertical
                      className="text-[#A0A4A8] cursor-pointer"
                      size={16}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" py-2 border-0 shadow-[0px_12px_26px_0px_#101E730F]">
                    <DropdownMenuItem className=" " onClick={()=> router.push(`/manage-client/edit/`)}>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> router.push(`/reset-password/`)}>Reset Password</DropdownMenuItem>
                    <DropdownMenuItem>Deactivate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={8} className="p-4  bg-white">
              <Pagination className="justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>

                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
