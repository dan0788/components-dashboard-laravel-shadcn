import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const AspectRatioPage = () => {
  const pageData = usePageData();


  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="w-full max-w-xl mx-auto rounded-lg shadow-md bg-white p-6">
          <AspectRatio ratio={16 / 16} className="bg-muted rounded-lg">
            <img
                src="/images/gaming.jpg"
                alt="Imagen de Gaming de Genshin Impact"
                className="rounded-md object-cover w-full h-full"
              />
          </AspectRatio>
        </div>
      </div>
    </>
  );
}

AspectRatioPage.components = (page: ReactNode) => <ComponentsPage title="AspectRatio" children={page} />