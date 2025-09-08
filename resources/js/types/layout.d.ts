import { PropsWithChildren, ReactNode } from "react";
import { ControllerRenderProps, FieldPath, FieldValues } from "react-hook-form";

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

export interface FieldData<TFieldValues extends FieldValues> {
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
}