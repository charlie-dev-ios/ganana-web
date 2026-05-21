"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "1月", organic: 420, paid: 240, referral: 140 },
  { month: "2月", organic: 510, paid: 280, referral: 160 },
  { month: "3月", organic: 480, paid: 320, referral: 190 },
  { month: "4月", organic: 620, paid: 360, referral: 210 },
  { month: "5月", organic: 590, paid: 300, referral: 230 },
  { month: "6月", organic: 700, paid: 410, referral: 260 },
];

const config = {
  organic: { label: "自然流入", color: "var(--chart-1)" },
  paid: { label: "広告", color: "var(--chart-3)" },
  referral: { label: "リファラル", color: "var(--chart-5)" },
} satisfies ChartConfig;

export function ChannelStackedBarChart() {
  return (
    <ChartContainer config={config}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="organic" stackId="channel" fill="var(--color-organic)" />
        <Bar dataKey="paid" stackId="channel" fill="var(--color-paid)" />
        <Bar
          dataKey="referral"
          stackId="channel"
          fill="var(--color-referral)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
