import * as React from "react"
import {
  IconChartBar,
  IconSettings,
  IconShield,
  IconPlug,
  IconSearch,
  IconChevronLeft,
  IconLayoutFilled,
  IconLaurelWreath1Filled,
  IconRefresh,
  IconDatabaseDollar,
  IconChartAreaLineFilled,
} from "@tabler/icons-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavSecondary } from "@/components/sidebar/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarInput,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"

const data = {
  general: [
    {
      title: "Home",
      url: "/",
      icon: IconLayoutFilled,
    },
    {
      title: "Opportunities",
      url: "/opportunities",
      icon: IconChartBar,
    },
    {
      title: "Leads",
      url: "/leads",
      icon: IconLaurelWreath1Filled,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: IconRefresh,
    },
    {
      title: "Files",
      url: "/files",
      icon: IconRefresh,
    },
    {
      title: "Campaign",
      url: "/campaign",
      icon: IconRefresh,
    },
    {
      title: "Dashboards",
      url: "/dashboards",
      icon: IconDatabaseDollar,
      isActive: true,
    },
    {
      title: "Reports",
      url: "/reports",
      icon: IconChartAreaLineFilled,
    },
    {
      title: "Chatter",
      url: "/chatter",
      icon: IconChartAreaLineFilled,
    },
  ],
  accounts: [
    {
      title: "Contact",
      url: "/contact",
      icon: IconRefresh,
    },
    {
      title: "Account",
      url: "/account",
      icon: IconRefresh,
    },
    {
      title: "Groups",
      url: "/groups",
      icon: IconChartAreaLineFilled,
    },
  ],
  settings: [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Access control",
      url: "/access-control",
      icon: IconShield,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: IconPlug,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <SidebarMenuButton size="lg" className="flex-1">
                <Link to="/" className="flex items-center gap-2 h-full w-full">
                  <img 
                    src="/logo.png" 
                    alt="Salesforce" 
                    className="h-6 w-auto"
                  />
                </Link>
              </SidebarMenuButton>
              <SidebarTrigger className="h-8 w-8">
                <IconChevronLeft className="size-4" />
              </SidebarTrigger>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div className="relative">
              <IconSearch className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <SidebarInput
                type="search"
                placeholder="Search..."
                className="pl-8"
              />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <NavMain items={data.general} />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Accounts</SidebarGroupLabel>
          <NavMain items={data.accounts} />
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <NavSecondary items={data.settings} />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
