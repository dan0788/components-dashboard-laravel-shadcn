import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { usePageData } from "@/hooks/get-page"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function Page() {
  const pageData = usePageData();

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}