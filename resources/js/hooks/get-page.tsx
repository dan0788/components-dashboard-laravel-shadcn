import { usePage, router } from "@inertiajs/react";
import routes from "@/config/routes";
import { BreadcrumbItemProps } from "@/types/layout";

interface PageData {
    title: string;
    breadcrumbs?: BreadcrumbItemProps[];
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

export function detachInCapitalWords(frase: string, delimeter: string, firstWordCapital: boolean): string {
    const arrayFrases = frase.split(delimeter)
    const capitalFrases = arrayFrases.map((item, index) => {
        if (item.length === 0) {
            return '';
        }
        if (!firstWordCapital && index == 0) {
            return item.charAt(0).toLowerCase() + item.slice(1);
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
    })

    return capitalFrases.join(' ')
}

export function joinInCapitalWords(frase: string, delimeter: string, union: string, firstWordCapital: boolean): string {

    const arrayFrases = frase.split(delimeter)

    const capitalFrases = arrayFrases.map((item, index) => {
        if (item.length === 0) {
            return '';
        }
        if (!firstWordCapital && index == 0) {
            return item.charAt(0).toLowerCase() + item.slice(1);
        }
        return item.charAt(0).toUpperCase() + item.slice(1);
    })

    return capitalFrases.join(union)
}

export function detachFrasesCapitalWords(frase: string, firstWordCapital: boolean): string {
    const arrayFrases = frase.split('')
    const capitalFrases = arrayFrases.map((item, index) => {
        if (firstWordCapital && index == 0) {
            return item.charAt(0).toUpperCase();
        } else if (!firstWordCapital && index == 0){
            return item.charAt(0).toLowerCase();
        }
        if (item === item.toLowerCase() && index !== 0) {
            return item.charAt(0);
        }
        if (item === item.toUpperCase() && index !== 0) {
            return ' ' + item;
        }
    })
    return capitalFrases.join(' ');
}
