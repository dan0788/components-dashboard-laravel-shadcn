import React, { ReactNode } from 'react'
import { Layout } from './layout'
import { Head, usePage, router } from '@inertiajs/react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
} from '@/components/ui/alert-dialog'
import { Toaster, toast } from 'sonner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { CheckCircle2Icon } from 'lucide-react'
import { detachInCapitalWords } from '@/hooks/get-page'
import { RadioGroupFormBoolean, RadioGroupFormArray } from '@/hooks/get-components'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PageProps } from '@/types'

interface ClientProps {
  id: number
  firstname: string
  lastname: string
  email: string
}

interface CompanyProps {
  id: number
  company_type_id: number
  company_name: string
  direction: string
  ramp: boolean
  braille_language: boolean
  elevator: boolean
  first_aid_kit: boolean
  sign_language: boolean
  accessible_bathroom: boolean
  private_transportation: boolean
  information_places: boolean
  company_type: {
    type: string
  }
}

interface EditClientProps extends PageProps {
  client: ClientProps
  company: CompanyProps
}

const radioNames = ['Entertainment', 'Food', 'Transportation', 'Beverage', 'General trade', 'Services']
const references = radioNames.map(ref => {
  const arrayFrases = ref.split(' ')

  const capitalFrases = arrayFrases.map((item, index) => {
    if (item.length === 0) {
      return '';
    }
    return item.charAt(0).toLowerCase() + item.slice(1);
  })

  return capitalFrases.join('_')
});

const FormSchema = z.object({
  firstname: z.string().regex(/^[a-zA-Z0-9\s]*$/).min(1, 'El nombre es obligatorio.'),
  lastname: z.string().regex(/^[a-zA-Z0-9\s]*$/).min(1, 'El nombre es obligatorio.'),
  email: z.string().email(),

  company_name: z.string().min(1, 'El nombre es obligatorio.'),
  direction: z.string().min(1, 'El nombre es obligatorio.'),
  ramp: z.boolean(),
  braille_language: z.boolean(),
  elevator: z.boolean(),
  first_aid_kit: z.boolean(),
  accessible_bathroom: z.boolean(),
  sign_language: z.boolean(),
  private_transportation: z.boolean(),
  information_places: z.boolean(),
  type: z.enum(['Entertainment', 'Food', 'Transportation', 'Beverage', 'General trade', 'Services']),
})

const title = 'Edit Client';

