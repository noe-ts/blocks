import { Clock, Globe, MapPin, Phone, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Place } from "./places";

interface PlaceDetailsPanelProps {
	place: Place;
	onClose: () => void;
}

export function PlaceDetailsPanel({ place, onClose }: PlaceDetailsPanelProps) {
	return (
		<div className="flex h-full w-full max-w-[420px] flex-col border-l">
			<div className="flex w-full shrink-0 flex-row items-center justify-between border-b p-3">
				<h2 className="font-medium text-sm">Details</h2>
				<Button variant="outline" size="icon-sm" onClick={onClose}>
					<X />
				</Button>
			</div>
			<div className="flex-1 overflow-y-auto">
				<div className="space-y-3 p-3">
					{/* Place Name and Rating */}
					<div>
						<h1 className="font-medium text-xl">{place.name}</h1>
						<div className="flex items-center gap-1 text-muted-foreground text-sm">
							<span>{place.reviews.toLocaleString()} reviews</span>
							<span>•</span>
							<div className="flex items-center gap-1">
								<span>{place.rating} stars</span>
							</div>
						</div>
					</div>

					{/* Image Gallery */}
					{place.images && place.images.length > 0 && (
						<div className="flex gap-2">
							{place.images.slice(0, 4).map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`${place.name} ${index + 1}`}
									className="h-24 w-24 rounded-md border border-border object-cover"
								/>
							))}
						</div>
					)}

					{/* Details Section */}
					<div>
						<h3 className="mb-3 text-muted-foreground text-sm">Details</h3>
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

					{/* History Section */}
					{place.history && (
						<div>
							<h3 className="mb-3 text-muted-foreground text-sm">History</h3>
							<p className="whitespace-pre-line text-muted-foreground text-xs leading-relaxed">
								{place.history}
							</p>
						</div>
					)}

					{/* Tags Section */}
					{place.tags && place.tags.length > 0 && (
						<div>
							<h3 className="mb-3 text-muted-foreground text-sm">Tags</h3>
							<div className="flex flex-wrap gap-2">
								{place.tags.map((tag, index) => (
									<Badge
										key={index}
										className="rounded-md bg-teal-color/10 text-teal-color"
									>
										{tag}
									</Badge>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
