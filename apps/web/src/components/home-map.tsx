import {
	Clock,
	CpuIcon,
	Globe,
	MapPin,
	Menu,
	Mic,
	Phone,
	Send,
} from "lucide-react";
import { useState } from "react";
import {
	Map,
	MapControls,
	MapMarker,
	MarkerContent,
	MarkerLabel,
	MarkerPopup,
} from "@/components/ui/map";
import { type Place, places } from "./places";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

interface HomeMapProps {
	onMarkerClick?: (place: Place) => void;
}

export function HomeMap({ onMarkerClick }: HomeMapProps) {
	const [searchValue, setSearchValue] = useState("");

	return (
		<div className="relative mt-4 h-[calc(100%-100px)] w-full overflow-hidden rounded-lg">
			<Map center={[2.3364, 48.8606]} zoom={13}>
				<MapControls position="bottom-right" showZoom />

				{places.map((place) => (
					<MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
						<MarkerContent>
							<MarkerLabel position="top">
								<Badge className="rounded-sm bg-teal-color font-normal text-white">
									{place.label}
								</Badge>
							</MarkerLabel>
							<div
								className="size-5 cursor-pointer rounded-full border border-white bg-teal-color shadow-lg transition-transform hover:scale-110"
								onClick={() => onMarkerClick?.(place)}
							/>
						</MarkerContent>
						<MarkerPopup className="w-[340px] rounded-xl border border-border p-0 shadow-xl">
							<div className="p-3">
								<div className="mb-2 flex items-center">
									<img
										src={place.image}
										alt="icon"
										className="mr-3 h-14 w-14 shrink-0 rounded-md border border-border object-cover"
									/>
									<div className="flex flex-col gap-2">
										<h3 className="font-medium text-lg leading-tight">
											{place.name}
										</h3>
										<div className="flex items-center gap-1 font-normal text-muted-foreground text-sm">
											<span>{place.reviews.toLocaleString()} reviews</span>
											<span className="text-xs">•</span>
											<span>{place.rating} stars</span>
										</div>
									</div>
								</div>
								<div className="mb-4 border-b pb-3 text-muted-foreground text-xs">
									{place.description}
								</div>
								<div className="mb-1 flex flex-col rounded-lg border p-0">
									<div className="flex items-center gap-2 border-b p-3">
										<MapPin className="size-4 text-teal-color" />
										<span className="text-sm">{place.address}</span>
									</div>
									<div className="flex items-center gap-2 border-b p-3">
										<Phone className="size-4 text-teal-color" />
										<a
											className="text-sm"
											href={`tel:${place.phone.replace(/\s+/g, "")}`}
										>
											{place.phone}
										</a>
									</div>
									<div className="flex items-center gap-2 border-b p-3">
										<Globe className="size-4 text-teal-color" />
										<a
											className="truncate text-sm"
											href={place.website}
											target="_blank"
											rel="noopener noreferrer"
										>
											{place.website.replace(/^https?:\/\//, "")}
										</a>
									</div>
									<div className="flex items-center gap-2 p-3">
										<Clock className="size-4 text-teal-color" />
										<span className="text-sm">{place.hours}</span>
									</div>
								</div>
							</div>
						</MarkerPopup>
					</MapMarker>
				))}
			</Map>

			{/* Search bar overlay */}
			<div className="absolute right-0 bottom-4 left-0 z-10 flex justify-center">
				<div className="mx-auto flex w-full max-w-[500px] items-center gap-2 rounded-lg border border-border bg-background/95 px-3 py-2 shadow-lg backdrop-blur-sm">
					<div className="rounded-md border border-teal-color/30 bg-teal-color/10 p-1.5">
						<CpuIcon className="size-4 text-teal-color" />
					</div>
					<Input
						type="text"
						placeholder="Ask follow-up"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
						className="h-auto border-0 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
					<div className="flex shrink-0 items-center gap-2">
						<button
							type="button"
							className="rounded-md p-1.5 transition-colors hover:bg-muted"
							aria-label="Voice input"
						>
							<Mic className="size-4 text-muted-foreground" />
						</button>
						<button
							type="button"
							className="rounded-md bg-primary p-1.5 transition-colors"
							aria-label="Send"
						>
							<Send className="size-4 text-white" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
