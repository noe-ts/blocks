import { Bar, BarChart, XAxis } from "recharts";
import { ChartCard } from "./chart-card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { aiReferralVisitorsChartData } from "./data";

const chartConfig = {
	visitors: {
		label: "Referral Visitors",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

export function AIReferralVisitorsChart() {
	return (
		<ChartCard
			title="AI Referral Visitors"
			value="13,421"
			change={12.5}
			changeType="decrease"
			period="last 30 days"
		>
			<ChartContainer config={chartConfig}>
				<BarChart data={aiReferralVisitorsChartData}>
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
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ChartContainer>
		</ChartCard>
	);
}