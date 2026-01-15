import { Clock, Code, MapPin, Search, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { HomeMap } from "@/components/home-map";
export default function Home() {
  return (
    <div className="flex flex-row gap-4 h-full">
      <div className="p-4 w-3/5">
        <h1 className="text-2xl font-medium">Places to go in Vienna</h1>

        <Tabs defaultValue="places" className="mt-4">
          <TabsList>
            <TabsTrigger value="pro-search">
              <Search />
              Pro search
            </TabsTrigger>
            <TabsTrigger value="places">
              <MapPin className="text-teal-color" />
              Places
            </TabsTrigger>
            <TabsTrigger value="images">
              <Clock />
              Images
            </TabsTrigger>
            <TabsTrigger value="sources">
              <Code />
              Sources

              <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-muted-foreground/30 text-[11px] text-white">
                <span className="mr-px mt-0.5">12</span>
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <HomeMap />
      </div>
      <div className="border-l w-2/5">
        <div className="flex flex-row justify-between items-center w-full border-b p-3">
          <h2>Details</h2>
          <Button
            variant="outline"
            size="icon-sm"
          >
            <X />
          </Button>
        </div>

      </div>
    </div>
  );
}