export default function editClient() {

  const { client, company } = usePage<EditClientProps>().props;
  console.log(company.company_type.type);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: client.firstname || '',
      lastname: client.lastname || '',
      email: client.email || '',

      company_name: company.company_name || '',
      direction: company.direction || '',
      ramp: company.ramp,
      braille_language: company.braille_language || false,
      elevator: company.elevator || false,
      first_aid_kit: company.first_aid_kit || false,
      accessible_bathroom: company.accessible_bathroom || false,
      sign_language: company.sign_language || false,
      private_transportation: company.private_transportation || false,
      information_places: company.information_places || false,
      type: (company.company_type.type || 'Entertainment') as "Entertainment" | "Food" | "Transportation" | "Beverage" | "General trade" | "Services",
    },
  })

  function onSubmit(formData: z.infer<typeof FormSchema>) {

    const dataForm = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      company_name: formData.company_name,
      direction: formData.direction,
      ramp: formData.ramp,
      braille_language: formData.braille_language,
      elevator: formData.elevator,
      first_aid_kit: formData.first_aid_kit,
      accessible_bathroom: formData.accessible_bathroom,
      sign_language: formData.sign_language,
      private_transportation: formData.private_transportation,
      information_places: formData.information_places,
      type: formData.type,
    }

    router.patch(route("personalInfo.update"), dataForm, {
      preserveScroll: true,
      onSuccess: () => {
        toast(<div className="flex justify-between ">
          <CheckCircle2Icon className="mr-4" />Personal information has been correctly updated
        </div>)
        //form.reset();
      },
      onError: (errors) => {
        form.setError("firstname", { message: errors.firstname });
        form.setError("lastname", { message: errors.lastname });
        form.setError("email", { message: errors.email });
        form.setError("company_name", { message: errors.company_name });
        form.setError("direction", { message: errors.direction });
        form.setError("ramp", { message: errors.ramp });
        form.setError("braille_language", { message: errors.braille_language });
        form.setError("elevator", { message: errors.elevator });
        form.setError("first_aid_kit", { message: errors.first_aid_kit });
        form.setError("accessible_bathroom", { message: errors.accessible_bathroom });
        form.setError("sign_language", { message: errors.sign_language });
        form.setError("private_transportation", { message: errors.private_transportation });
        form.setError("information_places", { message: errors.information_places });
        form.setError("type", { message: errors.type });
      },
    });
  }

  return (
    <>
      <Head title={title} />
      <div className="[--header-height:calc(theme(spacing.14))]">

        <div className="space-y-6">


          <Toaster dir="ltr" />

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

                    {/* firstname */}
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="firstname" className="pl-1 text-text">
                            {detachInCapitalWords('first_name', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Input className="w-64 mt-2"
                                  type="text"
                                  id="firstname"
                                  placeholder="Insert first name"
                                  {...field} />
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

                    {/* lastname */}
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="lastname" className="pl-1 text-text">
                            {detachInCapitalWords('last_name', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Input className="w-64 mt-2"
                                  type="text"
                                  id="lastname"
                                  placeholder="Insert last name"
                                  {...field} />
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

                    {/* email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email" className="pl-1 text-text">
                            {detachInCapitalWords('email', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <Input className="w-64 mt-2"
                              type="text"
                              id="email"
                              placeholder="Insert email"
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* company_name */}
                    <FormField
                      control={form.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="company_name" className="pl-1 text-text">
                            {detachInCapitalWords('company_name', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <Input className="w-64 mt-2"
                              type="text"
                              id="company_name"
                              placeholder="Insert company name"
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* direction */}
                    <FormField
                      control={form.control}
                      name="direction"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="direction" className="pl-1 text-text">
                            {detachInCapitalWords('direction', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <Input className="w-64 mt-2"
                              type="text"
                              id="direction"
                              placeholder="Insert company name"
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* ramp */}
                    <FormField
                      control={form.control}
                      name="ramp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="ramp" className="pl-1 text-text">
                            {detachInCapitalWords('ramp', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* braille_language */}
                    <FormField
                      control={form.control}
                      name="braille_language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="braille_language" className="pl-1 text-text">
                            {detachInCapitalWords('braille_language', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* elevator */}
                    <FormField
                      control={form.control}
                      name="elevator"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="elevator" className="pl-1 text-text">
                            {detachInCapitalWords('elevator', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* first_aid_kit */}
                    <FormField
                      control={form.control}
                      name="first_aid_kit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="first_aid_kit" className="pl-1 text-text">
                            {detachInCapitalWords('first_aid_kit', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* accessible_bathroom */}
                    <FormField
                      control={form.control}
                      name="accessible_bathroom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="accessible_bathroom" className="pl-1 text-text">
                            {detachInCapitalWords('accessible_bathroom', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* sign_language */}
                    <FormField
                      control={form.control}
                      name="sign_language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="sign_language" className="pl-1 text-text">
                            {detachInCapitalWords('sign_language', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* private_transportation */}
                    <FormField
                      control={form.control}
                      name="private_transportation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="private_transportation" className="pl-1 text-text">
                            {detachInCapitalWords('private_transportation', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* information_places */}
                    <FormField
                      control={form.control}
                      name="information_places"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="information_places" className="pl-1 text-text">
                            {detachInCapitalWords('information_places', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormBoolean field={field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* type */}
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="type" className="pl-1 text-text">
                            {detachInCapitalWords('type', '_', true)}
                          </FormLabel>
                          <FormControl>
                            <RadioGroupFormArray
                              field={field}
                              references={references}
                              radioNames={radioNames} />
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
        </div>
      </div>
    </>
  )
}

editClient.layout = (page: ReactNode) => <Layout children={page} documentName={title} />