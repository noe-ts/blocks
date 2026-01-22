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
          {entities.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mt-1">
              {entities.slice(0, 2).map((entity) => (
                <div key={entity.name} className="flex items-center gap-1.5">
                  <div
                    className="size-2 rounded-full"
                    style={
                      entity.color
                        ? { backgroundColor: entity.color }
                        : undefined
                    }
                  />
                  <span className="text-muted-foreground">{entity.name}</span>
                </div>
              ))}
            </div>
          )}
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
          <div className="flex flex-col gap-2 mt-2">
            {entities.map((entity) => (
              <div
                key={entity.name}
                className="flex items-center gap-2"
              >
                <div
                  className="flex size-6 items-center justify-center rounded"
                  style={
                    entity.color
                      ? { backgroundColor: entity.color }
                      : undefined
                  }
                >
                  <entity.icon className="size-3 text-white" />
                </div>
                <span className="text-xs font-medium flex-1">{entity.name}</span>
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
