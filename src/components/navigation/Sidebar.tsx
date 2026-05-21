import {
  LayoutDashboard,
  type LucideIcon,
  Plus,
  Settings,
  Table2,
  UserCircle,
} from "lucide-react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const primaryItems: NavItem[] = [
  { label: "ダッシュボード", href: "/dashboard", icon: LayoutDashboard },
  { label: "テーブル定義", href: "#", icon: Table2 },
  { label: "データ追加", href: "#", icon: Plus },
];

const secondaryItems: NavItem[] = [
  { label: "設定", href: "#", icon: Settings },
  { label: "アカウント", href: "#", icon: UserCircle },
];

function NavLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-foreground/5"
    >
      <Icon className="size-4" aria-hidden="true" />
      <span>{item.label}</span>
    </Link>
  );
}

export function Sidebar() {
  return (
    <nav
      aria-label="メインナビゲーション"
      className="flex h-dvh w-60 shrink-0 flex-col gap-1 border-r border-foreground/10 p-3"
    >
      <div className="px-3 py-2 text-lg font-bold">Ganana</div>
      {primaryItems.map((item) => (
        <NavLink key={item.label} item={item} />
      ))}
      <div className="flex-1" />
      {secondaryItems.map((item) => (
        <NavLink key={item.label} item={item} />
      ))}
    </nav>
  );
}
