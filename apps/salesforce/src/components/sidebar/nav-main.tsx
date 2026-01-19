import { Link } from "@tanstack/react-router";
import type * as React from "react";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
		isActive?: boolean;
	}[];
}) {
	return (
		<SidebarMenu>
			{items.map((item) => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton tooltip={item.title} isActive={item.isActive}>
						<Link
							to={item.url}
							className="flex h-full w-full items-center gap-2"
						>
							<item.icon className="size-4" />
							<span>{item.title}</span>
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);
}
