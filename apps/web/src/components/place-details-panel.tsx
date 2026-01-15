import { Clock, MapPin, Phone, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Place } from "./places";

interface PlaceDetailsPanelProps {
  place: Place;
  onClose: () => void;
}

export function PlaceDetailsPanel({ place, onClose }: PlaceDetailsPanelProps) {
  return (
    <div className="border-l max-w-[380px] w-full flex flex-col h-full">
      <div className="flex flex-row justify-between items-center w-full border-b p-3 shrink-0">
        <h2 className="text-sm font-medium">Details</h2>
        <Button
          variant="outline"
          size="icon-sm"
          onClick={onClose}
        >
          <X />
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 space-y-3">
          {/* Place Name and Rating */}
          <div>
            <h1 className="text-xl font-medium">{place.name}</h1>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
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
              {place.images.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${place.name} ${index + 1}`}
                  className="w-24 h-24 rounded-md object-cover border border-border"
                />
              ))}
            </div>
          )}

          {/* Details Section */}
          <div>
            <h3 className="text-sm text-muted-foreground mb-3">Details</h3>
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

          {/* History Section */}
          {place.history && (
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">History</h3>
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                {place.history}
              </p>
            </div>
          )}

          {/* Tags Section */}
          {place.tags && place.tags.length > 0 && (
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Tags</h3>
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
