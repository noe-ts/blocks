import { Area, AreaChart, XAxis } from "recharts";
import { ChartCard } from "./chart-card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { aiVisibilityScoreChartData } from "./data";

const chartConfig = {
	score: {
		label: "Score",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

export function AIVisibilityScoreChart() {
	return (
		<ChartCard
			title="AI Visibility Score"
			value="32.1%"
			change={12.5}
			changeType="decrease"
			period="last 30 days"
		>
			<ChartContainer config={chartConfig}>
				<AreaChart data={aiVisibilityScoreChartData}>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						tick={false}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<defs>
						<linearGradient id="gradient-score-area" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="var(--primary)" stopOpacity={0.10} />
							<stop offset="95%" stopColor="var(--primary)" stopOpacity={0.01} />
						</linearGradient>
					</defs>
					<Area
						type="monotone"
						dataKey="score"
						stroke="var(--primary)"
						strokeWidth={1.5}
						fill="url(#gradient-score-area)"
						fillOpacity={1}
						dot={false}
						activeDot={false}
					/>
				</AreaChart>
			</ChartContainer>
		</ChartCard>
	);
}
