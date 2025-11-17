import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartComponent({
  data, // [{ category: "...", value: number }]
  loading,
  error,
  xlabel, // Nombre principal de la serie
}) {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available for chart.</div>;
  }

  // Detectar automáticamente la clave numérica igual que en BarChartComponent
  const numericKey = Object.keys(data[0]).find(
    (key) => key !== "category" && typeof data[0][key] === "number"
  );

  if (!numericKey) {
    return <div>No numeric field found in data.</div>;
  }

  const formattedData = data.map((item) => ({
    label: item.category,
    value: Number(item[numericKey]),
  }));

  return (
    // style={{ width: "30vw", height: "40vh" }}
    <div className="chart-container">
      <PieChart
        series={[
          {
            type: "pie",
            data: formattedData,
            name: xlabel,
            arcLabel: (item) => `${item.value}`,
            arcLabelMinAngle: 7,
          },
        ]}
        sx={{
          "& .MuiChartsLegend-label": {
            color: "white",
          },
        }}
      />
    </div>
  );
}
