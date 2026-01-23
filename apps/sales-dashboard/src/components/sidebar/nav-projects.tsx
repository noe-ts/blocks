import { Link } from "@tanstack/react-router";
import { type LucideIcon, Plus } from "lucide-react";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavProjects({
	projects,
}: {
	projects: (
		| {
				name: string;
				url: string;
				icon: LucideIcon;
				color?: never;
		  }
		| {
				name: string;
				url: string;
				icon: "square";
				color: string;
		  }
	)[];
}) {
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Projects</SidebarGroupLabel>
			<SidebarMenu>
				{projects.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton>
							<Link
								to={item.url}
								className="flex h-full w-full items-center gap-2"
							>
								{item.icon === "square" ? (
									<div
										className="size-3 rounded"
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
	);
}
