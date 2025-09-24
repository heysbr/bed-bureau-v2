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

const clients = [
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

export default function ClientTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S. No.</TableHead>
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
            <TableCell className="font-medium">{client.id}</TableCell>
            <TableCell>{client.location}</TableCell>
            <TableCell>{client.clientName}</TableCell>
            <TableCell>{client.contactName}</TableCell>
            <TableCell>{client.contactEmail}</TableCell>
            <TableCell>{client.registeredOn}</TableCell>
            <TableCell>{client.status}</TableCell>
            <TableCell>
              <EllipsisVertical className="text-[#A0A4A8]" size={16} />
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

                <PaginationItem >
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
  );
}
