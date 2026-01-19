import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartCell,
	type ChartConfig,
	ChartContainer,
	ChartFunnel,
	ChartFunnelChart,
	ChartLabelList,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { funnelData } from "@/lib/chart-data";

const chartConfig = {
	prospecting: {
		label: "Prospecting",
		color: "var(--chart-1)",
	},
	qualification: {
		label: "Qualification",
		color: "var(--chart-2)",
	},
	analysis: {
		label: "Analysis",
		color: "var(--chart-3)",
	},
	valueProposition: {
		label: "Value proposition",
		color: "var(--chart-4)",
	},
	priceQuote: {
		label: "Price quote",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

export function DashboardFunnelChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Potential sales by stage</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-[400px] w-full">
					<ChartFunnelChart>
						<ChartTooltip content={<ChartTooltipContent />} />
						<ChartLegend content={<ChartLegendContent />} />
						<ChartFunnel
							data={funnelData}
							dataKey="value"
							nameKey="name"
							isAnimationActive
						>
							{funnelData.map((_, index) => {
								const keys = [
									"prospecting",
									"qualification",
									"analysis",
									"valueProposition",
									"priceQuote",
								] as const;
								return (
									<ChartCell
										key={`cell-${index}`}
										fill={`var(--color-${keys[index]})`}
									/>
								);
							})}
							<ChartLabelList
								position="right"
								fill="var(--foreground)"
								stroke="none"
								dataKey="name"
							/>
						</ChartFunnel>
					</ChartFunnelChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
