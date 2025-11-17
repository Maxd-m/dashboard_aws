export function getKPIs({ sales, salesReg }) {
  const result = {
    bestCategory: "-",
    worstCategory: "-",
    totalUnits: 0,
    bestRegion: "-",
    worstRegion: "-",
  };

  // =============================
  // 1. Mejor y peor categoría
  // =============================
  if (sales?.length > 0) {
    const numericKey = Object.keys(sales[0]).find(
      (k) => k !== "category" && typeof sales[0][k] === "number"
    );

    if (numericKey) {
      const sorted = [...sales].sort((a, b) => b[numericKey] - a[numericKey]);

      result.bestCategory = sorted[0]?.category ?? "-";
      result.worstCategory = sorted[sorted.length - 1]?.category ?? "-";
    }
  }

  // =============================
  // 2. Total unidades vendidas
  // =============================
  if (salesReg?.length > 0) {
    const numericKey = Object.keys(salesReg[0]).find(
      (k) => typeof salesReg[0][k] === "number"
    );

    if (numericKey) {
      result.totalUnits = salesReg.reduce(
        (sum, row) => sum + Number(row[numericKey]),
        0
      );
    }
  }

  // =============================
  // 3. Mejores / peores regiones
  // =============================
  if (salesReg?.length > 0) {
    const first = salesReg[0];

    const regionKey = Object.keys(first).find((k) =>
      k.toLowerCase().includes("region")
    );

    const numericKey = Object.keys(first).find(
      (k) => typeof first[k] === "number"
    );

    if (regionKey && numericKey) {
      const sorted = [...salesReg].sort(
        (a, b) => b[numericKey] - a[numericKey]
      );

      result.bestRegion = sorted[0]?.[regionKey] ?? "-";
      result.worstRegion = sorted[sorted.length - 1]?.[regionKey] ?? "-";
    }
  }

  return result;
}
