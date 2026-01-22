import { Box } from "lucide-react";
import { Cell, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	type ChartConfig,
} from "@/components/ui/chart";
import {
	revenueByAccountData,
	expectedRevenueTotal,
} from "@/lib/chart-data";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const chartConfig = {
	Hotels: {
		label: "Hotels",
		color: "var(--chart-1)",
	},
	"Gene point": {
		label: "Gene point",
		color: "var(--chart-2)",
	},
	"Oil and gas": {
		label: "Oil and gas",
		color: "var(--chart-3)",
	},
	Logistics: {
		label: "Logistics",
		color: "var(--chart-4)",
	},
	Others: {
		label: "Others",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

export function ExpectedRevenueByAccountChart() {
	const formattedTotal = `$${(expectedRevenueTotal / 1000000).toFixed(3)} M Expected amount`;

	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Box className="size-4 text-muted-foreground" />
						<CardTitle>Expected revenue by account</CardTitle>
					</div>
					<Button variant="ghost" size="icon" className="size-8">
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 relative flex-1 flex flex-col min-h-0">
				<ChartContainer config={chartConfig} className="flex-1 w-full aspect-auto min-h-0">
					<PieChart>
						<ChartTooltip
							content={<ChartTooltipContent nameKey="name" />}
						/>
						<ChartLegend
							content={
								<ChartLegendContent
									nameKey="name"
									className="justify-start"
								/>
							}
						/>
						<Pie
							data={revenueByAccountData}
							dataKey="value"
							nameKey="name"
							innerRadius={60}
							outerRadius={100}
							paddingAngle={2}
						>
							{revenueByAccountData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill || `var(--color-${entry.name})`}
								/>
							))}
						</Pie>
					</PieChart>
				</ChartContainer>
				<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
					<div className="text-center">
						<div className="text-sm font-medium text-muted-foreground">
							{formattedTotal}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
