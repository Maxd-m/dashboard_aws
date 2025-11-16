import { BarChart } from "@mui/x-charts/BarChart";
// import { useEffect, useState } from "react";

export default function ExampleBarChart({data, loading, error, xlabel, decimals, minY, maxY, tickCount}) {
  const categories = data.map((item) => item.category);

  if (!data || data.length === 0) {
    // Optionally return null, an empty div, or a loading/error message
    return <div>No data available for chart.</div>;
  }

  const numericKey = Object.keys(data[0]).find(
    (key) => key !== "category" && typeof data[0][key] === "number"
  );
  const values = data.map((item) => Number(item[numericKey]));
  //  const values = data.map((item) => item.total_sales);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const autoMin = Math.min(...values);
  const autoMax = Math.max(...values);

  // pequeño margen para que el gráfico “respire”
  const padding = (autoMax - autoMin) * 0.1;

  const finalMin = minY ?? autoMin - padding;
  const finalMax = maxY ?? autoMax + padding;

  const finalTickCount = tickCount ?? 6; // si no envías tickCount → usa 6

  // Genera ticks manuales
  const generateTicks = (min, max, count) => {
    const step = (max - min) / (count - 1);
    const ticks = [];
    for (let i = 0; i < count; i++) {
      ticks.push(min + step * i);
    }
    return ticks;
  };

  const yTicks = generateTicks(finalMin, finalMax, finalTickCount);

  return (
    <BarChart
      layout="horizontal"
      xAxis={[
        {
          scaleType: "band",
          data: categories,
        },
      ]}
      // margin={{ left: 90 }}
      yAxis={[
        {
          min: finalMin,
          max: finalMax,
          // tickCount: finalTickCount,
          ticks: yTicks,
          disableTickLabelFormat: true,
          valueFormatter: (v) => `${v.toFixed(5)}`,
        },
      ]}
      series={[
        {
          data: values,
          label: xlabel,
          valueFormatter: (value) => value.toFixed(decimals),
        },
      ]}
      width={500}
      height={300}
      sx={{
        "& .MuiChartsAxis-root": {
          stroke: "white",
        },
        "& .MuiChartsAxis-tickLabel": {
          fill: "white",
        },
        "& .MuiChartsAxis-label": {
          fill: "white",
        },
        "& .MuiChartsAxis-line": {
          stroke: "white",
        },
        "& .MuiChartsAxis-tick": {
          stroke: "black",
        },
        "& .MuiChartsAxis-tickLabel": {
          fontSize: 11, // o 10 o 9
        },
      }}
    />
  );
}
