import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const LabelPage = () => {
  const pageData = usePageData();

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

LabelPage.components = (page: ReactNode) => <ComponentsPage title="Label" children={page} />