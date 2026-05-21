"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "1月", rate: 2.4 },
  { month: "2月", rate: 2.9 },
  { month: "3月", rate: 2.7 },
  { month: "4月", rate: 3.4 },
  { month: "5月", rate: 3.1 },
  { month: "6月", rate: 3.8 },
];

const config = {
  rate: { label: "コンバージョン率", color: "var(--chart-4)" },
} satisfies ChartConfig;

export function ConversionLineChart() {
  return (
    <ChartContainer config={config}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          dataKey="rate"
          type="monotone"
          stroke="var(--color-rate)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
