import * as React from "react";
import {
	FunnelChart as RechartsFunnelChart,
	Funnel,
	Cell,
	LabelList,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import type { Props as LegendProps } from "recharts/types/component/Legend";
import { cn } from "@/lib/utils";

export interface FunnelDataItem {
	name: string;
	value: number;
	fill?: string;
}

export type FunnelOrientation = "vertical" | "horizontal";

export interface FunnelChartConfig {
	[key: string]: {
		label?: React.ReactNode;
		color?: string;
		icon?: React.ComponentType;
		theme?: { light: string; dark: string };
	};
}

export interface FunnelChartProps {
	data: FunnelDataItem[];
	config: FunnelChartConfig;
	orientation?: FunnelOrientation;
	gap?: number;
	cornerRadius?: number;
	showLegend?: boolean;
	showTooltip?: boolean;
	showLabels?: boolean;
	valueFormatter?: (value: number) => string;
	animated?: boolean;
	animationDuration?: number;
	className?: string;
	colors?: string[];
	onSegmentClick?: (data: FunnelDataItem, index: number) => void;
}

const DEFAULT_COLORS = [
	"var(--chart-1)",
	"var(--chart-2)",
	"var(--chart-3)",
	"var(--chart-4)",
	"var(--chart-5)",
];

const FunnelChartContext = React.createContext<{ config: FunnelChartConfig } | null>(null);

function useFunnelChartConfig() {
	const ctx = React.useContext(FunnelChartContext);
	if (!ctx) throw new Error("useFunnelChartConfig must be used within FunnelChart");
	return ctx.config;
}

interface TrapezoidShapeProps {
	x?: number;
	y?: number;
	upperWidth?: number;
	lowerWidth?: number;
	height?: number;
	fill?: string;
	className?: string;
	cornerRadius?: number;
}

function RoundedTrapezoid({
	x = 0,
	y = 0,
	upperWidth = 0,
	lowerWidth = 0,
	height = 0,
	fill = "#8884d8",
	cornerRadius = 8,
}: TrapezoidShapeProps) {
	if (height <= 0 || (upperWidth <= 0 && lowerWidth <= 0)) {
		return null;
	}

	// Recharts gives us x as left edge of the bounding box
	// The bounding box width is the maximum of upper and lower width
	const maxWidth = Math.max(upperWidth, lowerWidth);
	const centerX = x + maxWidth / 2;

	// Calculate all four corners, centered on the same axis
	const topLeftX = centerX - upperWidth / 2;
	const topRightX = centerX + upperWidth / 2;
	const bottomLeftX = centerX - lowerWidth / 2;
	const bottomRightX = centerX + lowerWidth / 2;

	const topY = y;
	const bottomY = y + height;

	// Clamp radius to avoid issues
	const minWidth = Math.min(upperWidth, lowerWidth);
	const maxR = Math.min(height / 4, minWidth / 4);
	const r = Math.max(0, Math.min(cornerRadius, maxR));

	if (r === 0) {
		// No rounding - simple trapezoid
		return (
			<path
				d={`M ${topLeftX} ${topY} L ${topRightX} ${topY} L ${bottomRightX} ${bottomY} L ${bottomLeftX} ${bottomY} Z`}
				fill={fill}
			/>
		);
	}

	// Calculate the angle of the slanted sides
	const deltaX = (lowerWidth - upperWidth) / 2;
	const angle = Math.atan2(height, deltaX);

	// Offset along the slanted edge for rounded corners
	const offsetAlongSlope = r / Math.sin(angle / 2 + Math.PI / 4);
	const horizontalOffset = Math.min(r, minWidth / 4);
	const verticalOffset = Math.min(r, height / 4);

	// Build path with quadratic bezier curves for smooth corners
	const path = `
		M ${topLeftX + horizontalOffset} ${topY}
		L ${topRightX - horizontalOffset} ${topY}
		Q ${topRightX} ${topY} ${topRightX + verticalOffset * (deltaX / height)} ${topY + verticalOffset}
		L ${bottomRightX - verticalOffset * (deltaX / height)} ${bottomY - verticalOffset}
		Q ${bottomRightX} ${bottomY} ${bottomRightX - horizontalOffset} ${bottomY}
		L ${bottomLeftX + horizontalOffset} ${bottomY}
		Q ${bottomLeftX} ${bottomY} ${bottomLeftX + verticalOffset * (deltaX / height)} ${bottomY - verticalOffset}
		L ${topLeftX - verticalOffset * (deltaX / height)} ${topY + verticalOffset}
		Q ${topLeftX} ${topY} ${topLeftX + horizontalOffset} ${topY}
		Z
	`;

	return <path d={path} fill={fill} />;
}

interface CustomTooltipProps {
	active?: boolean;
	payload?: Array<{
		name: string;
		value: number;
		payload: FunnelDataItem;
	}>;
	valueFormatter?: (value: number) => string;
}

function CustomTooltip({ active, payload, valueFormatter }: CustomTooltipProps) {
	const config = useFunnelChartConfig();

	if (!active || !payload?.length) return null;

	const item = payload[0];
	const key = item.payload.name.toLowerCase().replace(/\s+/g, "");
	const itemConfig = config[key];

	const formattedValue = valueFormatter
		? valueFormatter(item.value)
		: item.value.toLocaleString();

	return (
		<div className="rounded-lg border border-border/50 bg-background px-3 py-2 text-sm shadow-xl">
			<div className="flex items-center gap-2">
				<div
					className="h-3 w-3 shrink-0 rounded-full"
					style={{ backgroundColor: item.payload.fill }}
				/>
				<span className="font-medium">{itemConfig?.label || item.payload.name}</span>
			</div>
			<div className="mt-1 font-medium tabular-nums">{formattedValue}</div>
		</div>
	);
}

interface CustomLegendProps {
	payload?: LegendProps["payload"];
}

function CustomLegend({ payload }: CustomLegendProps) {
	const config = useFunnelChartConfig();

	if (!payload?.length) return null;

	return (
		<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 pt-4">
			{payload.map((entry, index) => {
				const key = entry.value?.toString().toLowerCase().replace(/\s+/g, "") || "";
				const itemConfig = config[key];

				return (
					<div key={index} className="flex items-center gap-1.5">
						<div
							className="h-2.5 w-2.5 shrink-0 rounded-full"
							style={{ backgroundColor: entry.color }}
						/>
						<span className="text-sm text-muted-foreground">
							{itemConfig?.label || entry.value}
						</span>
					</div>
				);
			})}
		</div>
	);
}

export function FunnelChart({
	data,
	config,
	orientation = "vertical",
	gap = 4,
	cornerRadius = 8,
	showLegend = true,
	showTooltip = true,
	showLabels = true,
	valueFormatter,
	animated = true,
	animationDuration = 800,
	className,
	colors = DEFAULT_COLORS,
	onSegmentClick,
}: FunnelChartProps) {
	// Prepare data with colors
	const chartData = React.useMemo(() => {
		return data.map((item, index) => ({
			...item,
			fill: item.fill || colors[index % colors.length],
		}));
	}, [data, colors]);

	// Custom shape with gap and rounded corners
	const renderTrapezoid = React.useCallback(
		(props: TrapezoidShapeProps) => {
			const { y = 0, height = 0, upperWidth = 0, lowerWidth = 0, ...rest } = props;

			// Apply gap by adjusting y and height only
			const halfGap = gap / 2;
			const adjustedY = y + halfGap;
			const adjustedHeight = Math.max(0, height - gap);

			// Ensure minimum bottom width (hopper shape, not triangle)
			// If lowerWidth is 0 or very small, it's the last segment
			const minLowerWidth = upperWidth * 0.6;
			const adjustedLowerWidth = Math.max(lowerWidth, minLowerWidth);

			return (
				<RoundedTrapezoid
					{...rest}
					y={adjustedY}
					height={adjustedHeight}
					upperWidth={upperWidth}
					lowerWidth={adjustedLowerWidth}
					cornerRadius={cornerRadius}
				/>
			);
		},
		[gap, cornerRadius],
	);

	const handleClick = (_: unknown, index: number) => {
		if (onSegmentClick && chartData[index]) {
			onSegmentClick(chartData[index], index);
		}
	};

	// Check reduced motion preference
	const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
	React.useEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mq.matches);
		const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);

	const isAnimated = animated && !prefersReducedMotion;

	return (
		<FunnelChartContext.Provider value={{ config }}>
			<div className={cn("flex flex-col", className)}>
				<ResponsiveContainer width="100%" height="100%">
					<RechartsFunnelChart>
						{showTooltip && (
							<Tooltip
								content={<CustomTooltip valueFormatter={valueFormatter} />}
							/>
						)}
						{showLegend && (
							<Legend
								content={<CustomLegend />}
								verticalAlign="bottom"
							/>
						)}
						<Funnel
							data={chartData}
							dataKey="value"
							nameKey="name"
							isAnimationActive={isAnimated}
							animationDuration={animationDuration}
							animationBegin={0}
							shape={renderTrapezoid}
							onClick={handleClick}
						>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill}
									className="cursor-pointer transition-opacity duration-150 hover:opacity-80 focus-visible:outline-none"
									tabIndex={0}
									role="button"
									aria-label={`${entry.name}: ${valueFormatter ? valueFormatter(entry.value) : entry.value}`}
								/>
							))}
							{showLabels && (
								<LabelList
									position="center"
									fill="white"
									stroke="none"
									dataKey="value"
									fontSize={14}
									fontWeight={500}
									formatter={(value: number) =>
										valueFormatter ? valueFormatter(value) : `$${(value / 1000).toFixed(0)} K`
									}
								/>
							)}
						</Funnel>
					</RechartsFunnelChart>
				</ResponsiveContainer>
			</div>
		</FunnelChartContext.Provider>
	);
}

export { CustomLegend as FunnelLegend, CustomTooltip as FunnelTooltip };
