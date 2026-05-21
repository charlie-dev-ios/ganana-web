"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "1月", revenue: 1200 },
  { month: "2月", revenue: 1800 },
  { month: "3月", revenue: 1500 },
  { month: "4月", revenue: 2400 },
  { month: "5月", revenue: 2100 },
  { month: "6月", revenue: 3000 },
];

const config = {
  revenue: { label: "売上", color: "var(--chart-1)" },
} satisfies ChartConfig;

export function RevenueAreaChart() {
  return (
    <ChartContainer config={config}>
      <AreaChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          dataKey="revenue"
          type="natural"
          fill="var(--color-revenue)"
          fillOpacity={0.3}
          stroke="var(--color-revenue)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
