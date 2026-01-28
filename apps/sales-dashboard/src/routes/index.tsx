import { createFileRoute } from "@tanstack/react-router";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
	SidebarInset,
	SidebarProvider,
} from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
import { OverviewCards } from "@/components/overview-cards";
import { RevenueChart } from "@/components/revenue-chart";
import { SalesPipelineChart } from "@/components/sales-pipeline-chart";
import { RecentInvoicesTable } from "@/components/recent-invoices-table";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<div className="flex flex-1 flex-col">
					<DashboardHeader />
					<div>
						<div className="space-y-4 pb-4">
							<OverviewCards />
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
								<RevenueChart />
								<SalesPipelineChart />
							</div>
							<RecentInvoicesTable />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
