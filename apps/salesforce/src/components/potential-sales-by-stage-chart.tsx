import { Sparkles } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

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

export function PotentialSalesByStageChart() {
	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Sparkles className="size-4 text-muted-foreground" />
						<CardTitle>Potential sales by stage</CardTitle>
					</div>
					<Button variant="ghost" size="icon" className="size-8">
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex-1 flex flex-col min-h-0">
				<ChartContainer config={chartConfig} className="flex-1 w-full aspect-auto min-h-0">
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