import "@testing-library/jest-dom";

// recharts の ResponsiveContainer は ResizeObserver を利用するが、
// jsdom には実装されていないため最小限のスタブを用意する。
if (!globalThis.ResizeObserver) {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
