import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";

const myBreadcrumbs = [
  { label: 'Dashboard'}, // El último no tiene link
];

export default function Page() {
  return (
    <AuthenticatedLayout breadcrumbs={myBreadcrumbs}>
      <Head title="Dashboard" />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </AuthenticatedLayout>

  );
}
