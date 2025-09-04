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
          url: route('components.accordion'),
        },

        {
          title: "Alert",
          url: route('components.alert'),
        },
        {
          title: "AlertDialog",
          url: route('components.alert-dialog'),
        },
        {
          title: "Aspect Ratio",
          url: route('components.aspect-ratio'),
        },
        {
          title: "Avatar",
          url: route('components.avatar'),
        },
        {
          title: "Badge",
          url: route('components.badge'),
        },
        {
          title: "Breadcrumb",
          url: route('components.breadcrumb'),
        },
        {
          title: "Button",
          url: route('components.button'),
        },
        {
          title: "Calendar",
          url: route('components.calendar'),
        },
        {
          title: "Card",
          url: route('components.card'),
        },
        {
          title: "Carousel",
          url: route('components.carousel'),
        },
        {
          title: "Chart",
          url: route('components.chart'),
        },
        {
          title: "Checkbox",
          url: route('components.checkbox'),
        },
        {
          title: "Collapsible",
          url: route('components.collapsible'),
        },
        {
          title: "Combobox",
          url: route('components.combobox'),
        },
        {
          title: "Command",
          url: route('components.command'),
        },
        {
          title: "Context Menu",
          url: route('components.context-menu'),
        },
        {
          title: "Data Table",
          url: route('components.data-table'),
        },
        {
          title: "Date Picker",
          url: route('components.date-picker'),
        },
        {
          title: "Dialog",
          url: route('components.dialog'),
        },
        {
          title: "Drawer",
          url: route('components.drawer'),
        },
        {
          title: "Dropdown Menu",
          url: route('components.dropdown-menu'),
        },
        {
          title: "Hover Card",
          url: route('components.hover-card'),
        },
        {
          title: "Input",
          url: route('components.input'),
        },
        {
          title: "Input OTP",
          url: "#",
        },
        {
          title: "Label",
          url: "#",
        },
        {
          title: "Menubar",
          url: "#",
        },
        {
          title: "Navigation Menu",
          url: "#",
        },
        {
          title: "Pagination",
          url: "#",
        },
        {
          title: "Popover",
          url: "#",
        },
        {
          title: "Progress",
          url: "#",
        },
        {
          title: "Radio Group",
          url: "#",
        },
        {
          title: "Resizable",
          url: "#",
        },
        {
          title: "Scroll-area",
          url: "#",
        },
        {
          title: "Select",
          url: "#",
        },
        {
          title: "Separator",
          url: "#",
        },
        {
          title: "Sheet",
          url: "#",
        },
        {
          title: "Sidebar",
          url: "#",
        },
        {
          title: "Skeleton",
          url: "#",
        },
        {
          title: "Slider",
          url: "#",
        },
        {
          title: "Sonner",
          url: "#",
        },
        {
          title: "Switch",
          url: "#",
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
