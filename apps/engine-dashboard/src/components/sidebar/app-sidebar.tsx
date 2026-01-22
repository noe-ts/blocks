import {
  IconAppsFilled,
  IconBoltFilled,
  IconFilePencilFilled,
  IconChartPieFilled,
  IconBulbFilled,
  IconUserFilled,
  IconArrowIteration,
  IconBubbleFilled,
  IconArrowFork,
  IconHelpSquareRoundedFilled,
  IconRosetteDiscountCheckFilled,
  IconAtom2Filled,
} from "@tabler/icons-react";
import * as React from "react";
import { Link } from "@tanstack/react-router";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";

const AcmeIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    />
  </svg>
));
AcmeIcon.displayName = "AcmeIcon";

const data = {
  analytics: [
    {
      title: "Overview",
      url: "/",
      icon: IconAppsFilled,
      shortcut: "D",
      isActive: true,
    },
    {
      title: "Engine",
      url: "#",
      icon: IconBoltFilled,
      shortcut: "V",
    },
    {
      title: "Prompt",
      url: "#",
      icon: IconFilePencilFilled,
      shortcut: "F",
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconUserFilled,
      shortcut: "C",
    },
    {
      title: "Report",
      url: "#",
      icon: IconChartPieFilled,
      shortcut: "W",
    },
  ],
  actions: [
    {
      title: "Opportunities",
      url: "#",
      icon: IconBulbFilled,
    },
    {
      title: "Workflows",
      url: "#",
      icon: IconArrowIteration,
    },
    {
      title: "Brand Hub",
      url: "#",
      icon: IconBubbleFilled,
    },
  ],
  footer: [
    {
      title: "Installation",
      url: "#",
      icon: IconArrowFork,
    },
    {
      title: "Support",
      url: "#",
      icon: IconHelpSquareRoundedFilled,
    },
    {
      title: "What's New",
      url: "#",
      icon: IconRosetteDiscountCheckFilled,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="border-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <SidebarMenuButton size="lg" className="flex-1">
                <Link to="/" className="flex h-full w-full items-center gap-2">
                  <IconAtom2Filled />
                  <span className="text-xl font-medium">Acme Inc</span>
                </Link>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn(
                "w-full justify-start border border-dashed bg-white",
              )}
            >
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-sm bg-blue-500" />
                <span className="text-sm">Ace Studio</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ANALYTICS</SidebarGroupLabel>
          <SidebarMenu>
            {data.analytics.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  isActive={item.isActive}
                  className="w-full justify-between"
                >
                  <Link
                    to={item.url}
                    className={cn(
                      "flex h-full w-full items-center gap-2 font-medium text-sm",
                      !item.isActive && "text-muted-foreground",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "size-4",
                        !item.isActive && "text-muted-foreground",
                      )}
                    />
                    <span className={cn(!item.isActive && "text-muted-foreground")}>
                      {item.title}
                    </span>
                  </Link>
                  {item.shortcut && (
                    <Kbd className="hidden sm:flex border border-dashed bg-white font-mono text-xs text-muted-foreground">{item.shortcut}</Kbd>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>ACTIONS</SidebarGroupLabel>
          <SidebarMenu>
            {data.actions.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton tooltip={item.title}>
                  <Link
                    to={item.url}
                    className="flex h-full w-full items-center gap-2 text-muted-foreground font-medium text-sm"
                  >
                    <item.icon className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground font-medium text-sm">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <NavSecondary items={data.footer} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
