import { BarChart3, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { totalSales } from "@/lib/chart-data";
import { Line, LineChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
	value: {
		label: "Value",
		color: "var(--chart-5)",
	},
} satisfies ChartConfig;

// Mock sparkline data
const sparklineData = [
	{ value: 3800000 },
	{ value: 3750000 },
	{ value: 3700000 },
	{ value: 3720000 },
	{ value: 3700000 },
	{ value: 3684000 },
];

export function TotalSalesMetric() {
	const formattedValue = `$${(totalSales.value / 1000000).toFixed(3)} M`;

	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center gap-2">
					<BarChart3 className="size-4 text-muted-foreground" />
					<CardTitle>Total sales</CardTitle>
				</div>
			</CardHeader>
			<CardContent className="px-3 pb-3 flex flex-col gap-3 flex-1 justify-center min-h-0">
				<div className="text-3xl font-bold">{formattedValue}</div>
				<div className="flex items-center gap-2">
					<ChartContainer config={chartConfig} className="h-12 w-full">
						<LineChart data={sparklineData}>
							<Line
								type="monotone"
								dataKey="value"
								stroke="var(--color-value)"
								strokeWidth={2}
								dot={false}
							/>
						</LineChart>
					</ChartContainer>
				</div>
				<div className="flex items-center gap-1 text-sm text-muted-foreground">
					<ArrowDown className="size-4 text-red-600" />
					<span className="text-red-600">
						{totalSales.change}% from last week
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
