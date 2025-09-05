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
};

// Arreglo de los nombres de los componentes con guiones (para las claves)
const componentKeys = [
    'accordion', 'alert', 'alert-dialog', 'aspect-ratio', 'avatar', 'badge', 
    'breadcrumb', 'button', 'calendar', 'card', 'carousel', 'chart', 'checkbox', 
    'collapsible', 'combobox', 'command', 'context-menu', 'data-table', 
    'date-picker', 'dialog', 'drawer', 'dropdown-menu', 'hover-card', 'input', 
    'input-otp', 'label', 'menubar', 'navigation-menu', 'pagination', 
    'popover', 'progress', 'radio-group', 'resizable', 'scroll-area', 
    'select', 'separator', 'sheet', 'skeleton', 'slider', 'sonner', 'switch', 'table', 'tabs',
    'text-area'
];

// Función para formatear el título y el breadcrumb a partir del nombre
const formatName = (key: string): string => {
    // Convierte 'alert-dialog' a 'Alert Dialog' y 'button' a 'Button'
    return key
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Itera sobre el arreglo para generar las rutas dinámicamente
componentKeys.forEach(key => {
    const formattedName = formatName(key);
    
    // Asigna la información al objeto de rutas
    routes[key] = {
        title: formattedName.replace(/\s/g, ''), // Título sin espacios
        breadcrumbs: [
            { label: 'Home', href: '/home' },
            { label: 'Components' },
            { label: formattedName }
        ],
    };
});

export default routes;