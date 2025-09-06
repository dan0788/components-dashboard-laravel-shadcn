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
import { Label } from "@/components/ui/label";
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
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const FormSchema = z.object({
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
})

export default function Edit({
  mustVerifyEmail,
  status,
}: { mustVerifyEmail: boolean; status?: string }) {
  const pageData = usePageData();
  const [open, setOpen] = React.useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      dateofbirth: undefined,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
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
                  {/* colocar avatar para cambiar imagen */}
                  <CardDescription className="!my-4">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">

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
                                    <p>Add to library</p>
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
                                    <p>This is your email.</p>
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
                              <FormLabel className="pl-1 text-text">Date of birth</FormLabel>
                              <FormControl>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button
                                      variant={"outline"}
                                      className={"w-48 justify-between font-normal"}
                                    >
                                      {field.value ? (
                                        field.value.toLocaleDateString()
                                      ) : (
                                        <span className="text-muted-foreground">Select date</span>
                                      )}
                                      <ChevronDownIcon />
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange} // 💡 Conecta el cambio del calendario al formulario
                                      initialFocus
                                      captionLayout="dropdown"
                                    />
                                  </PopoverContent>
                                </Popover>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit">Submit</Button>
                      </form>
                    </Form>
                  </CardDescription>

                </CardHeader>
              </Card>
            </TabsContent>

            <TabsContent value="Account Information">
              <Card className="my-5">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
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