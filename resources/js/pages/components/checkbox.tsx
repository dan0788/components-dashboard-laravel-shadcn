import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const CheckboxPage = () => {
  const pageData = usePageData();

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="terms-2" defaultChecked />
              <div className="grid gap-2">
                <Label htmlFor="terms-2">Accept terms and conditions</Label>
                <p className="text-muted-foreground text-sm">
                  By clicking this checkbox, you agree to the terms and conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="toggle" disabled />
              <Label htmlFor="toggle">Enable notifications</Label>
            </div>
            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox
                id="toggle-2"
                defaultChecked
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              <div className="grid gap-1.5 font-normal">
                <p className="text-sm leading-none font-medium">
                  Enable notifications
                </p>
                <p className="text-muted-foreground text-sm">
                  You can enable or disable notifications at any time.
                </p>
              </div>
            </Label>
          </div>

        </div>
      </div>
    </>
  );
}

CheckboxPage.components = (page: ReactNode) => <ComponentsPage title="Checkbox" children={page} />