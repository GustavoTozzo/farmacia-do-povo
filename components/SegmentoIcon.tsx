import { Flame, FlaskConical, LucideIcon, Scissors, ShieldPlus, Sparkle, Venus } from "lucide-react";
import type { segmentos } from "@/lib/manipulados";

type Icone = (typeof segmentos)[number]["icone"];

const iconMap: Record<Icone, LucideIcon> = {
  flame: Flame,
  "flask-conical": FlaskConical,
  scissors: Scissors,
  sparkle: Sparkle,
  venus: Venus,
  "shield-plus": ShieldPlus,
};

export function SegmentoIcon({ icone, className = "h-6 w-6" }: { icone: Icone; className?: string }) {
  const Icon = iconMap[icone];
  return <Icon className={className} strokeWidth={1.75} />;
}
