import { Bar, BarChart, XAxis } from "recharts";
import { ChartCard } from "./chart-card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { uniqueVisitorsChartData } from "./data";

const chartConfig = {
	visitors: {
		label: "Visitors",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

export function UniqueVisitorsChart() {
	return (
		<ChartCard
			title="Unique Visitors"
			value="8,451"
			change={12.5}
			changeType="increase"
			period="last 30 days"
		>
			<ChartContainer config={chartConfig}>
				<BarChart data={uniqueVisitorsChartData}>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={(value) => {
							const intervals = [1, 6, 11, 16, 21, 26, 30];
							return intervals.includes(value) ? String(value) : "";
						}}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Bar
						dataKey="visitors"
						fill="var(--color-visitors)"
						radius={[2, 2, 0, 0]}
					/>
				</BarChart>
			</ChartContainer>
		</ChartCard>
	);
}
