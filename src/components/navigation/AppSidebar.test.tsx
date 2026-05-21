import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

function renderAppSidebar() {
  return render(
    <SidebarProvider>
      <AppSidebar />
    </SidebarProvider>,
  );
}

describe("AppSidebar", () => {
  const labels = [
    "ダッシュボード",
    "テーブル定義",
    "データ追加",
    "設定",
    "アカウント",
  ];

  it.each(labels)("ナビゲーション項目「%s」をリンクとして描画する", (label) => {
    renderAppSidebar();
    expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
  });

  it("メインナビゲーションのランドマークとして描画する", () => {
    renderAppSidebar();
    expect(
      screen.getByRole("navigation", { name: "メインナビゲーション" }),
    ).toBeInTheDocument();
  });

  it("ダッシュボード項目はダッシュボード画面へのリンクになっている", () => {
    renderAppSidebar();
    expect(
      screen.getByRole("link", { name: "ダッシュボード" }),
    ).toHaveAttribute("href", "/dashboard");
  });
});
