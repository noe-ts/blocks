import { createFileRoute } from "@tanstack/react-router";
import { LinkIcon, Search, Share, Star } from "lucide-react";
import Home from "@/components/home";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-12 shrink-0 items-center justify-between gap-2 border-b">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className="hidden md:block">
									<BreadcrumbLink href="#">dbsq.fr</BreadcrumbLink>
								</BreadcrumbItem>
								/
								<BreadcrumbItem>
									<BreadcrumbItem>2 minutes ago</BreadcrumbItem>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className="flex items-center gap-2 px-4">
						<Button variant={"outline"} size="icon-sm">
							<Star className="size-3.5 fill-yellow-400 text-yellow-400" />
						</Button>
						<Button variant={"outline"} size="icon-sm">
							<LinkIcon className="size-3.5" />
						</Button>
						<Button size="sm">
							<Share className="size-3.5" />
							Share
						</Button>
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 pt-0">
					<Home />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
