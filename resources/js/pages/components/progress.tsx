import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { usePageData } from "@/hooks/get-page"

export default function Page() {
  const pageData = usePageData();
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(35), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Progress value={progress} className="w-[80%]" />

        </div>
      </div>
    </AuthenticatedLayout>
  );
}