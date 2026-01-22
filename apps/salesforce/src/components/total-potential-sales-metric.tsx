import { Building2, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { totalPotentialSales } from "@/lib/chart-data";
import { Line, LineChart } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
	value: {
		label: "Value",
		color: "var(--chart-3)",
	},
} satisfies ChartConfig;

// Mock sparkline data
const sparklineData = [
	{ value: 1800000 },
	{ value: 1900000 },
	{ value: 1950000 },
	{ value: 2000000 },
	{ value: 1980000 },
	{ value: 2038000 },
];

export function TotalPotentialSalesMetric() {
	const formattedValue = `$${(totalPotentialSales.value / 1000000).toFixed(3)} M`;

	return (
		<Card className="rounded-none shadow-none h-full flex flex-col p-0">
			<CardHeader className="px-3 py-3">
				<div className="flex items-center gap-2">
					<Building2 className="size-4 text-muted-foreground" />
					<CardTitle>Total potential sales</CardTitle>
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
					<ArrowUp className="size-4 text-green-600" />
					<span className="text-green-600">
						{totalPotentialSales.change}% from last week
					</span>
				</div>
			</CardContent>
		</Card>
	);
}
