import { Area, AreaChart, XAxis } from "recharts";
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
import { salesPipelineData } from "@/lib/data";
import { BarChart3 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig1 = {
  sales1: {
    label: "Sales 1",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const chartConfig2 = {
  sales2: {
    label: "Sales 2",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// Use all 12 months of data
const sales1Total = salesPipelineData.reduce((sum, item) => sum + item.sales1, 0);
const sales2Total = salesPipelineData.reduce((sum, item) => sum + item.sales2, 0);

const formatValue = (value: number) => {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}K`;
  }
  return `$${value.toLocaleString()}`;
};

export function SalesPipelineChart() {
  return (
    <Card className="shadow-none gap-1 p-0 col-span-2">
      <CardHeader className="flex items-center justify-between border-b px-4! py-2.5!">
        <CardTitle className="font-medium flex items-center gap-2">
          <BarChart3 className="size-4" />
          Sales Pipeline
        </CardTitle>
        <Select defaultValue="q3">
          <SelectTrigger className="w-[120px]">
            <SelectValue>Quarter 3</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="q1">Quarter 1</SelectItem>
            <SelectItem value="q2">Quarter 2</SelectItem>
            <SelectItem value="q3">Quarter 3</SelectItem>
            <SelectItem value="q4">Quarter 4</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="p-1">
        <div className="grid grid-cols-4 gap-4">
          {/* Sales 1 Chart */}
          <div className="col-span-2">
            <div className="mb-4 px-3">
              <div className="text-2xl font-medium mb-1">
                {formatValue(sales1Total)}
              </div>
              <div className="text-xs text-muted-foreground/80 uppercase">
                Total sales
              </div>
            </div>
            <ChartContainer config={chartConfig1} className="h-[250px] w-full p-1">
              <AreaChart data={salesPipelineData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <defs>
                  <linearGradient
                    id="gradient-sales1"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-sales1)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-sales1)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="sales1"
                  type="monotone"
                  fill="url(#gradient-sales1)"
                  stroke="var(--color-sales1)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>

          {/* Sales 2 Chart */}
          <div className="col-span-2 border-l border-border -ml-4">
            <div className="mb-4 px-3">
              <div className="text-2xl font-medium mb-1">
                {formatValue(sales2Total)}
              </div>
              <div className="text-xs text-muted-foreground/80 uppercase">
                Total sales
              </div>
            </div>
            <ChartContainer config={chartConfig2} className="h-[250px] w-full p-1">
              <AreaChart data={salesPipelineData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <defs>
                  <linearGradient
                    id="gradient-sales2"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="var(--color-sales2)"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-sales2)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="sales2"
                  type="monotone"
                  fill="url(#gradient-sales2)"
                  stroke="var(--color-sales2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
