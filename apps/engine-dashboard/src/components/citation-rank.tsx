import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export interface CitationEntity {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color?: string;
  value: number;
}

export interface CitationRankProps {
  rank: string | number;
  entities: CitationEntity[];
  className?: string;
}

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function CitationRank({
  rank,
  entities,
  className,
}: CitationRankProps) {
  // Prepare data for stacked bar chart
  const chartData = [
    {
      name: "",
      ...entities.reduce((acc, entity, index) => {
        acc[`value${index}`] = entity.value;
        return acc;
      }, {} as Record<string, number>),
    },
  ];

  const totalValue = entities.reduce((sum, entity) => sum + entity.value, 0);

  return (
    <Card className={cn("shadow-sm gap-1", className)}>
      <CardHeader>
        <CardTitle className="text-xs font-medium text-accent-foreground/80">
          Citation Rank
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-baseline flex-col">
          <div className="text-2xl font-normal text-accent-foreground/80">{rank}</div>
        </div>
        <div className="h-[220px] w-full min-h-0 flex flex-col">
          <ChartContainer config={chartConfig} className="h-[20px] w-full">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" hide />
              <ChartTooltip content={<ChartTooltipContent />} />
              {entities.map((entity, index) => (
                <Bar
                  key={entity.name}
                  dataKey={`value${index}`}
                  stackId="a"
                  fill={entity.color || "var(--color-value)"}
                  radius={[0, 0, 0, 0]}
                />
              ))}
            </BarChart>
          </ChartContainer>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground mt-2">Domains</span>
            </div>
            {entities.map((entity) => (
              <div
                key={entity.name}
                className="flex items-center gap-2"
              >
                <entity.icon className="size-6 rounded-sm object-contain" />
                <span className="text-sm text-accent-foreground/80 font-medium flex-1">{entity.name}</span>
                <span className="text-xs font-mono text-muted-foreground">
                  {((entity.value / totalValue) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
