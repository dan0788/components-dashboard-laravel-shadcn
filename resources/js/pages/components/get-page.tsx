import { usePage } from "@inertiajs/react";
import routes from "@/config/routes";
import { BreadcrumbItemProps } from "@/types/layout";

interface PageData {
    title: string;
    breadcrumbs: BreadcrumbItemProps[];
}

export const usePageData = ():PageData=>{
    const { component } = usePage();
    const pageKey = component as keyof typeof routes;
    const pageTitle = component.split('/');
    const ROUTE_KEY = pageTitle[pageTitle.length - 1];
    const data = routes[ROUTE_KEY];
    if (!data) {
        return {
            title: 'Página no encontrada',
            breadcrumbs: [{ label: 'Inicio', href: '/' }, { label: '404' }],
        };
    }

    return data;
}

/* const { component } = usePage();
    const pathParts = component.split('/');
    const ROUTE_KEY = pathParts[pathParts.length - 1];
    const myBreadcrumbs = routes[ROUTE_KEY].breadcrumbs; */