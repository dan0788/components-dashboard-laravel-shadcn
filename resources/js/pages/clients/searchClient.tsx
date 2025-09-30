import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { Head, Link, usePage } from "@inertiajs/react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Check, X, BadgeCheckIcon, CircleCheck, CircleX, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { detachInCapitalWords } from "@/hooks/get-page";
import { Layout } from "@/pages/layout";
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from '@/components/ui/label';
import LinkButton from '../components/buttons/linkButton';

interface CompanyData {
  uid: string;
  company_name: string;
  direction: string;
  ramp: boolean;
  braille_language: boolean;
  elevator: boolean;
  first_aid_kit: boolean;
  sign_language: boolean;
  accessible_bathroom: boolean;
  private_transportation: boolean;
  information_places: boolean;
  client: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    email_verified_at: string | null;
  };
}

export type Payment = {
  id: number;
  uid: string;
  company_name: string;
  direction: string;
  owner: string;
  email: string;
  email_verified_at: string | null;
  accesibility: {
    ramp: boolean;
    braille_language: boolean;
    elevator: boolean;
    first_aid_kit: boolean;
    sign_language: boolean;
    accessible_bathroom: boolean;
    private_transportation: boolean;
    information_places: boolean;
  };
};

const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => <div className="">
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="" />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
    </div>,
  },
  {
    accessorKey: "company_name",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Company Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-right font-medium">{row.getValue("company_name")}</div>,
  },
  {
    accessorKey: "direction",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Direction
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.getValue("direction")}</div>,
  },
  {
    accessorKey: "owner",
    header: ({ column }) => {
      return (
        <Button
          variant="link"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Owner
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-right font-medium">{row.getValue("owner")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "email_verified_at",
    header: "",
    cell: ({ row }) => {
      const emailVerifiedDate = row.original.email_verified_at;
      return (
        <div className="">
          {emailVerifiedDate ? (<Badge
            variant="outline"
            className="bg-green-500 text-white dark:bg-blue-600"
          >
            <CircleCheck className='px-1' />
            Email Verified
          </Badge>) : (<Badge
            variant="outline"
            className="bg-red-500 text-white dark:bg-red-600"
          >
            <CircleX className='mx-1' />
            Email Not verified
          </Badge>)
          }
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              className='cursor-pointer'
              onClick={() => handleUIDClick(payment.uid)}
            >
              Copy company UID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>View accesibility</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  {Object.entries(row.original.accesibility).map(([key, value]) => (
                    <DropdownMenuItem key={key}>
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <span>{detachInCapitalWords(key, '_', true)}:</span>
                        {value ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem asChild>
              <Link
                href={route('client.edit', { id: row.original.id })}
                className='cursor-pointer'
              >Edit Client</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const title = 'Search Client';

export default function SearchClient() {

  const { companies } = usePage<{ companies: CompanyData[] }>().props;
  const [selectValue, setSelectValue] = useState('company_name');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Payment>();

  // Mapeamos los datos para incluír la accesibilidad
  const payments: Payment[] = useMemo(() => {
    return companies.map(company => ({
      id: company.client.id,
      uid: company.uid,
      company_name: company.company_name,
      direction: company.direction,
      owner: `${company.client.firstname} ${company.client.lastname}`,
      email: company.client.email,
      email_verified_at: company.client.email_verified_at,
      accesibility: {
        ramp: company.ramp,
        braille_language: company.braille_language,
        elevator: company.elevator,
        first_aid_kit: company.first_aid_kit,
        sign_language: company.sign_language,
        accessible_bathroom: company.accessible_bathroom,
        private_transportation: company.private_transportation,
        information_places: company.information_places,
      }
    }));
  }, [companies]);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: payments,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSelectChange = (item: string) => {
    setSelectValue(item);
    setColumnFilters([]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    table.getColumn(selectValue)?.setFilterValue(value);
  };

  const handleRowClick = (paymentData: Payment) => {
    setSelectedRow(paymentData);
    setIsSheetOpen(true);
  };

  return (
    <>
      <Head title={title} />
      <Toaster position="top-center" />
      <div className="w-full">
        <div className='w-full justify-end flex'>
          <LinkButton className="w-9 h-9 bg-green-500 rounded-full text-white flex items-center justify-center"
          routeName='client.create' children={<Plus />}
        ></LinkButton>
        </div>

        <div className="flex items-center py-4">
          <Select defaultValue="company_name" onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fields</SelectLabel>
                <SelectItem value="company_name">Company Name</SelectItem>
                <SelectItem value="direction">Direction</SelectItem>
                <SelectItem value="owner">Owner</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder={`Filter ${selectValue.replace('_', ' ')}...`}
            value={(table.getColumn(selectValue)?.getFilterValue() as string) ?? ""}
            onChange={handleInputChange}
            className="max-w-sm ml-5"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => { handleRowClick(row.original) }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className='cursor-pointer'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="text-muted-foreground flex-1 text-sm">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to respected profile here. Click open to edit.
            </SheetDescription>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Owner</Label>
              <Input id="sheet-demo-name" value={selectedRow?.owner} disabled />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="sheet-demo-name">Company Name</Label>
              <Input id="sheet-demo-name" value={selectedRow?.company_name} disabled />
            </div>
            {Object.entries(selectedRow?.accesibility || []).map(([key, value]) => {
              return (
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Label>{detachInCapitalWords(key, '_', true)}:</Label>
                  {value ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />}
                </div>
              )
            })}
          </div>
          <SheetFooter>
            <Button>
              <Link href={route('client.edit', { id: selectedRow?.id || 1 })}>Edit profile</Link>
            </Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );



}

function handleUIDClick(uid: string) {
  navigator.clipboard.writeText(uid);
  const toastId = toast("UID has been copied to clipboard", {
    action: {
      label: "Close",
      onClick: () => { toast.dismiss(toastId) },
    },
  })
}



SearchClient.layout = (page: ReactNode) => <Layout children={page} documentName={title} />

