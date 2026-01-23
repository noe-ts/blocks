import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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
import { accountsReceivableData, accountsReceivableTotal } from "@/lib/data";
import { User } from "lucide-react";

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
  // Transform data for RadialBarChart (needs array format)
  const chartData = [
    {
      name: "Collected",
      Collected: accountsReceivableData.find((d) => d.name === "Collected")?.value || 0,
      "Outstanding Balance": accountsReceivableData.find((d) => d.name === "Outstanding Balance")?.value || 0,
    },
  ];

  return (
    <Card className="shadow-none gap-1 p-0 flex flex-col h-[300px] col-span-2">
      <CardHeader className="items-center justify-between flex flex-row pb-0 border-b px-4! py-3!">
        <CardTitle className="font-medium flex items-center gap-2">
          <User className="size-4" />
          Accounts Receivable
        </CardTitle>
        <div className="mb-2 flex flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="size-2 inline-block rounded-full" style={{ background: "var(--chart-1)" }} />
            <span className="text-sm text-muted-foreground">Collected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 inline-block rounded-full" style={{ background: "var(--chart-2)" }} />
            <span className="text-sm text-muted-foreground">Outstanding Balance</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center pb-0 p-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[400px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={150}
            outerRadius={250}
            width={500}
            height={400}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 50}
                          className="fill-muted-foreground text-base font-medium"
                        >
                          Total
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 20}
                          className="fill-foreground text-2xl font-medium"
                        >
                          {accountsReceivableTotal}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="Collected"
              stackId="a"
              fill="var(--chart-1)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="Outstanding Balance"
              fill="var(--chart-2)"
              stackId="a"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
