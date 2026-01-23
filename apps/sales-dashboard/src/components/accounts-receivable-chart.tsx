import { Cell, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { accountsReceivableData, accountsReceivableTotal } from "@/lib/data";

const chartConfig = {
	Collected: {
		label: "Collected",
		color: "var(--chart-1)",
	},
	"Outstanding Balance": {
		label: "Outstanding Balance",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function AccountsReceivableChart() {
	return (
		<Card className="shadow-none">
			<CardHeader>
				<CardTitle className="font-medium">Accounts Receivable</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="relative">
					<ChartContainer config={chartConfig} className="h-[250px]">
						<PieChart>
							<ChartTooltip
								content={<ChartTooltipContent nameKey="name" />}
							/>
							<ChartLegend
								content={
									<ChartLegendContent
										nameKey="name"
										className="justify-center"
									/>
								}
							/>
							<Pie
								data={accountsReceivableData}
								dataKey="value"
								nameKey="name"
								innerRadius={60}
								outerRadius={100}
								paddingAngle={2}
							>
								{accountsReceivableData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={entry.fill || `var(--color-${entry.name})`}
									/>
								))}
							</Pie>
						</PieChart>
					</ChartContainer>
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div className="text-center">
							<div className="text-xs text-muted-foreground mb-1">TOTAL</div>
							<div className="text-xl font-medium">{accountsReceivableTotal}</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
