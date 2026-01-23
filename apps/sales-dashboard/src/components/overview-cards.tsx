import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight, Mail, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { overviewCards } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  "arrow-bottom-left": ArrowDownLeft,
  "arrow-top-right": ArrowUpRight,
  envelope: Mail,
  calendar: Calendar,
};

const colorMap = {
  purple: "bg-primary",
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
};

const iconColorMap = {
  purple: "text-primary",
  blue: "text-blue-500",
  red: "text-red-500",
  yellow: "text-yellow-500",
};

interface AnimatedBarsProps {
  data: number[];
  color: string;
}

function AnimatedBars({ data, color }: AnimatedBarsProps) {
  // Calculate average score from data (0-100 scale)
  const averageValue = data.reduce((sum, val) => sum + val, 0) / data.length;
  // Normalize to 0-20 scale (20 bars total)
  const score = Math.round((averageValue / 100) * 35);
  const totalBars = 35;

  return (
    <div className="flex items-end gap-[6px]">
      {[...Array(totalBars)].map((_, index) => {
        const isActive = index < score;
        const barColor = isActive ? color : "bg-muted-foreground";
        const isTallBar = index >= 18; // Last 2 bars are taller

        return (
          <div className="relative" key={index.toString()}>
            <motion.div
              className={`w-0.75 ${barColor} relative z-10`}
              initial={{
                scaleY: 0,
                height: isTallBar ? "31px" : "27px",
                y: isTallBar ? -4 : 0,
              }}
              animate={{
                scaleY: 1,
                height: "27px",
                y: 0,
                opacity: isActive ? 1 : 0.3,
              }}
              transition={{
                duration: 0.15,
                delay: index * 0.02,
                scaleY: { duration: 0.15, delay: index * 0.02 },
                height: { duration: 0.1, delay: 0.15 + index * 0.02 },
                y: { duration: 0.1, delay: 0.15 + index * 0.02 },
                opacity: { duration: 0.1, delay: 0.15 + index * 0.02 },
              }}
              style={{ originY: 1 }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
      {overviewCards.map((card) => {
        const Icon = iconMap[card.icon as keyof typeof iconMap];
        const bgColor = colorMap[card.color as keyof typeof colorMap];
        const iconColor = iconColorMap[card.color as keyof typeof iconColorMap];

        return (
          <Card key={card.title} className="p-0 gap-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4 gap-3">
                <div className="size-12 rounded-full flex items-center justify-center border border-border">
                  <Icon className={cn("size-5", iconColor)} />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium text-muted-foreground/80">
                    {card.title}
                  </p>
                  <p className="text-xl font-normal!">{card.value}</p>
                </div>
              </div>
              <AnimatedBars data={card.data} color={bgColor} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
