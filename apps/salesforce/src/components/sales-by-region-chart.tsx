import { MapPin } from "lucide-react";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { salesByRegionData } from "@/lib/chart-data";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const chartConfig = {
	"East Coast": {
		label: "East Coast",
		color: "var(--chart-1)",
	},
	Midwest: {
		label: "Midwest",
		color: "var(--chart-3)",
	},
	Southwest: {
		label: "Southwest",
		color: "var(--chart-5)",
	},
	"West Coast": {
		label: "West Coast",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig;

export function SalesByRegionChart() {
	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<MapPin className="size-4 text-muted-foreground" />
						<CardTitle>Sales by region</CardTitle>
					</div>
					<Button variant="ghost" size="icon" className="size-8">
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex-1 flex flex-col min-h-0">
				<ChartContainer config={chartConfig} className="flex-1 w-full aspect-auto min-h-0">
					<BarChart data={salesByRegionData} layout="vertical">
						<XAxis
							type="number"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => `$${value / 1000} K`}
						/>
						<YAxis
							type="category"
							dataKey="name"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							width={80}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<ChartLegend
							content={
								<ChartLegendContent
									nameKey="name"
									className="justify-start"
								/>
							}
						/>
						<Bar
							dataKey="value"
							radius={[0, 0, 0, 0]}
						>
							{salesByRegionData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill || `var(--color-${entry.name})`}
								/>
							))}
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
