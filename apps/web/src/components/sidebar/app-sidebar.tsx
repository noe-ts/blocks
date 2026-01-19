import {
	BookOpen,
	Home,
	MessageCircle,
	Rocket,
	Search,
	Settings2,
} from "lucide-react";
import * as React from "react";

const DiamondIcon = React.forwardRef<
	SVGSVGElement,
	React.SVGProps<SVGSVGElement>
>((props, ref) => (
	<svg
		ref={ref}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 14 14"
		height="14"
		width="14"
		{...props}
	>
		<desc>Diamond 2 Streamline Icon: https://streamlinehq.com</desc>
		<g id="diamond-2--diamond-money-payment-finance-wealth-jewelry">
			<path
				id="Subtract"
				fill="currentColor"
				fillRule="evenodd"
				d="M6.40794 1.03998h1.21284l1.71711 3.69076H4.68377l1.72417 -3.69076ZM3.30409 4.73074l1.72418 -3.69076H3.36001v-0.00019l-0.01372 0.00038c-0.24627 0.00676 -0.48748 0.07138 -0.70415 0.18864 -0.21511 0.11641 -0.40003 0.28147 -0.54003 0.48197L0.284674 4.22724l-0.000019 -0.00002 -0.002785 0.00394c-0.107762 0.15228 -0.1863858 0.32165 -0.2333776 0.49958H3.30409Zm-3.050343 1.25H3.27787l1.92154 6.16036L0.364828 6.12886c-0.040107 -0.04731 -0.077174 -0.09678 -0.111081 -0.14812Zm4.333523 0h4.8466L7.10325 13.4833c-0.0343 0.0024 -0.06873 0.0036 -0.10324 0.0036 -0.02403 0 -0.04802 -0.0006 -0.07197 -0.0018L4.58727 5.98074Zm6.15553 0L8.84707 12.0833l4.78813 -5.95443c0.0401 -0.04731 0.0772 -0.09679 0.1111 -0.14813h-3.0035Zm3.2087 -1.25c-0.047 -0.17793 -0.1256 -0.3473 -0.2333 -0.49958l0 -0.00001 -0.0028 -0.00391 -1.8175 -2.51646c-0.14 -0.20051 -0.3249 -0.36556 -0.54 -0.48197 -0.2167 -0.11726 -0.4579 -0.18188 -0.7042 -0.18864l0 -0.00019H8.99944l1.71706 3.69076h3.235Z"
				clipRule="evenodd"
				strokeWidth="1"
			/>
		</g>
	</svg>
));
DiamondIcon.displayName = "DiamondIcon";

import { Link } from "@tanstack/react-router";
import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import { NavToday } from "@/components/sidebar/nav-today";
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
			title: "Places to go in Paris",
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
			icon: DiamondIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<div className="flex items-center gap-1">
							<SidebarMenuButton size="lg">
								<Link to="/" className="flex h-full w-full items-center gap-2">
									<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
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
			<SidebarFooter></SidebarFooter>
		</Sidebar>
	);
}
