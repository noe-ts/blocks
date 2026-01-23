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
import { IncomeCategoryChart } from "@/components/income-category-chart";
import { TopProducts } from "@/components/top-products";
import { AccountsReceivableChart } from "@/components/accounts-receivable-chart";
import { RecentInvoices } from "@/components/recent-invoices";

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
					<div className="flex-1 overflow-auto">
						<div className="space-y-6 pb-6">
							<OverviewCards />
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
								<RevenueChart />
								<SalesPipelineChart />
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
								<IncomeCategoryChart />
								<TopProducts />
								<AccountsReceivableChart />
							</div>
							<div className="px-6">
								<RecentInvoices />
							</div>
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
