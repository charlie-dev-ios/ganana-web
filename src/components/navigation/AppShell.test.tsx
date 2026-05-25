import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppShell } from "./AppShell";

describe("AppShell", () => {
  it("子要素を描画する", () => {
    render(<AppShell>コンテンツ</AppShell>);
    expect(screen.getByText("コンテンツ")).toBeInTheDocument();
  });

  it("サイドバーを描画する", () => {
    const { container } = render(<AppShell>コンテンツ</AppShell>);
    expect(
      container.querySelector('[data-slot="sidebar"]'),
    ).toBeInTheDocument();
  });

  it("サイドバーの開閉を切り替えるトグルボタンを描画する", () => {
    render(<AppShell>コンテンツ</AppShell>);
    expect(
      screen.getByRole("button", { name: "サイドバーを開閉" }),
    ).toBeInTheDocument();
  });

  // CHA-185 回帰テスト: サイドバーが固定配置されることで、
  // コンテンツをスクロールしてもサイドバーが追従しないことを保証する。
  it("サイドバーはコンテンツのスクロールに追従しないよう固定配置される", () => {
    const { container } = render(<AppShell>コンテンツ</AppShell>);
    const sidebarContainer = container.querySelector(
      '[data-slot="sidebar-container"]',
    );
    expect(sidebarContainer).toHaveClass("fixed");
  });

  it("コンテンツ領域を main ランドマークとして描画する", () => {
    render(<AppShell>コンテンツ</AppShell>);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
