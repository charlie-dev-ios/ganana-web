import { DashboardChartGrid } from "@/components/dashboard/DashboardChartGrid";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold sm:text-4xl">ダッシュボード</h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        仮のダッシュボード画面です
      </p>
      <DashboardChartGrid />
    </div>
  );
}
