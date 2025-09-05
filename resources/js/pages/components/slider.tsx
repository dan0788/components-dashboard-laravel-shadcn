import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { usePageData } from "@/hooks/get-page"

type SliderProps = React.ComponentProps<typeof Slider>

export default function Page() {
  const pageData = usePageData();

  return (
    <AuthenticatedLayout breadcrumbs={pageData.breadcrumbs}>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]")}
            //{...props}
          />

        </div>
      </div>
    </AuthenticatedLayout>
  );
}