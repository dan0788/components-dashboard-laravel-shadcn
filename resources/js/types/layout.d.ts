import { PropsWithChildren, ReactNode } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

// Interfaz para cada ítem del breadcrumb
export interface BreadcrumbItemProps {
    label: string;
    href?: string;
}

// Interfaz para las props del layout autenticado
//, Record<string, any> permite usar ...rest
export interface AuthenticatedLayoutProps
    extends PropsWithChildren,
        Record<string, any> {
    header?: ReactNode;
    breadcrumbs?: BreadcrumbItemProps[];
}

export interface FieldData<TFieldValues extends FieldValues> {
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
}

export interface UserProps {
    id: number;
    username: string;
    email: string;
    password: string;
    pin: string | null;
    avatar: string | null;
    firstname: string | null;
    lastname: string | null;
    dateofbirth: string | null;
    sex: "Male" | "Female";
    notifications: boolean | null;
}

export interface ContactProps {
    user_id: number;
    type: string;
    country: string;
    prefix: string;
    number: string;
}

export interface LayoutProps {
    children: ReactNode;
}