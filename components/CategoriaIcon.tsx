import {
  Baby,
  Cross,
  Droplets,
  FlaskConical,
  LucideIcon,
  Pill,
  Sparkles,
} from "lucide-react";
import type { Categoria } from "@/lib/produtos";

const iconMap: Record<Categoria, LucideIcon> = {
  medicamentos: Pill,
  "higiene-beleza": Sparkles,
  "mae-bebe": Baby,
  suplementos: FlaskConical,
  dermocosmeticos: Droplets,
  "primeiros-socorros": Cross,
};

export function CategoriaIcon({
  categoria,
  className = "h-6 w-6",
}: {
  categoria: Categoria;
  className?: string;
}) {
  const Icon = iconMap[categoria];
  return <Icon className={className} strokeWidth={1.75} />;
}
