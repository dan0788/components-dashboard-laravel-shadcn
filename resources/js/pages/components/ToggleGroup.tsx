import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Bold, Italic, Underline } from "lucide-react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const ToggleGroupPage = () => {
  const pageData = usePageData();

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <ToggleGroup variant="outline" type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>

        </div>
      </div>
    </>
  );
}

ToggleGroupPage.components = (page: ReactNode) => <ComponentsPage title="ToggleGroup" children={page} />