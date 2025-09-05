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
    'calendar': {
        title: 'Calendar',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Calendar' }
        ],
    },
    'card': {
        title: 'Card',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Card' }
        ],
    },
    'carousel': {
        title: 'Carousel',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Carousel' }
        ],
    },
    'chart': {
        title: 'Chart',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Chart' }
        ],
    },
    'checkbox': {
        title: 'Checkbox',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Checkbox' }
        ],
    },
    'collapsible': {
        title: 'Collapsible',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Collapsible' }
        ],
    },
    'combobox': {
        title: 'Combobox',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Combobox' }
        ],
    },
    'command': {
        title: 'Command',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Command' }
        ],
    },
    'context-menu': {
        title: 'ContextMenu',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'ContextMenu' }
        ],
    },
    'data-table': {
        title: 'DataTable',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'DataTable' }
        ],
    },
    'date-picker': {
        title: 'DatePicker',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'DatePicker' }
        ],
    },
    'dialog': {
        title: 'Dialog',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Dialog' }
        ],
    },
    'drawer': {
        title: 'Drawer',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Drawer' }
        ],
    },
    'dropdown-menu': {
        title: 'DropdownMenu',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'DropdownMenu' }
        ],
    },
    'hover-card': {
        title: 'HoverCard',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'HoverCard' }
        ],
    },
    'input': {
        title: 'Input',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Input' }
        ],
    },
    'input-otp': {
        title: 'InputOTP',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'InputOTP' }
        ],
    },
    'label': {
        title: 'Label',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Label' }
        ],
    },
    'menubar': {
        title: 'Menubar',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Menubar' }
        ],
    },
    'navigation-menu': {
        title: 'NavigationMenu',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'NavigationMenu' }
        ],
    },
    'pagination': {
        title: 'Pagination',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Pagination' }
        ],
    },
    'popover': {
        title: 'Popover',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Popover' }
        ],
    },
    'progress': {
        title: 'Progress',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Progress' }
        ],
    },
    'radio-group': {
        title: 'RadioGroup',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'RadioGroup' }
        ],
    },
    'resizable': {
        title: 'Resizable',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'Resizable' }
        ],
    },
    'scroll-area': {
        title: 'ScrollArea',
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: 'ScrollArea' }
        ],
    },
};

export default routes;