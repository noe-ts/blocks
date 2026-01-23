import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { incomeCategoryData } from "@/lib/data";

const chartConfig = {
	value1: {
		label: "Value 1",
		color: "var(--chart-1)",
	},
	value2: {
		label: "Value 2",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function IncomeCategoryChart() {
	return (
		<Card className="shadow-none">
			<CardHeader>
				<CardTitle className="font-medium">Income by Category</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<RadarChart data={incomeCategoryData}>
						<PolarGrid />
						<PolarAngleAxis
							dataKey="category"
							tick={{ fill: "currentColor", fontSize: 12 }}
						/>
						<PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
						<ChartTooltip content={<ChartTooltipContent />} />
						<Radar
							name="Value 1"
							dataKey="value1"
							stroke="var(--color-value1)"
							fill="var(--color-value1)"
							fillOpacity={0.3}
						/>
						<Radar
							name="Value 2"
							dataKey="value2"
							stroke="var(--color-value2)"
							fill="var(--color-value2)"
							fillOpacity={0.3}
						/>
					</RadarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
