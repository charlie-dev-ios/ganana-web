import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  const labels = [
    "ダッシュボード",
    "テーブル定義",
    "データ追加",
    "設定",
    "アカウント",
  ];

  it.each(labels)("ナビゲーション項目「%s」をリンクとして描画する", (label) => {
    render(<Sidebar />);
    expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
  });

  it("メインナビゲーションのランドマークとして描画する", () => {
    render(<Sidebar />);
    expect(
      screen.getByRole("navigation", { name: "メインナビゲーション" }),
    ).toBeInTheDocument();
  });
});
