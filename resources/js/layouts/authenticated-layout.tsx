import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import { AuthenticatedLayoutProps } from "@/types/layout";

export default function AuthenticatedLayout({
    header,
    children,
    breadcrumbs = [], // Asigna un valor por defecto para evitar errores,
    ...rest
}: AuthenticatedLayoutProps) {
    return (

        <div className="[--header-height:calc(theme(spacing.14))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader breadcrumbs={breadcrumbs} />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            {children}
                        </div>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>

    );
}