import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Badge } from "./ui/badge";
import { MapPin, Clock, Globe, Phone, Menu, Mic, Send, CpuIcon } from "lucide-react";
import { places, type Place } from "./places";
import { Input } from "./ui/input";
import { useState } from "react";

interface HomeMapProps {
  onMarkerClick?: (place: Place) => void;
}

export function HomeMap({ onMarkerClick }: HomeMapProps) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="h-[calc(100%-100px)] mt-4 w-full rounded-lg overflow-hidden relative">
      <Map center={[2.3364, 48.8606]} zoom={13}>
      <MapControls
          position="bottom-right"
          showZoom
      />

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
      
      {/* Search bar overlay */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
        <div className="flex items-center gap-2 bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg max-w-[500px] w-full mx-auto">
          <div className="bg-teal-color/10 rounded-md border border-teal-color/30 p-1.5">
            <CpuIcon className="size-4 text-teal-color" />
          </div>
          <Input
            type="text"
            placeholder="Ask follow-up"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none px-0 h-auto"
          />
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              className="p-1.5 hover:bg-muted rounded-md transition-colors"
              aria-label="Voice input"
            >
              <Mic className="size-4 text-muted-foreground" />
            </button>
            <button
              type="button"
              className="p-1.5 rounded-md bg-primary transition-colors"
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
