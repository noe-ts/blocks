import { Plus, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Link } from "@tanstack/react-router"

export function NavProjects({
  projects,
}: {
  projects: (
    | {
        name: string
        url: string
        icon: LucideIcon
        color?: never
      }
    | {
        name: string
        url: string
        icon: "square"
        color: string
      }
  )[]
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton>
              <Link to={item.url} className="flex items-center gap-2 h-full w-full">
                {item.icon === "square" ? (
                  <div
                    className="size-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                ) : (
                  <item.icon />
                )}
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Plus />
            <span>Add projects</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
