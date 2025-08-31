import { BreadcrumbItemProps } from "@/types/layout";

// Define la estructura para los datos de cada página
interface PageData {
    title: string;
    breadcrumbs: BreadcrumbItemProps[];
}

// Mapa de rutas global
const routes: Record<string, PageData> = {
    'dashboard': {
        title: 'Dashboard',
        breadcrumbs: [
            { label: 'Dashboard' }
        ],
    },
    'components.accordion': {
        title: 'Accordion',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'Accordion' }
        ],
    },
    // Añade aquí más rutas y sus migas de pan
    'components.button': {
        title: 'Botón',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Button' }
        ],
    },
};

export default routes;