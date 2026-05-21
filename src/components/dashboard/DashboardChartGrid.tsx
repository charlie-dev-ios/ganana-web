"use client";

import { Check, Pencil, Plus, X } from "lucide-react";
import { useState } from "react";
import {
  type ChartCatalogItem,
  chartCatalog,
} from "@/components/dashboard/chart-catalog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const buttonBaseClass =
  "inline-flex items-center gap-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function DashboardChartGrid() {
  const [displayedIds, setDisplayedIds] = useState<string[]>(
    chartCatalog.map((item) => item.id),
  );
  const [isEditing, setIsEditing] = useState(false);

  const displayedCharts = chartCatalog.filter((item) =>
    displayedIds.includes(item.id),
  );
  const addableCharts = chartCatalog.filter(
    (item) => !displayedIds.includes(item.id),
  );

  const removeChart = (id: string) => {
    setDisplayedIds((ids) => ids.filter((displayedId) => displayedId !== id));
  };

  const addChart = (id: string) => {
    setDisplayedIds((ids) =>
      chartCatalog
        .map((item) => item.id)
        .filter((catalogId) => ids.includes(catalogId) || catalogId === id),
    );
  };

  return (
    <div className="mt-6">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsEditing((editing) => !editing)}
          className={cn(
            buttonBaseClass,
            "h-9 px-3",
            isEditing
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          )}
        >
          {isEditing ? (
            <>
              <Check className="size-4" aria-hidden="true" />
              完了
            </>
          ) : (
            <>
              <Pencil className="size-4" aria-hidden="true" />
              編集
            </>
          )}
        </button>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {displayedCharts.map((item) => (
          <ChartCard
            key={item.id}
            item={item}
            isEditing={isEditing}
            onRemove={() => removeChart(item.id)}
          />
        ))}
      </div>

      {isEditing && (
        <section className="mt-6">
          <h2 className="text-sm font-medium text-muted-foreground">
            チャートを追加
          </h2>
          {addableCharts.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {addableCharts.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`${item.title}を追加`}
                  onClick={() => addChart(item.id)}
                  className={cn(
                    buttonBaseClass,
                    "h-9 border border-dashed border-input bg-background px-3 hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <Plus className="size-4" aria-hidden="true" />
                  {item.title}
                </button>
              ))}
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              追加できるチャートはありません
            </p>
          )}
        </section>
      )}
    </div>
  );
}

interface ChartCardProps {
  item: ChartCatalogItem;
  isEditing: boolean;
  onRemove: () => void;
}

function ChartCard({ item, isEditing, onRemove }: ChartCardProps) {
  return (
    <Card className="relative">
      {isEditing && (
        <button
          type="button"
          aria-label={`${item.title}を削除`}
          onClick={onRemove}
          className={cn(
            buttonBaseClass,
            "absolute right-3 top-3 size-7 justify-center rounded-full border border-input bg-background text-muted-foreground hover:bg-destructive hover:text-white",
          )}
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      )}
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent>{item.chart}</CardContent>
    </Card>
  );
}
