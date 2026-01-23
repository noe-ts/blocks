// Chart data for all dashboard charts

export interface FunnelDataItem {
	name: string;
	value: number;
	fill?: string;
}

export interface SalesByMonthDataItem {
	name: string;
	value: number;
}

export interface RevenueByAccountDataItem {
	name: string;
	value: number;
	fill?: string;
}

export interface LeadSourceDataItem {
	name: string;
	sales: number;
	potential: number;
}

export interface SalesByRegionDataItem {
	name: string;
	value: number;
	fill?: string;
}

// 1. Potential sales by stage (Funnel Chart)
// Same proportion (e.g., 80%) between each stage
export const funnelData: FunnelDataItem[] = [
	{ name: "Prospecting", value: 390000, fill: "var(--chart-1)" },
	{ name: "Qualification", value: 316000, fill: "var(--chart-2)" },
	{ name: "Analysis", value: 253000, fill: "var(--chart-3)" },
	{ name: "Value proposition", value: 202000, fill: "var(--chart-4)" },
	{ name: "Price quote", value: 162000, fill: "var(--chart-5)" },
];

// 2. Sales by month (Bar Chart with Dots)
export const salesByMonthData: SalesByMonthDataItem[] = [
	{ name: "Jan", value: 250000 },
	{ name: "Feb", value: 280000 },
	{ name: "Mar", value: 295000 },
	{ name: "Apr", value: 311000 },
	{ name: "May", value: 275000 },
	{ name: "Jun", value: 290000 },
];

// 3. Total potential sales metric
export const totalPotentialSales = {
	value: 2038000,
	change: 12,
	trend: "up" as const,
};

// 4. Total sales metric
export const totalSales = {
	value: 3684000,
	change: 7.9,
	trend: "down" as const,
};

// 5. Expected revenue by account (Donut Chart)
export const revenueByAccountData: RevenueByAccountDataItem[] = [
	{ name: "Hotels", value: 827000, fill: "var(--chart-1)" },
	{ name: "Gene point", value: 511000, fill: "var(--chart-2)" },
	{ name: "Oil and gas", value: 428000, fill: "var(--chart-3)" },
	{ name: "Logistics", value: 357000, fill: "var(--chart-4)" },
	{ name: "Others", value: 1203000, fill: "var(--chart-5)" },
];

export const expectedRevenueTotal = 3209000;

// 6. Sales and potential sales by lead sources (Stacked Bar Chart)
export const leadSourceData: LeadSourceDataItem[] = [
	{ name: "Web", sales: 180000, potential: 81000 },
	{ name: "Phone", sales: 150000, potential: 70000 },
	{ name: "Partner", sales: 220000, potential: 107000 },
	{ name: "Purchased", sales: 170000, potential: 80000 },
	{ name: "Employee", sales: 110000, potential: 51000 },
	{ name: "External", sales: 200000, potential: 100000 },
];

// 7. Sales by region (Horizontal Bar Chart)
export const salesByRegionData: SalesByRegionDataItem[] = [
	{ name: "East Coast", value: 478000, fill: "var(--chart-1)" },
	{ name: "Midwest", value: 386000, fill: "var(--chart-3)" },
	{ name: "Southwest", value: 596000, fill: "var(--chart-5)" },
	{ name: "West Coast", value: 174000, fill: "var(--chart-4)" },
];

// Chart configuration
export const chartConfig = {
	value: {
		label: "Value",
	},
	sales: {
		label: "Sales",
		color: "var(--chart-1)",
	},
	potential: {
		label: "Potential",
		color: "var(--chart-2)",
	},
	prospecting: {
		label: "Prospecting",
		color: "var(--chart-1)",
	},
	qualification: {
		label: "Qualification",
		color: "var(--chart-2)",
	},
	analysis: {
		label: "Analysis",
		color: "var(--chart-3)",
	},
	valueProposition: {
		label: "Value proposition",
		color: "var(--chart-4)",
	},
	priceQuote: {
		label: "Price quote",
		color: "var(--chart-5)",
	},
};
