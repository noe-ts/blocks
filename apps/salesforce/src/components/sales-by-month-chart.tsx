import { Calendar } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { salesByMonthData } from "@/lib/chart-data";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

const chartConfig = {
	value: {
		label: "Sales",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig;

export function SalesByMonthChart() {
	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Calendar className="size-4 text-muted-foreground" />
						<CardTitle>Sales by month</CardTitle>
					</div>
					<Button variant="ghost" size="icon" className="size-8">
						<MoreVertical className="size-4" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex-1 flex flex-col min-h-0">
				<ChartContainer config={chartConfig} className="flex-1 w-full aspect-auto min-h-0">
					<BarChart data={salesByMonthData}>
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
						<Bar
							dataKey="value"
							fill="var(--color-value)"
							radius={[0, 0, 0, 0]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
