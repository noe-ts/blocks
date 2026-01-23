import {
  LayoutDashboard,
  Clock,
  BarChart3,
  TrendingUp,
  GitBranch,
  Wifi,
  Users,
  FileText,
  Settings,
  BookOpen,
  ChevronRight,
  X,
  CheckCircle2,
  AppWindow,
  Atom,
  ChevronsUpDown,
} from "lucide-react";
import * as React from "react";

import { Link } from "@tanstack/react-router";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

const data = {
  user: {
    name: "Scarlett Felicity",
    email: "felicityyy@mail.com",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Time Tracking",
      url: "#",
      icon: Clock,
    },
    {
      title: "Daily Reports",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "Data Analysis",
      url: "#",
      icon: TrendingUp,
    },
    {
      title: "Key Metrics",
      url: "#",
      icon: GitBranch,
    },
  ],
  analytics: [
    {
      title: "Traffic Sources",
      url: "#",
      icon: Wifi,
    },
    {
      title: "User Engagement",
      url: "#",
      icon: Users,
    },
    {
      title: "Content Overview",
      url: "#",
      icon: FileText,
    },
  ],
  footer: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Documentations",
      url: "#",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [showPremium, setShowPremium] = React.useState(true);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent">
              <div className="flex h-full w-full items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-full bg-[var(--chart-1)] text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  <Atom className="size-5 relative z-10" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Ascend Inc.</span>
                  <span className="truncate text-xs text-muted-foreground">
                    Accounting
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="h-7 w-7 text-muted-foreground hover:bg-muted"
                >
                  <ChevronsUpDown className="size-3" />
                </Button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-2 py-2">
          <div className="text-xs font-medium text-muted-foreground/60 mb-2 px-2">
            MAIN MENU
          </div>
          <NavMain items={data.navMain} />
        </div>
        <div className="px-2 py-2">
          <div className="text-xs font-medium text-muted-foreground/60 mb-2 px-2">
            ANALYTICS
          </div>
          <NavSecondary items={data.analytics} />
        </div>
        {showPremium && (
          <div className="px-2 py-2 mt-auto">
            <div className="relative bg-card rounded-lg p-4 shadow-sm border border-border">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 size-5 h-5 w-5 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPremium(false)}
              >
                <X className="size-3" />
              </Button>
              <div className="flex items-start gap-3 pr-6">
                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-[var(--chart-1)] text-white relative overflow-hidden mt-0.5">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                  <AppWindow className="size-4 relative z-10" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="text-sm font-medium">Premium subscription</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Upgrade and get instant access to premium benefits.
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-xs font-medium text-[var(--chart-1)] hover:underline"
                  >
                    Upgrade now
                    <ChevronRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="px-2 py-2">
          <NavSecondary items={data.footer} />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="hover:bg-transparent">
              <Link to="/" className="flex h-full w-full items-center gap-3">
                <Avatar className="size-8">
                  <AvatarFallback>SF</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium flex items-center gap-1.5">
                    {data.user.name}
                    <CheckCircle2 className="size-3.5 text-blue-500 fill-blue-500" />
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {data.user.email}
                  </span>
                </div>
                <ChevronRight className="size-4 text-muted-foreground" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
