"use client"

import AuthenticatedLayout from "@/layouts/authenticated-layout";
import DeleteUserForm from "@/pages/profile/partials/delete-user-form";
import UpdatePasswordForm from "@/pages/profile/partials/update-password-form";
import UpdateProfileInformationForm from "@/pages/profile/partials/update-profile-information-form";
import { Head } from "@inertiajs/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { usePageData } from "@/hooks/get-page"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import * as React from "react"
import { Bold, CameraIcon, ChevronDownIcon, Italic, Phone, PlusIcon, Smartphone, TabletSmartphone, Underline, UploadIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, ChangeEvent } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const countries = [
  { value: "us", label: "Estados Unidos", prefix: "+1", flag: "🇺🇸" },
  { value: "mx", label: "México", prefix: "+52", flag: "🇲🇽" },
  { value: "ec", label: "Ecuador", prefix: "+593", flag: "🇪🇨" },
  // Agrega más países según necesites
];

const FormSchema = z.object({
  avatar: z.string(),
  firstname: z.string().regex(/^[a-zA-Z0-9\s]*$/, {
    message: "No special characters allowed"
  })/* .min(2, {
        message: "First name must be at least 2 characters.",
    }) */,
  lastname: z.string().regex(/^[a-zA-Z0-9\s]*$/, {
    message: "No special characters allowed"
  })/* .email({
        message: "Invalid email address.",
    }) */,
  dateofbirth: z.date().optional(),
  sex: z.string().optional(),
  contact: z.object({
    type: z.enum(["cellphone", "landphone"]).optional(),
    country: z.string().optional(),
    number: z.string().optional(),
  }),
  notifications: z.boolean(),
})

