import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { usePageData } from "@/hooks/get-page"

export default function Page() {
  const pageData = usePageData();
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-[350px] flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <ChevronsUpDown />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-2 font-mono text-sm">
                @stitches/react
              </div>
            </CollapsibleContent>
          </Collapsible>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}