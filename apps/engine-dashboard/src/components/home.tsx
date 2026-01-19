import { useState } from "react";
import { Clock, Code, MapPin, Search } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HomeMap } from "@/components/home-map";
import { PlaceDetailsPanel } from "@/components/place-details-panel";
import { type Place } from "./places";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  return (
    <div className="flex flex-row gap-4 h-full">
      <div className="p-4 w-full">
        <h1 className="text-2xl font-medium">Places to go in Paris</h1>

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

        <HomeMap onMarkerClick={setSelectedPlace} />
      </div>
      {selectedPlace && (
        <PlaceDetailsPanel
          place={selectedPlace}
          onClose={() => setSelectedPlace(null)}
        />
      )}
    </div>
  );
}