export default function Edit({
  mustVerifyEmail,
  status,
}: { mustVerifyEmail: boolean; status?: string }) {
  const pageData = usePageData();
  const [open, setOpen] = React.useState(false)
  const [openPhone, setOpenPhone] = React.useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = React.useState<string>("https://github.com/shadcn.png");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      avatar: "https://github.com/shadcn.png",
      firstname: "",
      lastname: "",
      dateofbirth: undefined,
      sex: undefined,
      contact: {
        type: "cellphone",
        country: "ec",
        number: "",
      },
      notifications: true,
    },
  })

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreviewUrl(reader.result as string); // Actualiza la URL de previsualización
      };
      reader.readAsDataURL(file);
      console.log('Imagen seleccionada del dispositivo:', file);
      // Aquí puedes subir el archivo a tu estado global del formulario si lo necesitas
      // Por ejemplo: form.setValue("avatar", file);
    }
  };

  const handlePredefinedImageSelect = () => {
    // Aquí es donde puedes abrir tu AlertDialog para seleccionar una imagen predefinida
    console.log("Seleccionar imagen predefinida (lucide-chart, etc.)");
    // Por ejemplo:
    // setShowPredefinedImageDialog(true);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    /* toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    }) */
  }

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <div className="[--header-height:calc(theme(spacing.14))]">

        <div className="space-y-6">
          <Head title={pageData.title} />
          <Tabs defaultValue="Personal Information">
            <TabsList>
              <TabsTrigger value="Personal Information">Personal Information</TabsTrigger>
              <TabsTrigger value="Account Information">Account Information</TabsTrigger>
            </TabsList>

            <TabsContent value="Personal Information">

              <Card className="my-5">
                <CardHeader>
                  <CardTitle className="!ml-3">Personal Information</CardTitle>
                  <CardDescription className="!ml-3">
                    Update your personal's profile information.
                  </CardDescription>
                </CardHeader>




                {/* formulario */}
                <CardHeader className="!pt-0">
                  <CardDescription className="!m-3">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

                        {/* avatar */}
                        <FormField
                          control={form.control}
                          name="avatar"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="avatar" className="pl-1 text-text">Avatar</FormLabel>
                              <FormControl>
                                <div className="flex flex-row flex-wrap items-center gap-12">
                                  <div className="relative h-40 w-40">
                                    <Avatar className="h-full w-full">
                                      {/* Utiliza el valor del formulario para el src. Si no hay valor, usa una URL por defecto. */}
                                      <AvatarImage src={field.value} alt="Avatar" />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <div
                                          className="absolute bottom-0 right-0 p-1 rounded-full cursor-pointer text-white bg-icon-plus"
                                        >
                                          <PlusIcon className="h-6 w-6" />
                                        </div>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => fileInputRef.current?.click()}>
                                          <UploadIcon className="mr-2 h-4 w-4" />
                                          <span>Subir del dispositivo</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={handlePredefinedImageSelect}>
                                          <CameraIcon className="mr-2 h-4 w-4" />
                                          <span>Seleccionar predefinida</span>
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Este input está fuera del FormField, pero su onChange actualiza el estado del formulario */}
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          accept="image/*"
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                form.setValue("avatar", reader.result as string);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />

                        {/* campo firstname */}
                        <FormField
                          control={form.control}
                          name="firstname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="firstname" className="pl-1 text-text">First Name</FormLabel>
                              <FormControl>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Input className="w-64" type="text" id="firstname" placeholder="First Name" {...field} />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>No special characters allowed</p>
                                  </TooltipContent>
                                </Tooltip>
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo lastname */}
                        <FormField
                          control={form.control}
                          name="lastname"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="lastname" className="pl-1 text-text">Last Name</FormLabel>
                              <FormControl>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Input className="w-64" type="text" id="lastname" placeholder="Last Name" {...field} />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>No special characters allowed</p>
                                  </TooltipContent>
                                </Tooltip>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo dateofbirth */}
                        <FormField
                          control={form.control}
                          name="dateofbirth"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="flex flex-col gap-3">
                                  <FormLabel className="pl-1 text-text">Date of birth</FormLabel>
                                  <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>

                                      <Button
                                        variant="outline"
                                        id="dateofbirth"
                                        className="w-48 justify-between font-normal"
                                      >
                                        {field.value ? field.value.toLocaleDateString() : "Select date"}
                                        <ChevronDownIcon />
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                          field.onChange(date);
                                          setOpen(false);
                                        }}
                                        fromYear={1950}
                                        toYear={new Date().getFullYear() - 18}
                                      />
                                    </PopoverContent>
                                  </Popover>
                                </div>

                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo sexo */}
                        <FormField
                          control={form.control}
                          name="sex"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="sex" className="pl-1 text-text">Sex</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange} // 💡 Conecta el onChange del campo al onValueChange del RadioGroup
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <div className="flex items-center gap-3">
                                    <RadioGroupItem value="male" id="r1" />
                                    <FormLabel htmlFor="r1" className="pl-1 text-text">Male</FormLabel>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <RadioGroupItem value="female" id="r2" />
                                    <FormLabel htmlFor="r2" className="pl-1 text-text">Female</FormLabel>
                                  </div>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo contactos */}
                        <FormField
                          control={form.control}
                          name="contact"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="sex" className="pl-1 text-text">Contact</FormLabel>
                              <FormControl>
                                <div className="flex flex-col gap-3">
                                  <div className="flex justify-start">
                                    {/* Toggle Group para el tipo de teléfono */}
                                    <ToggleGroup
                                      type="single"
                                      value={field.value.type}
                                      onValueChange={(value) => field.onChange({ ...field.value, type: value })}
                                    >
                                      <ToggleGroupItem value="cellphone" aria-label="ellphone">
                                        <Smartphone className="h-4 w-4" />
                                      </ToggleGroupItem>
                                      <ToggleGroupItem value="landphone" aria-label="Landphone">
                                        <Phone className="h-4 w-4" />
                                      </ToggleGroupItem>
                                    </ToggleGroup>

                                    {/* Input con el Combobox de país */}
                                    <div className="flex w-fit px-3">
                                      <div className="w-fit">
                                        <Popover open={openPhone} onOpenChange={setOpenPhone}>
                                          <PopoverTrigger asChild>
                                            <Button
                                              variant="outline"
                                              role="combobox"
                                              className="w-full justify-between rounded-r-none"
                                            >
                                              {field.value.country ? (
                                                <>
                                                  {countries.find((country) => country.value === field.value.country)?.flag}{" "}
                                                  {countries.find((country) => country.value === field.value.country)?.prefix}
                                                </>
                                              ) : (
                                                "Selecciona país"
                                              )}
                                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                          </PopoverTrigger>
                                          <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                              <CommandInput placeholder="Buscar país..." />
                                              <CommandEmpty>País no encontrado.</CommandEmpty>
                                              <CommandGroup>
                                                {countries.map((country) => (
                                                  <CommandItem
                                                    key={country.value}
                                                    value={country.value}
                                                    onSelect={(currentValue) => {
                                                      field.onChange({ ...field.value, country: currentValue });
                                                      setOpenPhone(false)
                                                    }}
                                                  >
                                                    <Check
                                                      className={cn(
                                                        "mr-2 h-4 w-4",
                                                        field.value.country === country.value
                                                          ? "opacity-100"
                                                          : "opacity-0"
                                                      )}
                                                    />
                                                    {country.flag} {country.label} ({country.prefix})
                                                  </CommandItem>
                                                ))}
                                              </CommandGroup>
                                            </Command>
                                          </PopoverContent>
                                        </Popover>
                                      </div>
                                      <Input
                                        className="flex-grow rounded-l-none"
                                        id="number"
                                        type="tel"
                                        placeholder="Número de teléfono"
                                        value={field.value.number}
                                        onChange={(e) => field.onChange({ ...field.value, number: e.target.value })}
                                      />
                                    </div>
                                  </div>
                                </div>


                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo notificaciones */}
                        <FormField
                          control={form.control}
                          name="notifications"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="sex" className="pl-1 text-text">Contact</FormLabel>
                              <FormControl>
                                <div className="flex items-center space-x-2">
                                  <Switch
                                    id="notifications"
                                    checked={field.value}
                                    onCheckedChange={field.onChange} />
                                  <Label htmlFor="notifications">Do you want to receive email notifications?</Label>
                                </div>

                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button type="button">Submit</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently submit your data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => form.handleSubmit(onSubmit)()}>
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </form>
                    </Form>
                  </CardDescription>

                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="Account Information">
              <Card className="my-5">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Update your account's profile information and email
                    address.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                  />
                </CardContent>
              </Card>

              <Card className="my-5">
                <CardHeader>
                  <CardTitle>Update Password</CardTitle>
                  <CardDescription>
                    Ensure your account is using a long, random password
                    to stay secure.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <UpdatePasswordForm className="max-w-xl" />
                </CardContent>
              </Card>

              <Card className="my-5">
                <CardHeader>
                  <CardTitle>Delete Account</CardTitle>
                  <CardDescription>
                    Once your account is deleted, all of its resources
                    and data will be permanently deleted. Before
                    deleting your account, please download any data or
                    information that you wish to retain.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <DeleteUserForm className="max-w-xl" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>



        </div>
      </div>
    </AuthenticatedLayout>

  );
}