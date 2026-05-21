import type { ReactNode } from "react";
import { ChannelStackedBarChart } from "@/components/dashboard/ChannelStackedBarChart";
import { ConversionLineChart } from "@/components/dashboard/ConversionLineChart";
import { RevenueAreaChart } from "@/components/dashboard/RevenueAreaChart";
import { VisitorBarChart } from "@/components/dashboard/VisitorBarChart";

export interface ChartCatalogItem {
  id: string;
  title: string;
  description: string;
  chart: ReactNode;
}

export const chartCatalog: ChartCatalogItem[] = [
  {
    id: "revenue",
    title: "売上推移",
    description: "月次の売上推移（エリアチャート）",
    chart: <RevenueAreaChart />,
  },
  {
    id: "visitor",
    title: "月間訪問者数",
    description: "月次の訪問者数（棒グラフ）",
    chart: <VisitorBarChart />,
  },
  {
    id: "channel",
    title: "チャネル別売上",
    description: "流入チャネル別の内訳（積み上げ棒グラフ）",
    chart: <ChannelStackedBarChart />,
  },
  {
    id: "conversion",
    title: "コンバージョン率",
    description: "月次のコンバージョン率（折れ線グラフ）",
    chart: <ConversionLineChart />,
  },
];
