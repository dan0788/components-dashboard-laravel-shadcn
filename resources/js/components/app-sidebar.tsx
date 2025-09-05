"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Puzzle,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/nilou.png"
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      icon: Puzzle,
      items: [
        {
          title: "Accordion",
          url: route('components.show', 'accordion'),
        },

        {
          title: "Alert",
          url: route('components.show', 'alert'),
        },
        {
          title: "AlertDialog",
          url: route('components.show', 'alert-dialog'),
        },
        {
          title: "Aspect Ratio",
          url: route('components.show', 'aspect-ratio'),
        },
        {
          title: "Avatar",
          url: route('components.show', 'avatar'),
        },
        {
          title: "Badge",
          url: route('components.show', 'badge'),
        },
        {
          title: "Breadcrumb",
          url: route('components.show', 'breadcrumb'),
        },
        {
          title: "Button",
          url: route('components.show', 'button'),
        },
        {
          title: "Calendar",
          url: route('components.show', 'calendar'),
        },
        {
          title: "Card",
          url: route('components.show', 'card'),
        },
        {
          title: "Carousel",
          url: route('components.show', 'carousel'),
        },
        {
          title: "Chart",
          url: route('components.show', 'chart'),
        },
        {
          title: "Checkbox",
          url: route('components.show', 'checkbox'),
        },
        {
          title: "Collapsible",
          url: route('components.show', 'collapsible'),
        },
        {
          title: "Combobox",
          url: route('components.show', 'combobox'),
        },
        {
          title: "Command",
          url: route('components.show', 'command'),
        },
        {
          title: "Context Menu",
          url: route('components.show', 'context-menu'),
        },
        {
          title: "Data Table",
          url: route('components.show', 'data-table'),
        },
        {
          title: "Date Picker",
          url: route('components.show', 'date-picker'),
        },
        {
          title: "Dialog",
          url: route('components.show', 'dialog'),
        },
        {
          title: "Drawer",
          url: route('components.show', 'drawer'),
        },
        {
          title: "Dropdown Menu",
          url: route('components.show', 'dropdown-menu'),
        },
        {
          title: "Hover Card",
          url: route('components.show', 'hover-card'),
        },
        {
          title: "Input",
          url: route('components.show', 'input'),
        },
        {
          title: "Input OTP",
          url: route('components.show', 'input-otp'),
        },
        {
          title: "Label",
          url: route('components.show', 'label'),
        },
        {
          title: "Menubar",
          url: route('components.show', 'menubar'),
        },
        {
          title: "Navigation Menu",
          url: route('components.show', 'navigation-menu'),
        },
        {
          title: "Pagination",
          url: route('components.show', 'pagination'),
        },
        {
          title: "Popover",
          url: route('components.show', 'popover'),
        },
        {
          title: "Progress",
          url: route('components.show', 'progress'),
        },
        {
          title: "Radio Group",
          url: route('components.show', 'radio-group'),
        },
        {
          title: "Resizable",
          url: route('components.show', 'resizable'),
        },
        {
          title: "Scroll-area",
          url: route('components.show', 'scroll-area'),
        },
        {
          title: "Select",
          url: route('components.show', 'select'),
        },
        {
          title: "Separator",
          url: route('components.show', 'separator'),
        },
        {
          title: "Sheet",
          url: route('components.show', 'sheet'),
        },
        {
          title: "Skeleton",
          url: route('components.show', 'skeleton'),
        },
        {
          title: "Slider",
          url: route('components.show', 'slider'),
        },
        {
          title: "Sonner",
          url: route('components.show', 'sonner'),
        },
        {
          title: "Switch",
          url: route('components.show', 'switch'),
        },
        {
          title: "Table",
          url: "#",
        },
        {
          title: "Tabs",
          url: "#",
        },
        {
          title: "Textarea",
          url: "#",
        },
        {
          title: "Toast",
          url: "#",
        },
        {
          title: "Toggle",
          url: "#",
        },
        {
          title: "Toggle Group",
          url: "#",
        },
        {
          title: "Tooltip",
          url: "#",
        },
        {
          title: "Typography",
          url: "#",
        },


      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href={route('home')}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

const getComponentName = (title: String) => {
    // Convierte el título a minúsculas y reemplaza los espacios con guiones
    return title.toLowerCase().replace(/\s/g, '-');
};