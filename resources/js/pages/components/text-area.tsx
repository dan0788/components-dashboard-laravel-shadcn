import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Textarea } from "@/components/ui/textarea"
import { usePageData } from "@/hooks/get-page"

export default function Page() {
  const pageData = usePageData();

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Textarea placeholder="Type your message here." />

        </div>
      </div>
    </AuthenticatedLayout>
  );
}