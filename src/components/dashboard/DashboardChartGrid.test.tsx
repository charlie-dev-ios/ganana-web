import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DashboardChartGrid } from "./DashboardChartGrid";

describe("DashboardChartGrid", () => {
  it("初期表示で 4 つのチャートカードを描画する", () => {
    render(<DashboardChartGrid />);
    for (const title of [
      "売上推移",
      "月間訪問者数",
      "チャネル別売上",
      "コンバージョン率",
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument();
    }
  });

  it("編集ボタンを描画する", () => {
    render(<DashboardChartGrid />);
    expect(screen.getByRole("button", { name: "編集" })).toBeInTheDocument();
  });

  it("通常表示では削除ボタンを表示しない", () => {
    render(<DashboardChartGrid />);
    expect(
      screen.queryByRole("button", { name: /売上推移を削除/ }),
    ).not.toBeInTheDocument();
  });

  it("編集ボタン押下で各カードに削除ボタンを表示する", async () => {
    const user = userEvent.setup();
    render(<DashboardChartGrid />);
    await user.click(screen.getByRole("button", { name: "編集" }));
    expect(
      screen.getByRole("button", { name: "売上推移を削除" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "コンバージョン率を削除" }),
    ).toBeInTheDocument();
  });

  it("完了ボタン押下で編集モードを解除する", async () => {
    const user = userEvent.setup();
    render(<DashboardChartGrid />);
    await user.click(screen.getByRole("button", { name: "編集" }));
    await user.click(screen.getByRole("button", { name: "完了" }));
    expect(screen.getByRole("button", { name: "編集" })).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "売上推移を削除" }),
    ).not.toBeInTheDocument();
  });

  it("削除ボタン押下でチャートカードを取り除く", async () => {
    const user = userEvent.setup();
    render(<DashboardChartGrid />);
    await user.click(screen.getByRole("button", { name: "編集" }));
    expect(
      screen.getByRole("button", { name: "売上推移を削除" }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "売上推移を削除" }));
    expect(
      screen.queryByRole("button", { name: "売上推移を削除" }),
    ).not.toBeInTheDocument();
    // 他のチャートカードは残る
    expect(
      screen.getByRole("button", { name: "コンバージョン率を削除" }),
    ).toBeInTheDocument();
  });

  it("編集モードで削除済みチャートを追加 UI から復元できる", async () => {
    const user = userEvent.setup();
    render(<DashboardChartGrid />);
    await user.click(screen.getByRole("button", { name: "編集" }));
    await user.click(screen.getByRole("button", { name: "売上推移を削除" }));
    expect(
      screen.queryByRole("button", { name: "売上推移を削除" }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "売上推移を追加" }));
    // 削除ボタンが復活＝カードが再表示された
    expect(
      screen.getByRole("button", { name: "売上推移を削除" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "売上推移を追加" }),
    ).not.toBeInTheDocument();
  });

  it("全チャート表示中は追加候補が空であることを示す", async () => {
    const user = userEvent.setup();
    render(<DashboardChartGrid />);
    await user.click(screen.getByRole("button", { name: "編集" }));
    expect(
      screen.getByText("追加できるチャートはありません"),
    ).toBeInTheDocument();
  });
});
