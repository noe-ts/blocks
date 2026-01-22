import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";

export interface MetricCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  period: string;
  change: number;
  changeType?: "increase" | "decrease";
  className?: string;
}

export function MetricCard({
  icon: Icon,
  label,
  value,
  period,
  change,
  changeType = "increase",
  className,
}: MetricCardProps) {
  const isIncrease = changeType === "increase";
  const changeColor = isIncrease ? "text-green-600" : "text-red-600";

  return (
    <Card className={cn("shadow-sm", className)}>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-muted-foreground/80" />
          <span className="text-sm font-medium text-accent-foreground/80">
            {label}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-normal! text-accent-foreground/80">{value}</div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="text-xs font-mono uppercase text-muted-foreground">
            {period}
          </div>
          <div className={cn("flex items-center gap-1 text-sm", changeColor)}>
            <span className="font-mono">
              {isIncrease ? "+" : ""}
              {change}%
            </span>
            {isIncrease ? (
              <ArrowUp className="size-4" />
            ) : (
              <ArrowDown className="size-4" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}