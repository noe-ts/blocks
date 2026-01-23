import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { incomeCategoryData } from "@/lib/data";
import { List } from "lucide-react";

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
    <Card className="shadow-none gap-1 p-0 col-span-1">
      <CardHeader className="items-center border-b px-4! py-3!">
        <CardTitle className="font-medium flex items-center gap-2">
          <List className="size-4" />
          Income by Category
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0 p-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={incomeCategoryData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="category" />
            <PolarGrid />
            <Radar
              dataKey="value1"
              fill="var(--color-value1)"
              fillOpacity={0.2}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
            <Radar
              dataKey="value2"
              fill="var(--color-value2)"
              fillOpacity={0.2}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
