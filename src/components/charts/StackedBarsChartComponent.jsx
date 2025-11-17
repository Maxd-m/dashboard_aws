// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const dataset = [
//   { category: "SOUTH", productA: 534, productB: 513 },
//   { category: "NORTH", productA: 553, productB: 482 },
//   { category: "EAST", productA: 539, productB: 501 },
//   { category: "WEST", productA: 533, productB: 521 },
// ];

// export default function StackedBarChart() {
//   return (
//     <div style={{ width: 600, height: 320 }}>
//       <BarChart
//         height={300}
//         dataset={dataset}
//         series={[
//           { dataKey: "productA", label: "Producto A", stack: "total" },
//           { dataKey: "productB", label: "Producto B", stack: "total" },
//         ]}
//         xAxis={[{ dataKey: "category" }]}
//         sx={{
//           "& .MuiChartsAxis-root": {
//             stroke: "white",
//           },
//           "& .MuiChartsAxis-tickLabel": {
//             fill: "white",
//           },
//           "& .MuiChartsAxis-label": {
//             fill: "white",
//           },
//           "& .MuiChartsAxis-line": {
//             stroke: "white",
//           },
//           "& .MuiChartsAxis-tick": {
//             stroke: "white",
//           },
//           "& .MuiChartsAxis-tickLabel": {
//             fontSize: 11, // o 10 o 9
//           },
//         }}
//       />
//     </div>
//   );
// }
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function StackedBarChart({ data, loading, error }) {
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available for chart.</div>;
    }
  // Transformar data al formato que acepta BarChart
  const dataset = data.map((region) => {
    const row = { category: region.region };

    region.products.forEach((prod) => {
      row[prod.product_name] = prod.total_quantity;
    });

    return row;
  });

  // Crear series dinámicas (un bar por producto)
  const allProducts = Array.from(
    new Set(data.flatMap((r) => r.products.map((p) => p.product_name)))
  );

  const series = allProducts.map((product) => ({
    dataKey: product,
    label: product,
    stack: "total",
  }));

  return (
    // style={{ width: "30vw", height: "50vh" }}
    <div className="chart-container">
      <BarChart
        height={300}
        dataset={dataset}
        series={series}
        xAxis={[{ dataKey: "category" }]}
        // slotProps={{
        //   legend: {
        //     labelstyle: { fill: "white" }, // ⬅ cambia el texto de la leyenda a blanco
        //   },
        // }}
        sx={{
          "& .MuiChartsAxis-root": { stroke: "white" },
          "& .MuiChartsAxis-tickLabel": { fill: "white", fontSize: 11 },
          "& .MuiChartsAxis-label": { fill: "white" },
          "& .MuiChartsAxis-line": { stroke: "white" },
          "& .MuiChartsAxis-tick": { stroke: "white" },
          "& .MuiChartsLegend-root": {
            color: "white !important",
          },
        }}
      />
    </div>
  );
}
