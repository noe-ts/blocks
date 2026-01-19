import {
	IconArchiveFilled,
	IconBellFilled,
	IconInfoSquareRoundedFilled,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { DashboardFunnelChart } from "@/components/dashboard-funnel-chart";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile } from "@/components/user-profile";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center justify-between border-b bg-sidebar px-4">
					<h1 className="font-medium">Sales dashboard</h1>

					<div className="flex items-center gap-1">
						<Tabs className="h-8">
							<TabsList className="bg-muted-foreground/5 p-0">
								<TabsTrigger
									className="border border-muted-foreground/30"
									value="refresh"
								>
									Refresh
								</TabsTrigger>
								<TabsTrigger value="edit">Edit</TabsTrigger>
								<TabsTrigger value="subscribe">Subscribe</TabsTrigger>
							</TabsList>
						</Tabs>
						<div className="flex items-center">
							<Separator orientation="vertical" className="mx-2 h-4" />
						</div>
						<Button variant={"outline"} size="sm">
							<Star className="size-3.5 fill-yellow-400 text-yellow-400" />
							<span className="ml-1 text-muted-foreground">Favorite</span>
						</Button>
						<div className="flex items-center">
							<Separator orientation="vertical" className="mx-2 h-4" />
						</div>
						<div className="flex items-center gap-1">
							<Button variant={"outline"} size="icon-sm">
								<IconBellFilled className="size-3.5 text-muted-foreground" />
							</Button>
							<Button variant={"outline"} size="icon-sm">
								<IconArchiveFilled className="size-3.5 text-muted-foreground" />
							</Button>
							<Button variant={"outline"} size="icon-sm">
								<IconInfoSquareRoundedFilled className="size-3.5 text-muted-foreground" />
							</Button>
						</div>
						<div className="flex items-center">
							<Separator orientation="vertical" className="mx-2 h-4" />
						</div>
						<UserProfile />
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<div className="lg:col-span-2">
							<DashboardFunnelChart />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
