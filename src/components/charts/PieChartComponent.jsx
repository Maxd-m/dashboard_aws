import React from "react";
import { PieChart } from "@mui/x-charts";

const mockData = [
  { category: "Electronics", value: 1200 },
  { category: "Clothing", value: 800 },
  { category: "Furniture", value: 500 },
];

export default function MinimalPieChart() {
  return (
    <div style={{ width: 400, height: 400 }}>
      <PieChart
        series={[
          {
            type: "pie",
            data: mockData.map((item) => ({
              name: item.category,
              value: item.value,
            })),
            name: "Sales",
          },
        ]}
      >
        
      </PieChart>
    </div>
  );
}
