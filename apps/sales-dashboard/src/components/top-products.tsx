import { Star, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { topProducts } from "@/lib/data";

export function TopProducts() {
	return (
		<Card className="shadow-none">
			<CardHeader>
				<div className="flex items-center gap-2">
					<Star className="size-4 text-muted-foreground" />
					<CardTitle className="font-medium">Top Selling Products</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-3">
					{topProducts.map((product) => (
						<div
							key={product.name}
							className="flex items-center justify-between py-2"
						>
							<span className="text-sm">{product.name}</span>
							<div className="flex items-center gap-2">
								<CheckCircle2 className="size-4 text-green-500" />
								<span className="text-xs text-green-600">{product.status}</span>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
