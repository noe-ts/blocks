import { createFileRoute } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider
} from "@/components/ui/sidebar";
import { AIPlatformMetrics } from "@/components/ai-platform-metrics";
import { UniqueVisitorsChart } from "@/components/unique-visitors-chart";
import { CitationRankList } from "@/components/citation-rank-list";
import { AIVisibilityScoreChart } from "@/components/ai-visibility-score-chart";
import { AIReferralVisitorsChart } from "@/components/ai-referral-visitors-chart";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-6 bg-sidebar">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-medium">Overview</h1>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Globe className="size-3.5" />
                <span className="font-mono text-xs">dbsq.fr</span>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 overflow-auto bg-sidebar">
          <AIPlatformMetrics />

          <div className="grid grid-cols-2 gap-6">
            <UniqueVisitorsChart />
            <CitationRankList />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <AIVisibilityScoreChart />
            <AIReferralVisitorsChart />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
