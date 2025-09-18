import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head, Link } from "@inertiajs/react";
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { usePageData } from "@/hooks/get-page"
import ComponentsPage from '@/pages/components'
import { ReactNode } from "react";

export const CalendarPage = () => {
  const pageData = usePageData();
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <Head title={pageData.title} />
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-8">Component: {pageData.title}</h1>
        <div className="flex justify-center w-full max-w-xl mx-auto rounded-lg shadow-md bg-card text-card-foreground p-6">

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />

        </div>
      </div>
    </>
  );
}

CalendarPage.components = (page: ReactNode) => <ComponentsPage title="Calendar" children={page} />