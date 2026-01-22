import { CitationRank, type CitationEntity } from "./citation-rank";

// Icon components for citation entities using logos from public folder
const AceIcon = ({ className }: { className?: string }) => (
	<img src="/logo.png" alt="Ace" className={className} />
);

const DeelIcon = ({ className }: { className?: string }) => (
	<img src="/deel.webp" alt="Deel" className={className} />
);

const RampIcon = ({ className }: { className?: string }) => (
	<img src="/ramp.jpeg" alt="Ramp" className={className} />
);

const RipplingIcon = ({ className }: { className?: string }) => (
	<img src="/rippling.jpeg" alt="Rippling" className={className} />
);

const AttentivIcon = ({ className }: { className?: string }) => (
	<img src="/attentive.png" alt="Attentiv" className={className} />
);

const entities: CitationEntity[] = [
	{
		name: "Acme",
		icon: AceIcon,
		color: "var(--primary)",
		value: 35,
	},
	{
		name: "Deel",
		icon: DeelIcon,
		color: "#b59cf7",
		value: 25,
	},
	{
		name: "Ramp",
		icon: RampIcon,
		color: "#e4f220",
		value: 20,
	},
	{
		name: "Rippling",
		icon: RipplingIcon,
		color: "#fdb71d",
		value: 12,
	},
	{
		name: "Attentiv",
		icon: AttentivIcon,
		color: "#fff382",
		value: 8,
	},
];

export function CitationRankList() {
	return <CitationRank rank="#1" entities={entities} />;
}
