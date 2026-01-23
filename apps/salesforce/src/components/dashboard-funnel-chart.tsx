import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FunnelChart,
	type FunnelChartConfig,
} from "@/components/ui/funnel-chart";
import { funnelData } from "@/lib/chart-data";

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

export function DashboardFunnelChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Potential sales by stage</CardTitle>
			</CardHeader>
			<CardContent>
				<FunnelChart
					data={funnelData}
					config={chartConfig}
					colors={colors}
					gap={8}
					cornerRadius={12}
					showLegend
					showTooltip
					showLabels
					valueFormatter={(value) => `$${(value / 1000).toFixed(0)} K`}
					animated
					className="h-[380px]"
				/>
			</CardContent>
		</Card>
	);
}
