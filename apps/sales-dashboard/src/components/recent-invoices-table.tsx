import { useState } from "react";
import { History, Search, Filter, ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { recentInvoices } from "@/lib/data";
import { cn } from "@/lib/utils";

const getStatusVariant = (status: string) => {
	switch (status.toLowerCase()) {
		case "paid":
			return "default";
		case "pending":
			return "secondary";
		case "cancelled":
			return "destructive";
		default:
			return "outline";
	}
};

const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);
};

// Predefined gradient combinations
const gradientCombinations = [
	{ from: "from-purple-500", to: "to-pink-500" },
	{ from: "from-blue-500", to: "to-cyan-500" },
	{ from: "from-green-500", to: "to-emerald-500" },
	{ from: "from-orange-500", to: "to-red-500" },
	{ from: "from-indigo-500", to: "to-purple-500" },
	{ from: "from-teal-500", to: "to-blue-500" },
	{ from: "from-rose-500", to: "to-pink-500" },
	{ from: "from-amber-500", to: "to-orange-500" },
	{ from: "from-violet-500", to: "to-purple-500" },
	{ from: "from-sky-500", to: "to-blue-500" },
	{ from: "from-lime-500", to: "to-green-500" },
	{ from: "from-fuchsia-500", to: "to-pink-500" },
];

const getGradientForName = (name: string) => {
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}
	const index = Math.abs(hash) % gradientCombinations.length;
	return gradientCombinations[index];
};

export function RecentInvoicesTable() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());

	const filteredInvoices = recentInvoices.filter((invoice) =>
		invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
		invoice.invoiceId.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const toggleRowSelection = (invoiceId: string) => {
		const newSelected = new Set(selectedRows);
		if (newSelected.has(invoiceId)) {
			newSelected.delete(invoiceId);
		} else {
			newSelected.add(invoiceId);
		}
		setSelectedRows(newSelected);
	};

	const toggleAllSelection = () => {
		if (selectedRows.size === filteredInvoices.length) {
			setSelectedRows(new Set());
		} else {
			setSelectedRows(new Set(filteredInvoices.map((inv) => inv.invoiceId)));
		}
	};

	const allSelected = selectedRows.size === filteredInvoices.length && filteredInvoices.length > 0;
	const someSelected = selectedRows.size > 0 && selectedRows.size < filteredInvoices.length;

	return (
		<Card className="shadow-none gap-1 p-0 mx-6 mb-6 overflow-hidden border-none ring-0">
			<CardHeader className="flex flex-row items-start justify-between px-0! py-4!">
				<div className="flex items-start gap-3">
					<div className="flex aspect-square size-10 items-center justify-center rounded-full bg-muted border border-border">
						<History className="size-5 text-muted-foreground" />
					</div>
					<div className="flex flex-col gap-1">
						<h2 className="text-base font-medium">Recent invoices</h2>
						<p className="text-xs text-muted-foreground">
							Display the recent invoices in the table below.
						</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="relative">
						<Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
						<Input
							placeholder="Search..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8 w-[200px] h-9"
						/>
					</div>
					<Button variant="outline" size="sm" className="h-9 gap-1.5 px-2.5">
						<Filter className="size-4" />
						<span className="text-xs">1</span>
					</Button>
					<Button variant="secondary" size="sm" className="h-9 px-3">
						See All
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-0">
				<Table>
					<TableHeader>
						<TableRow className="bg-muted/50 hover:bg-muted/50 [&>th:first-child]:rounded-tl-lg [&>th:last-child]:rounded-tr-lg">
							<TableHead className="w-12 px-4 py-3">
								<Checkbox
									checked={allSelected}
									onCheckedChange={toggleAllSelection}
									aria-label="Select all"
									className={cn(
										someSelected && "data-[state=checked]:bg-primary/50",
									)}
								/>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Customer
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Invoice ID
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Date
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Amount
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Priority
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
							<TableHead className="font-medium px-4 py-3">
								<div className="flex items-center gap-2">
									Status
									<ArrowUpDown className="size-3.5 text-muted-foreground" />
								</div>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredInvoices.map((invoice) => (
							<TableRow key={invoice.invoiceId} className="border-b">
								<TableCell className="px-4 py-3">
									<Checkbox
										checked={selectedRows.has(invoice.invoiceId)}
										onCheckedChange={() => toggleRowSelection(invoice.invoiceId)}
										aria-label={`Select ${invoice.customer}`}
									/>
								</TableCell>
								<TableCell className="px-4 py-3">
									<div className="flex items-center gap-2.5">
										<Avatar className="size-7">
											<AvatarFallback
												className={cn(
													"text-xs text-white font-medium bg-gradient-to-br",
													getGradientForName(invoice.customer).from,
													getGradientForName(invoice.customer).to,
												)}
											>
												{getInitials(invoice.customer)}
											</AvatarFallback>
										</Avatar>
										<span className="font-medium text-sm">{invoice.customer}</span>
									</div>
								</TableCell>
								<TableCell className="px-4 py-3 font-mono text-sm">
									{invoice.invoiceId}
								</TableCell>
								<TableCell className="px-4 py-3 text-sm">{invoice.date}</TableCell>
								<TableCell className="px-4 py-3 font-medium text-sm">
									{invoice.amount}
								</TableCell>
								<TableCell className="px-4 py-3 text-sm">{invoice.priority}</TableCell>
								<TableCell className="px-4 py-3">
									<Badge
										variant={getStatusVariant(invoice.status) as any}
										className="rounded-full px-2.5 py-0.5 text-xs"
									>
										{invoice.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
