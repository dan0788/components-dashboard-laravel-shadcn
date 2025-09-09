"use client"

import AuthenticatedLayout from "@/layouts/authenticated-layout";
import DeleteUserForm from "@/pages/profile/partials/delete-user-form";
import UpdatePasswordForm from "@/pages/profile/partials/update-password-form";
import UpdateProfileInformationForm from "@/pages/profile/partials/update-profile-information-form";
import UpdatePinForm from "@/pages/profile/partials/update-pin-form";
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
import * as React from "react"
import { Phone, Smartphone } from "lucide-react"
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
import { AvatarPage } from "@/pages/profile/partials/avatar-form"
import { InputNamePage } from "@/pages/profile/partials/input-name-form";
import { DateBirthPage } from "@/pages/profile/partials/date-birth-form";
import { RadioSexPage } from "@/pages/profile/partials/radio-sex-form";
import { ContactsPage } from "@/pages/profile/partials/contacts-form";

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
        country: "Ecuador",
        number: "",
      },
      notifications: true,
    },
  })


  function onSubmit(formData: z.infer<typeof FormSchema>) {
    const formattedDate = formData.dateofbirth
      ? new Date(formData.dateofbirth).toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
      : null;

    const data = {
      avatar: formData.avatar,
      firstname: formData.firstname,
      lastname: formData.lastname,
      dateofbirth: formattedDate,
      sex: formData.sex,
      contact: formData.contact,
      notifications: formData.notifications,
    }
    console.log(data);
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
                                <AvatarPage onChange={field.onChange} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* campo firstname */}
                        <FormField
                          control={form.control}
                          name="firstname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <InputNamePage field={field} reference="firstname" value="First Name" />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        {/* campo lastname */}
                        <FormField
                          control={form.control}
                          name="lastname"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <InputNamePage field={field} reference="lastname" value="Last Name" />
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
                                <DateBirthPage field={field} />
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
                                <RadioSexPage field={field}/>
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
                              
                              <FormControl>
                                <ContactsPage field={field}/>
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
                              <AlertDialogTitle>Are you absolutely sure to save the data?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. You can modify your data after the change.
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
                  <CardTitle>Update Pin</CardTitle>
                  <CardDescription>
                    Ensure your account is using a long, random pin
                    to stay secure.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <UpdatePinForm className="max-w-xl" />
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