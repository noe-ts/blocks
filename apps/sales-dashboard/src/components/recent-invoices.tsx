import { Search, ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { recentInvoices } from "@/lib/data";

export function RecentInvoices() {
	return (
		<Card className="shadow-none">
			<CardHeader>
				<div>
					<CardTitle className="font-medium">Recent invoices</CardTitle>
					<p className="text-sm text-muted-foreground mt-1">
						Display the recent invoices in the table below.
					</p>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex items-center justify-between mb-4">
					<div className="relative flex-1 max-w-sm">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
						<Input
							placeholder="Search invoices..."
							className="pl-9"
						/>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-sm text-muted-foreground">1</span>
						<Button variant="outline" size="sm">
							See All
						</Button>
					</div>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								<div className="flex items-center gap-1">
									Customer
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
							<TableHead>
								<div className="flex items-center gap-1">
									Invoice ID
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
							<TableHead>
								<div className="flex items-center gap-1">
									Date
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
							<TableHead>
								<div className="flex items-center gap-1">
									Amount
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
							<TableHead>
								<div className="flex items-center gap-1">
									Priority
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
							<TableHead>
								<div className="flex items-center gap-1">
									Status
									<div className="flex flex-col">
										<ChevronUp className="size-3" />
										<ChevronDown className="size-3 -mt-1" />
									</div>
								</div>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{recentInvoices.map((invoice) => (
							<TableRow key={invoice.invoiceId}>
								<TableCell className="font-medium">
									{invoice.customer}
								</TableCell>
								<TableCell>{invoice.invoiceId}</TableCell>
								<TableCell>{invoice.date}</TableCell>
								<TableCell>{invoice.amount}</TableCell>
								<TableCell>{invoice.priority}</TableCell>
								<TableCell>{invoice.status}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
