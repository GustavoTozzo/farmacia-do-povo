import { BadgeCheck, CalendarCheck, Droplet, HeartPulse, LucideIcon, Thermometer } from "lucide-react";
import type { PostIcone } from "@/lib/posts";

const iconMap: Record<PostIcone, LucideIcon> = {
  "heart-pulse": HeartPulse,
  droplet: Droplet,
  "calendar-check": CalendarCheck,
  "badge-check": BadgeCheck,
  thermometer: Thermometer,
};

export function PostIcon({ icone, className = "h-6 w-6" }: { icone: PostIcone; className?: string }) {
  const Icon = iconMap[icone];
  return <Icon className={className} strokeWidth={1.75} />;
}
