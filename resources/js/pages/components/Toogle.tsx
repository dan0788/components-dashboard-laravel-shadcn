import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Bold } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

const title = 'Toogle'

export const TooglePage = () => {
  const pageData = usePageData();

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>

        </div>
      </div>
    </>
  );
}

TooglePage.components = (page: ReactNode) => <ComponentsPage title={title} children={page} />