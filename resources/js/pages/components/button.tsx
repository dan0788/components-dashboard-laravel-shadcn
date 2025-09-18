import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/components/ui/button"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

const title = 'Button'

export const ButtonPage = () => {
  const pageData = usePageData();


  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {title}</h1>
        <div className="w-full max-w-xl mx-auto rounded-lg flex justify-center shadow-md bg-card text-card-foreground p-6">

            <Button>Button</Button>

        </div>
      </div>
    </>
  );
}

ButtonPage.components = (page: ReactNode) => <ComponentsPage title={title} children={page} />