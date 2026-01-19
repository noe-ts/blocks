import { Clock, Code, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { HomeMap } from "@/components/home-map";
import { PlaceDetailsPanel } from "@/components/place-details-panel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Place } from "./places";

export default function Home() {
	const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

	return (
		<div className="flex h-full flex-row gap-4">
			<div className="w-full p-4">
				<h1 className="font-medium text-2xl">Places to go in Paris</h1>

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
							<span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30 text-[11px] text-white">
								<span className="mt-0.5 mr-px">12</span>
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
