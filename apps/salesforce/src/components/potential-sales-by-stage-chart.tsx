import { Sparkles, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FunnelChart,
	type FunnelChartConfig,
} from "@/components/ui/funnel-chart";
import { funnelData } from "@/lib/chart-data";
import { Button } from "@/components/ui/button";

const chartConfig = {
	prospecting: {
		label: "Prospecting",
	},
	qualification: {
		label: "Qualification",
	},
	analysis: {
		label: "Analysis",
	},
	valueproposition: {
		label: "Value proposition",
	},
	pricequote: {
		label: "Price quote",
	},
} satisfies FunnelChartConfig;

// Colors matching the design
const colors = [
	"#22d3ee", // Cyan - Prospecting
	"#93c5fd", // Light blue - Qualification
	"#a855f7", // Purple - Analysis
	"#d8b4fe", // Light purple - Value proposition
	"#5eead4", // Teal - Price quote
];

export function PotentialSalesByStageChart() {
	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Sparkles className="size-4 text-muted-foreground" />
						<CardTitle>Potential sales by stage</CardTitle>
					</div>
					<Button
						variant="ghost"
						size="icon"
						className="size-8"
						aria-label="More options"
					>
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex-1 flex flex-col min-h-0">
				<FunnelChart
					data={funnelData}
					config={chartConfig}
					colors={colors}
					gap={6}
					cornerRadius={10}
					showLegend
					showTooltip
					showLabels
					valueFormatter={(value) => `$${(value / 1000).toFixed(0)} K`}
					animated
					className="flex-1 min-h-[300px]"
				/>
			</CardContent>
		</Card>
	);
}
