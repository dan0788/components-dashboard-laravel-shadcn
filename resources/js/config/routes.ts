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
    'accordion': {
        title: 'Accordion',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'Accordion' }
        ],
    },
    'alert-dialog': {
        title: 'AlertDialog',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'AlertDialog' }
        ],
    },
};

export default routes;