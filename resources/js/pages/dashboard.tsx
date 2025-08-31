import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import routes from "@/config/routes";

export default function Page() {

  const ROUTE_KEY = 'components.accordion';
  const myBreadcrumbs = routes[ROUTE_KEY].breadcrumbs;
  
  return (
    <AuthenticatedLayout breadcrumbs={myBreadcrumbs}>
      <Head title="Dashboard" />
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
      
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      
    </AuthenticatedLayout>

  );
}
