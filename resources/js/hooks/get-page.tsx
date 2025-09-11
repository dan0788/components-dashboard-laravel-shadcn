import { usePage, router } from "@inertiajs/react";
import routes from "@/config/routes";
import { BreadcrumbItemProps } from "@/types/layout";

interface PageData {
    title: string;
    breadcrumbs: BreadcrumbItemProps[];
}

export const usePageData = (): PageData => {
    const { component } = usePage();
    const pageKey = component as keyof typeof routes;
    const pageTitle = component.split('/');
    const ROUTE_KEY = pageTitle[pageTitle.length - 1];
    const data = routes[ROUTE_KEY];
    if (!data) {
        router.visit('/404', { replace: true });
        return {
            title: 'Cargando...',
            breadcrumbs: [],
        };
    }

    return data;
}