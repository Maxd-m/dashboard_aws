import { BarChart } from "@mui/x-charts/BarChart";
// import { useEffect, useState } from "react";

export default function ExampleBarChart({data}) {
   const categories = data.map((item) => item.category);
   const values = data.map((item) => item.total_sales);

  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: categories,
        },
      ]}
      series={[{ data: values, label: "Total Sales" }]}
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
      }}
    />
  );
}
