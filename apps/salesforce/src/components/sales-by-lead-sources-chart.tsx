import { LayoutGrid } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { leadSourceData } from "@/lib/chart-data";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const chartConfig = {
	sales: {
		label: "Sales",
		color: "var(--chart-1)",
	},
	potential: {
		label: "Potential",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function SalesByLeadSourcesChart() {
	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<LayoutGrid className="size-4 text-muted-foreground" />
						<CardTitle>Sales and potential sales by lead sources</CardTitle>
					</div>
					<Button variant="ghost" size="icon" className="size-8">
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex-1 flex flex-col min-h-0">
				<ChartContainer config={chartConfig} className="flex-1 w-full aspect-auto min-h-0">
					<BarChart data={leadSourceData}>
						<XAxis
							dataKey="name"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => `$${value / 1000} K`}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<ChartLegend content={<ChartLegendContent />} />
						<Bar
							dataKey="sales"
							stackId="a"
							fill="var(--color-sales)"
							radius={[0, 0, 0, 0]}
						/>
						<Bar
							dataKey="potential"
							stackId="a"
							fill="var(--color-potential)"
							radius={[0, 0, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
