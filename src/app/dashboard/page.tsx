import type { ReactNode } from "react";
import { ChannelStackedBarChart } from "@/components/dashboard/ChannelStackedBarChart";
import { ConversionLineChart } from "@/components/dashboard/ConversionLineChart";
import { RevenueAreaChart } from "@/components/dashboard/RevenueAreaChart";
import { VisitorBarChart } from "@/components/dashboard/VisitorBarChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ChartSection {
  title: string;
  description: string;
  chart: ReactNode;
}

const sections: ChartSection[] = [
  {
    title: "売上推移",
    description: "月次の売上推移（エリアチャート）",
    chart: <RevenueAreaChart />,
  },
  {
    title: "月間訪問者数",
    description: "月次の訪問者数（棒グラフ）",
    chart: <VisitorBarChart />,
  },
  {
    title: "チャネル別売上",
    description: "流入チャネル別の内訳（積み上げ棒グラフ）",
    chart: <ChannelStackedBarChart />,
  },
  {
    title: "コンバージョン率",
    description: "月次のコンバージョン率（折れ線グラフ）",
    chart: <ConversionLineChart />,
  },
];

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">ダッシュボード</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        仮のダッシュボード画面です
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardContent>{section.chart}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
