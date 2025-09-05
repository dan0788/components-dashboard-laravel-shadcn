import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { usePageData } from "@/hooks/get-page"

export default function Page() {
  const pageData = usePageData();

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>

        </div>
      </div>
    </AuthenticatedLayout>
  );
}