import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface TableWithPaginationProps<T> {
  columns: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

export function TableWithPagination<T>({
  columns,
  data,
  renderRow,
}: TableWithPaginationProps<T>) {
  return (
    <div className="flex flex-col h-full border-red-600 border">
      {/* Table */}
      <div className="overflow-x-auto flex-1">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => renderRow(item, idx))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-end border">
        <Pagination className="border border-amber-200 flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}


const data = [
  { name: "John", age: 28, email: "john@example.com" },
  { name: "Jane", age: 32, email: "jane@example.com" },
];

export default function DemoPage() {
  return (
    <TableWithPagination
      columns={["Name", "Age", "Email"]}
      data={data}
      renderRow={(item, idx) => (
        <TableRow key={idx}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
          <TableCell>{item.email}</TableCell>
        </TableRow>
      )}
    />
  );
}
