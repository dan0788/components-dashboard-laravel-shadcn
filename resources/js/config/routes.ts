import { BreadcrumbItemProps } from "@/types/layout";

// Define la estructura para los datos de cada página
interface PageData {
    title: string;
    breadcrumbs: BreadcrumbItemProps[];
}

// Mapa de rutas global
const routes: Record<string, PageData> = {
    'home': {
        title: 'Home',
        breadcrumbs: [
            { label: 'Home' }
        ],
    },
    'accordion': {
        title: 'Accordion',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Accordion' }
        ],
    },
    'alert': {
        title: 'Alert',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Alert' }
        ],
    },
    'alert-dialog': {
        title: 'AlertDialog',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'AlertDialog' }
        ],
    },
    'aspect-ratio': {
        title: 'AspectRatio',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'AspectRatio' }
        ],
    },
    'avatar': {
        title: 'Avatar',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Avatar' }
        ],
    },
    'badge': {
        title: 'Badge',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Badge' }
        ],
    },
    'breadcrumb': {
        title: 'Breadcrumb',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Breadcrumb' }
        ],
    },
    'button': {
        title: 'Button',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Button' }
        ],
    },
};

export default routes;