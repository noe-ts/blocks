import {
  IconArchiveFilled,
  IconBellFilled,
  IconInfoSquareRoundedFilled,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserProfile } from "@/components/user-profile";
import { SalesByMonthChart } from "@/components/sales-by-month-chart";
import { PotentialSalesByStageChart } from "@/components/potential-sales-by-stage-chart";
import { TotalPotentialSalesMetric } from "@/components/total-potential-sales-metric";
import { TotalSalesMetric } from "@/components/total-sales-metric";
import { ExpectedRevenueByAccountChart } from "@/components/expected-revenue-by-account-chart";
import { SalesByLeadSourcesChart } from "@/components/sales-by-lead-sources-chart";
import { SalesByRegionChart } from "@/components/sales-by-region-chart";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-screen">
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
        <div className="flex-1 overflow-hidden grid grid-cols-4 grid-rows-2 h-[calc(100vh-64px)] w-full">
          <div className="col-span-2 border-r border-b min-h-0 overflow-hidden">
            <SalesByMonthChart />
          </div>

          <div className="col-span-1 border-r border-b min-h-0 overflow-hidden">
            <PotentialSalesByStageChart />
          </div>

          <div className="col-span-1 flex flex-col border-b min-h-0 overflow-hidden">
            <div className="flex-1 border-b min-h-0 overflow-hidden">
              <TotalPotentialSalesMetric />
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <TotalSalesMetric />
            </div>
          </div>
          <div className="col-span-1 border-r min-h-0 overflow-hidden">
            <ExpectedRevenueByAccountChart />
          </div>
          <div className="col-span-2 border-r min-h-0 overflow-hidden">
            <SalesByLeadSourcesChart />
          </div>
          <div className="col-span-1 min-h-0 overflow-hidden">
            <SalesByRegionChart />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
