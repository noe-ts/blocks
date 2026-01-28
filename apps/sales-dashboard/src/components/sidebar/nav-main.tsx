import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
		isActive?: boolean;
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.title}>
						<div className="relative">
							{/* Purple vertical bar for active state - extends beyond top/bottom */}
							{item.isActive && (
								<div className="absolute -left-4 top-1/2 -translate-y-1/2 h-6 w-1 bg-[var(--chart-1)] z-10 rounded-r-md" />
							)}
							<SidebarMenuButton
								tooltip={item.title}
								isActive={item.isActive}
								className={cn(
									"relative",
									item.isActive &&
										"bg-muted rounded-r-md text-primary [&_a_svg]:text-[var(--chart-1)]",
									!item.isActive && "text-muted-foreground",
								)}
							>
								<Link
									to={item.url}
									className="flex h-full w-full items-center gap-2 justify-between"
								>
									<div className="flex items-center gap-2">
										<item.icon className="size-4" />
										<span className="font-medium">{item.title}</span>
									</div>
									{item.isActive && (
										<ChevronRight className="size-4 text-[var(--chart-1)]" />
									)}
								</Link>
							</SidebarMenuButton>
						</div>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
