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
} from "lucide-react";
import * as React from "react";

const AscendIcon = React.forwardRef<
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
		<circle cx="12" cy="12" r="10" fill="currentColor" />
	</svg>
));
AscendIcon.displayName = "AscendIcon";

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
	SidebarTrigger,
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
						<SidebarMenuButton size="lg">
							<Link to="/" className="flex h-full w-full items-center gap-2">
								<div className="flex aspect-square size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
									<AscendIcon className="size-6" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Ascend Inc.</span>
									<span className="truncate text-xs text-muted-foreground flex items-center gap-1">
										Accounting
										<ChevronRight className="size-3" />
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<div className="px-2 py-2">
					<div className="text-xs font-medium text-muted-foreground mb-2 px-2">
						MAIN MENU
					</div>
					<NavMain items={data.navMain} />
				</div>
				<div className="px-2 py-2">
					<div className="text-xs font-medium text-muted-foreground mb-2 px-2">
						ANALYTICS
					</div>
					<NavSecondary items={data.analytics} />
				</div>
				{showPremium && (
					<div className="px-2 py-2 mt-auto">
						<div className="relative bg-muted rounded-lg p-3">
							<Button
								variant="ghost"
								size="icon"
								className="absolute top-1 right-1 size-5 h-5 w-5"
								onClick={() => setShowPremium(false)}
							>
								<X className="size-3" />
							</Button>
							<div className="flex items-start gap-2 pr-6">
								<AppWindow className="size-5 text-primary mt-0.5" />
								<div className="flex-1 space-y-1">
									<div className="text-sm font-medium">Premium subscription</div>
									<div className="text-xs text-muted-foreground">
										Upgrade now
										<ChevronRight className="size-3 inline-block ml-1" />
									</div>
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
						<SidebarMenuButton size="lg">
							<Link to="/" className="flex h-full w-full items-center gap-2">
								<Avatar className="size-8">
									<AvatarFallback>SF</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium flex items-center gap-1">
										{data.user.name}
										<CheckCircle2 className="size-3 text-green-500" />
									</span>
									<span className="truncate text-xs text-muted-foreground">
										{data.user.email}
									</span>
								</div>
								<ChevronRight className="size-4" />
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
