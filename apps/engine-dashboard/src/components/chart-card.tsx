import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ChartCardProps {
	title: string;
	value: string | number;
	change?: number;
	changeType?: "increase" | "decrease";
	period?: string;
	children: React.ReactNode;
	className?: string;
}

export function ChartCard({
	title,
	value,
	change,
	changeType = "increase",
	period,
	children,
	className,
}: ChartCardProps) {
	const hasChange = change !== undefined;
	const isIncrease = changeType === "increase";
	const changeColor = isIncrease ? "text-green-600" : "text-red-600";

	return (
		<Card className={cn("shadow-sm gap-1", className)}>
			<CardHeader>
				<CardTitle className="text-xs font-medium text-accent-foreground/80">{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				<div className="flex items-baseline flex-col">
					<div className="text-2xl font-normal text-accent-foreground/80">{value}</div>
					{hasChange && (
						<div className={cn("flex items-center gap-2 text-xs font-mono text-muted-foreground mt-1", changeColor)}>
							<span>
								{isIncrease ? "+" : ""}
								{change}%
							</span>
							{period && <span className="text-muted-foreground">{period}</span>}
						</div>
					)}
				</div>
				<div className="h-[220px] w-full min-h-0 mt-4">{children}</div>
			</CardContent>
		</Card>
	);
}
