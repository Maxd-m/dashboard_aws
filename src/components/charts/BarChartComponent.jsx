import { BarChart } from "@mui/x-charts/BarChart";
// import { useEffect, useState } from "react";

export default function BarChartComponent({
  data,
  loading,
  error,
  xlabel,
  decimals,
  minY,
  maxY,
  tickCount,
}) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Cargando...</div>;
  }
  
  if (!data || data.length === 0) {
    // Optionally return null, an empty div, or a loading/error message
    return <div>Cargando...</div>;
  }

  // reconocer automaticamente categorias
  const categoryKey = Object.keys(data[0]).find(
    (key) =>
      ["category", "region", "label", "name"].includes(key) &&
      typeof data[0][key] === "string"
  );

  if (!categoryKey) {
    return <div>No category-like field found</div>;
  }

  const categories = data.map((item) => item[categoryKey]);
  // const categories = data.map((item) => item.category);

  // reconocer automaticamente valores
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

  const colorPalette = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  return (
    // style={{ width: "30vw", height: "40vh" }}
    <div className="chart-container">
      <BarChart
        // layout="horizontal"
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
        // series={values.map((value, i) => ({
        //   data: [value],
        //   label: categories[i],
        //   color: colorPalette[i % colorPalette.length],
        // }))}
        slotProps={{
          bar: {
            label: ({ value }) => value.toFixed(decimals),
          },
        }}
        series={[
          {
            data: values,
            label: xlabel,
            valueFormatter: (value) => value.toFixed(decimals),
            color: "#7fcdbb",
            // colors: values.map((_, i) => colorPalette[i % colorPalette.length]),
          },
        ]}
        // width={"30vw"}
        // height={"auto"}
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
            stroke: "white",
            fontSize: 11,
          },
          "& .MuiChartsLegend-root": {
            color: "white !important",
          },
        }}
      />
    </div>
  );
}
