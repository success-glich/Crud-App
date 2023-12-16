import { IUser } from "@/type";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";

import UserDeleteBtn from "@/components/UserDeleteBtn";
import EditUser from "@/components/EditUser";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "dob",
    header: "Date Of Birth",
  },
  {
    accessorKey: "address.city",
    header: "City",
  },
  {
    accessorKey: "address.country",
    header: "Country",
  },
  {
    accessorKey: "address.province",
    header: "Province",
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      const handleEdit = () => {};

      return (
        <>
          <div className="flex gap-4">
            <span>
              <EditUser user={user} />
            </span>
            <span>
              <UserDeleteBtn id={user.id} />
            </span>
          </div>
        </>
      );
    },
  },
];
