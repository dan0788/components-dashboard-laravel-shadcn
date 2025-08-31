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
    'alert': {
        title: 'Alert',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'Alert' }
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
    'aspect-ratio': {
        title: 'AspectRatio',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'AspectRatio' }
        ],
    },
    'avatar': {
        title: 'Avatar',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'Avatar' }
        ],
    },
    'badge': {
        title: 'Badge',
        breadcrumbs: [
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Components' },
            { label: 'Badge' }
        ],
    },
};

export default routes;