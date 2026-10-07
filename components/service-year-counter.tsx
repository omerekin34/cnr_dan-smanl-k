"use client";

import { useEffect, useState } from "react";
import { Counter } from "@/components/counter";
import { getYearsOfService } from "@/lib/service-years";

type ServiceYearCounterProps = {
  fallback: number;
  suffix?: string;
  className?: string;
};

export function ServiceYearCounter({ fallback, suffix = "+", className }: ServiceYearCounterProps) {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    const current = getYearsOfService();
    if (current !== fallback) setValue(current);
  }, [fallback]);

  return <Counter value={value} suffix={suffix} className={className} />;
}
