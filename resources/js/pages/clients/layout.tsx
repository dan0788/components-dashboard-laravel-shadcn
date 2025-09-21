import { Head, Link, usePage } from '@inertiajs/react'
import AuthenticatedLayout from "@/layouts/authenticated-layout"
import { LayoutProps } from '@/types/layout';
import routes from "@/config/routes";
import { joinInCapitalWords } from "@/hooks/get-page";

export const Layout = ({ children, documentName }: LayoutProps) => {
  const title = joinInCapitalWords(documentName, ' ', false)
  const breadcrumbs = title ? routes[title].breadcrumbs : []

  return (

    <AuthenticatedLayout breadcrumbs={breadcrumbs}>
      <Head title={documentName} />
      {children}
      <iframe width="560" height="315"
        src="https://www.youtube.com/embed/2fR3F9wIyTE?si=qm1LohT5NB5CkP3X"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </AuthenticatedLayout>
  )
}
