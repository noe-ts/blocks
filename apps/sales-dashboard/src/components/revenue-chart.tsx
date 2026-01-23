import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { revenueData, revenueTotal } from "@/lib/data";
import { CircleDollarSignIcon } from "lucide-react";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
  expenses: {
    label: "Expenses trends",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <Card className="shadow-none gap-1 p-0">
      <CardHeader className="flex items-center justify-between border-b px-4! py-4!">
        <CardTitle className="font-medium flex items-center gap-2">
          <CircleDollarSignIcon className="size-4" />
          Revenue
        </CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[var(--chart-1)]" />
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[var(--chart-2)]" />
            <span className="text-sm text-muted-foreground">
              Expenses trends
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-1">
        <div className="mb-4 px-3">
          <div className="text-2xl font-medium mb-1">{revenueTotal}</div>
          <div className="text-xs text-muted-foreground/80 uppercase">
            This week vs last week
          </div>

        </div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full p-0">
          <BarChart data={revenueData}>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="revenue"
              stackId="a"
              fill="var(--color-revenue)"
              background={{ fill: "var(--color-muted)", radius: 4 }}
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey={() => 8} // Static height—2px
              stackId="a"
              fill="#fff"
              barSize={8}
              legendType="none"
              isAnimationActive={false}
              name=""
            />
            <Bar
              dataKey="expenses"
              stackId="a"
              fill="var(--color-expenses)"
              radius={[0, 0, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}