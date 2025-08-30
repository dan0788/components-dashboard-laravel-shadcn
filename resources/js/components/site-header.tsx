"use client"

import { SidebarIcon } from "lucide-react"
import AppearanceDropdown from "@/components/appearance-dropdown";
import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import React from "react";
import { AuthenticatedLayoutProps } from "@/types/layout";

export function SiteHeader({
    header,
    children,
    breadcrumbs = [], // Asigna un valor por defecto para evitar errores,
    ...rest
}: AuthenticatedLayoutProps) {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem>
                        {/* El último ítem no tiene link */}
                        {item.href ? (
                            <BreadcrumbLink href={item.href}>
                                {item.label}
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                    {/* Evita renderizar el separador después del último ítem */}
                    {index < breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                    )}
                </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-1 justify-end items-center gap-4">
          <div>
            <AppearanceDropdown className="w-full sm:ml-auto sm:w-auto" />
          </div>
          <div>
            <SearchForm className="w-full sm:ml-auto sm:w-auto" />
          </div>
        </div>

      </div>
    </header>
  )
}
