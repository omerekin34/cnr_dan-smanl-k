import {
  BadgeCheck,
  BriefcaseBusiness,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { FeatureIcon, ServiceIcon } from "@/types/content";

export const featureIcons: Record<FeatureIcon, LucideIcon> = {
  shield: ShieldCheck,
  bolt: Zap,
  badge: BadgeCheck,
};

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  users: Users,
  package: Package,
  warehouse: Warehouse,
  payroll: Wallet,
  sparkles: Sparkles,
  consulting: BriefcaseBusiness,
};
