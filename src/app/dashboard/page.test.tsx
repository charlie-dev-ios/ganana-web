import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DashboardPage from "@/app/dashboard/page";

describe("ダッシュボード画面", () => {
  it("見出しを描画する", () => {
    render(<DashboardPage />);
    expect(
      screen.getByRole("heading", { name: "ダッシュボード" }),
    ).toBeInTheDocument();
  });

  it.each([
    "売上推移",
    "月間訪問者数",
    "チャネル別売上",
    "コンバージョン率",
  ])("チャートカード「%s」を描画する", (title) => {
    render(<DashboardPage />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("種類の異なる 4 つのチャートを描画する", () => {
    const { container } = render(<DashboardPage />);
    expect(container.querySelectorAll('[data-slot="chart"]')).toHaveLength(4);
  });
});
