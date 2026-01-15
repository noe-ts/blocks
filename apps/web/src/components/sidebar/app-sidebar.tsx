import * as React from "react"
import {
  BookOpen,
  Command,
  Gem,
  Home,
  MessageCircle,
  Rocket,
  Search,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { NavSecondary } from "@/components/sidebar/nav-secondary"
import { NavToday } from "@/components/sidebar/nav-today"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
import { Button } from "../ui/button"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Discover",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Spaces",
      url: "#",
      icon: Rocket,
    },
    {
      title: "Library",
      url: "#",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "Performance",
      url: "#",
      icon: "square" as const,
      color: "var(--teal-color)", // teal
    },
    {
      name: "Logs",
      url: "#",
      icon: "square" as const,
      color: "#8e5621", // brown/amber
    },
    {
      name: "Metrics",
      url: "#",
      icon: "square" as const,
      color: "#8f2059", // purple
    },
  ],
  today: [
    {
      title: "Travel tips to Japan",
      url: "#",
    },
    {
      title: "Places to go in Vienna",
      url: "#",
      isActive: true,
    },
    {
      title: "Give me a daily funfact",
      url: "#",
    },
  ],
  footer: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Feedback",
      url: "#",
      icon: MessageCircle,
    },
    {
      title: "Premium plan",
      url: "#",
      icon: Gem,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <SidebarMenuButton size="lg">
                <Link to="/" className="flex items-center gap-2 h-full w-full">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <span>A</span>
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme AI</span>
                  </div>
                </Link>
              </SidebarMenuButton>
              <Button variant={"outline"} size="icon-sm">
                <Search />
              </Button>
              <Button variant={"outline"} size="icon-sm">
                <SidebarTrigger />
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavToday items={data.today} />
        <NavSecondary items={data.footer} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
