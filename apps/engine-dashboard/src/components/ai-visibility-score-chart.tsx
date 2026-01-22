import { Area, AreaChart, XAxis } from "recharts";
import { ChartCard } from "./chart-card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
	score: {
		label: "Score",
		color: "var(--primary)",
	},
} satisfies ChartConfig;

// Mock data for AI visibility score over time
const visibilityData = Array.from({ length: 50 }, (_, i) => ({
	day: i + 1,
	score: 30 + Math.sin(i / 5) * 5 + Math.random() * 3,
}));

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
				<AreaChart data={visibilityData}>
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
						type="linear"
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
