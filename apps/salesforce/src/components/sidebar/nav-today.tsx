import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavToday({
	items,
}: {
	items: {
		title: string;
		url: string;
		isActive?: boolean;
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Today</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<SidebarMenuItem key={item.title}>
						<SidebarMenuButton isActive={item.isActive}>
							<a href={item.url}>
								<span>{item.title}</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
