import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Globe, Phone } from "lucide-react";
import { places, type Place } from "./places";

interface HomeMapProps {
  onMarkerClick?: (place: Place) => void;
}

export function HomeMap({ onMarkerClick }: HomeMapProps) {
  return (
    <div className="h-[calc(100%-100px)] mt-4 w-full rounded-lg overflow-hidden">
      <Map center={[2.3364, 48.8606]} zoom={13}>
        {places.map((place) => (
          <MapMarker
            key={place.id}
            longitude={place.lng}
            latitude={place.lat}
          >
            <MarkerContent>
              <MarkerLabel position="top">
                <Badge className="bg-teal-color text-white rounded-sm font-normal">
                  {place.label}
                </Badge>
              </MarkerLabel>
              <div
                className="size-5 rounded-full bg-teal-color border border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={() => onMarkerClick?.(place)}
              />
            </MarkerContent>
            <MarkerPopup className="p-0 w-[340px] border border-border shadow-xl rounded-xl">
              <div className="p-3">
                <div className="flex items-center mb-2">
                  <img
                    src={place.image}
                    alt="icon"
                    className="w-14 h-14 rounded-md object-cover mr-3 border border-border shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-lg leading-tight">
                      {place.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-normal">
                      <span>
                        {place.reviews.toLocaleString()} reviews
                      </span>
                      <span className="text-xs">•</span>
                      <span>{place.rating} stars</span>
                    </div>
                  </div>
                </div>
                <div className="text-muted-foreground text-xs mb-4 border-b pb-3">{place.description}</div>
                <div className="rounded-lg flex flex-col mb-1 border p-0">
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
                      className="text-sm truncate"
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
    </div>
  );
}
