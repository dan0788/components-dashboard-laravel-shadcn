import { Head, Link, usePage } from '@inertiajs/react'
import AuthenticatedLayout from "@/layouts/authenticated-layout"
import { LayoutProps } from '@/types/layout';
import routes from "@/config/routes";
import { joinInCapitalWords } from "@/hooks/get-page";

export const Layout = ({ children, documentName, className }: LayoutProps) => {
  const title = joinInCapitalWords(documentName, ' ', '', false)
  const breadcrumbs = title ? routes[title].breadcrumbs : []

  return (

    <AuthenticatedLayout breadcrumbs={breadcrumbs}>
      <Head title={documentName} />
      <div className={className}>
        {children}
      </div>
    </AuthenticatedLayout>
  )
}
