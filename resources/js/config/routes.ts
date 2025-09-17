import { BreadcrumbItemProps } from "@/types/layout";

// Define la estructura para los datos de cada página
interface PageData {
    title: string;
    breadcrumbs: BreadcrumbItemProps[];
}

// Mapa de rutas global
const routes: Record<string, PageData> = {
    home: {
        title: "Home",
        breadcrumbs: [{ label: "Home" }],
    },
    edit: {
        title: "Profile",
        breadcrumbs: [
            { label: "Home", href: "/home" },
            { label: "Profile", href: "/profile" },
            { label: "Edit" },
        ],
    },
    components: {
        title: "Components",
        breadcrumbs: [
            { label: "Home", href: "/home" },
            { label: "Components" },
        ],
    },
};

// Arreglo de los nombres de los componentes con guiones (para las claves)
export const componentKeys = [
    "accordion",
    "alert",
    "alert-dialog",
    "aspect-ratio",
    "avatar",
    "badge",
    "breadcrumb",
    "button",
    "calendar",
    "card",
    "carousel",
    "chart",
    "checkbox",
    "collapsible",
    "combobox",
    "command",
    "context-menu",
    "data-table",
    "date-picker",
    "dialog",
    "drawer",
    "dropdown-menu",
    "hover-card",
    "input",
    "input-otp",
    "label",
    "menubar",
    "navigation-menu",
    "pagination",
    "popover",
    "progress",
    "radio-group",
    "resizable",
    "scroll-area",
    "select",
    "separator",
    "sheet",
    "skeleton",
    "slider",
    "sonner",
    "switch",
    "table",
    "tabs",
    "text-area",
    "toggle",
    "toggle-group",
    "tooltip",
    "typography",
];

// Función para formatear el título y el breadcrumb a partir del nombre
export const formatName = (key: string): string => {
    // Convierte 'alert-dialog' a 'Alert Dialog' y 'button' a 'Button'
    return key
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

/* componentKeys.forEach((key) => {
    const formattedName = formatName(key);

    routes[key] = {
        title: formattedName.replace(/\s/g, ""),
        breadcrumbs: [
            { label: "Home", href: "/home" },
            { label: "Components" },
            { label: formattedName },
        ],
    };
}); */

export default routes;
