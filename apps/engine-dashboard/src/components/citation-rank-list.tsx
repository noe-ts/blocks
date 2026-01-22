import * as React from "react";
import { CitationRank, type CitationEntity } from "./citation-rank";
import { cn } from "@/lib/utils";

// Icon components for citation entities
const AceIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
	</svg>
);

const DeelIcon = ({ className }: { className?: string }) => (
	<span className={cn("font-bold text-sm", className)}>D</span>
);

const RampIcon = ({ className }: { className?: string }) => (
	<svg
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

const RipplingIcon = ({ className }: { className?: string }) => (
	<span className={cn("font-bold text-sm", className)}>R</span>
);

const AttentivIcon = ({ className }: { className?: string }) => (
	<span className={cn("font-bold text-sm", className)}>A</span>
);

const entities: CitationEntity[] = [
	{
		name: "Ace",
		icon: AceIcon,
		color: "#3b82f6", // blue
		value: 35,
	},
	{
		name: "Deel",
		icon: DeelIcon,
		color: "#9333ea", // purple
		value: 25,
	},
	{
		name: "Ramp",
		icon: RampIcon,
		color: "#22c55e", // green
		value: 20,
	},
	{
		name: "Rippling",
		icon: RipplingIcon,
		color: "#a16207", // brown/amber
		value: 12,
	},
	{
		name: "Attentiv",
		icon: AttentivIcon,
		color: "#eab308", // yellow
		value: 8,
	},
];

export function CitationRankList() {
	return <CitationRank rank="#1" entities={entities} />;
}
