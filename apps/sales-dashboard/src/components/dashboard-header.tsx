import { Calendar, Upload, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { dateRange } from "@/lib/data";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between px-6 h-16 mb-2">
      <div>
        <h1 className="text-xl font-medium">Dashboard overview</h1>
        <p className="text-xs text-muted-foreground">
          A summary of all the purchases, sales and other activities.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 border rounded-md text-sm">
          <Calendar className="size-4 text-muted-foreground" />
          <span className="font-medium">{dateRange}</span>
          <ChevronDown className="size-4 text-muted-foreground" />
        </div>
        <Select defaultValue="every-platforms">
          <SelectTrigger className="w-[160px]">
            <SelectValue>Every Platforms</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="every-platforms">Every Platforms</SelectItem>
            <SelectItem value="platform-1">Platform 1</SelectItem>
            <SelectItem value="platform-2">Platform 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-products">
          <SelectTrigger className="w-[140px]">
            <SelectValue>All Products</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-products">All Products</SelectItem>
            <SelectItem value="product-1">Product 1</SelectItem>
            <SelectItem value="product-2">Product 2</SelectItem>
          </SelectContent>
        </Select>
        <Button className="gap-2">
          <Upload className="size-4" />
          Export
        </Button>
      </div>
    </div>
  );
}
