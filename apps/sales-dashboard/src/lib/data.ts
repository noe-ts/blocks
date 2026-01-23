// Dashboard data for sales dashboard

export interface OverviewCard {
	title: string;
	value: string;
	icon: string;
	color: string;
	data: number[];
}

export interface RevenueDataItem {
	day: string;
	revenue: number;
	expenses: number;
}

export interface SalesPipelineDataItem {
	month: string;
	sales1: number;
	sales2: number;
}

export interface IncomeCategoryDataItem {
	category: string;
	value1: number;
	value2: number;
}

export interface AccountsReceivableDataItem {
	name: string;
	value: number;
	fill?: string;
}

export interface TopProduct {
	name: string;
	status: string;
}

export interface Invoice {
	customer: string;
	invoiceId: string;
	date: string;
	amount: string;
	priority: string;
	status: string;
}

// Overview Cards Data
export const overviewCards: OverviewCard[] = [
	{
		title: "TOTAL BALANCE",
		value: "$16,400",
		icon: "arrow-bottom-left",
		color: "purple",
		data: [20, 40, 30, 50, 35, 45, 40],
	},
	{
		title: "INCOME",
		value: "$6,000",
		icon: "arrow-top-right",
		color: "blue",
		data: [25, 35, 30, 40, 35, 45, 50],
	},
	{
		title: "EXPENSES",
		value: "$14,000.00",
		icon: "envelope",
		color: "red",
		data: [30, 35, 40, 30, 45, 35, 40],
	},
	{
		title: "SCHEDULED",
		value: "$14,000.00",
		icon: "calendar",
		color: "yellow",
		data: [25, 30, 35, 40, 30, 35, 40],
	},
];

// Revenue Bar Chart Data (Stacked)
export const revenueData: RevenueDataItem[] = [
	{ day: "Mon", revenue: 200, expenses: 150 },
	{ day: "Tue", revenue: 300, expenses: 180 },
	{ day: "Wed", revenue: 250, expenses: 200 },
	{ day: "Thu", revenue: 400, expenses: 220 },
	{ day: "Fri", revenue: 350, expenses: 250 },
	{ day: "Sat", revenue: 300, expenses: 200 },
	{ day: "Sun", revenue: 200, expenses: 150 },
];

export const revenueTotal = "$1,800.00";

// Sales Pipeline Line Chart Data
export const salesPipelineData: SalesPipelineDataItem[] = [
	{ month: "Jan", sales1: 24000, sales2: 22000 },
	{ month: "Feb", sales1: 55500, sales2: 53000 },
	{ month: "Mar", sales1: 37000, sales2: 35000 },
	{ month: "Apr", sales1: 38000, sales2: 36000 },
	{ month: "May", sales1: 70000, sales2: 29000 },
	{ month: "Jun", sales1: 51000, sales2: 49500 },
	{ month: "Jul", sales1: 52000, sales2: 50000 },
	{ month: "Aug", sales1: 55000, sales2: 54000 },
	{ month: "Sep", sales1: 35700, sales2: 35700 },
	{ month: "Oct", sales1: 54000, sales2: 32000 },
	{ month: "Nov", sales1: 53000, sales2: 31000 },
	{ month: "Dec", sales1: 47000, sales2: 46000 },
];

export const salesPipelineTotal = "$250.7K";

// Income by Category Radar Chart Data
export const incomeCategoryData: IncomeCategoryDataItem[] = [
	{ category: "Royalties", value1: 80, value2: 70 },
	{ category: "Investments", value1: 60, value2: 75 },
	{ category: "Licensing", value1: 70, value2: 65 },
	{ category: "Consulting", value1: 85, value2: 80 },
	{ category: "Dividends", value1: 75, value2: 85 },
];

// Accounts Receivable Donut Chart Data
export const accountsReceivableData: AccountsReceivableDataItem[] = [
	{ name: "Collected", value: 1200, fill: "var(--chart-1)" },
	{ name: "Outstanding Balance", value: 600, fill: "var(--chart-2)" },
];

export const accountsReceivableTotal = "$1,800.00";

// Top Selling Products
export const topProducts: TopProduct[] = [
	{ name: "Wireless Earbuds", status: "Stand by" },
	{ name: "Smart Televisions", status: "Stand by" },
	{ name: "Macbook", status: "Stand by" },
	{ name: "Gaming Chair", status: "Stand by" },
];

// Recent Invoices
export const recentInvoices: Invoice[] = [
	{
		customer: "John Doe",
		invoiceId: "INV-001",
		date: "Aug 15, 2025",
		amount: "$1,200.00",
		priority: "High",
		status: "Paid",
	},
	{
		customer: "Jane Smith",
		invoiceId: "INV-002",
		date: "Aug 14, 2025",
		amount: "$850.00",
		priority: "Medium",
		status: "Pending",
	},
	{
		customer: "Bob Johnson",
		invoiceId: "INV-003",
		date: "Aug 13, 2025",
		amount: "$2,100.00",
		priority: "High",
		status: "Paid",
	},
];

// Date range for header
export const dateRange = "Aug 11 - Aug 16, 2025";
