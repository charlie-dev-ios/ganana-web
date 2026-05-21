"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "1月", visitors: 820 },
  { month: "2月", visitors: 932 },
  { month: "3月", visitors: 1010 },
  { month: "4月", visitors: 1290 },
  { month: "5月", visitors: 1180 },
  { month: "6月", visitors: 1450 },
];

const config = {
  visitors: { label: "訪問者数", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function VisitorBarChart() {
  return (
    <ChartContainer config={config}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visitors" fill="var(--color-visitors)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
