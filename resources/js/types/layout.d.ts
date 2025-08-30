import { PropsWithChildren, ReactNode } from "react";

// Interfaz para cada ítem del breadcrumb
export interface BreadcrumbItemProps {
  label: string;
  href?: string;
}

// Interfaz para las props del layout autenticado
//, Record<string, any> permite usar ...rest
export interface AuthenticatedLayoutProps extends PropsWithChildren, Record<string, any> {
  header?: ReactNode;
  breadcrumbs?: BreadcrumbItemProps[];
}