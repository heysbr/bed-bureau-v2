import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical className="text-[#A0A4A8]" size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem>Reset Password</DropdownMenuItem>
          <DropdownMenuItem>Deactivate</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
