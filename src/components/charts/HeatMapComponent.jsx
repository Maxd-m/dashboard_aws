import React from "react";
import Chart from "react-apexcharts";

export default function SalesHeatmap({ data }) {
  const series = data.map((row) => ({
    name: row.region,
    data: row.values,
  }));

  const options = {
    chart: {
      type: "heatmap",
      toolbar: { show: false },
    },
    
    legend: {
      labels: {
        colors: "#fff",  // <--- color blanco para "0-10", "11-30", etc.
      }
    },

    dataLabels: {
      enabled: true,
      style: { colors: ["#000"] },
      formatter: (val) => val.toFixed(0),
    },

    xaxis: {
      categories: data[0].categories,
      labels: { style: { fontSize: "12px", colors: "#fff" } },
    },

    yaxis: {
      labels: { style: { fontSize: "12px", colors: "#fff" } },
    },

    grid: {
      // padding: { right: 20 },
      borderColor: "#e0e0e0",
    },

    plotOptions: {
      heatmap: {
        shadeIntensity: 0.6,
        radius: 2,

        // ✔ paleta estilo "YlGnBu"
        colorScale: {
          ranges: [
            { from: 0, to: 10, color: "#f7fcf5" },
            { from: 11, to: 30, color: "#c7e9c0" },
            { from: 31, to: 60, color: "#7fcdbb" },
            { from: 61, to: 100, color: "#41b6c4" },
            { from: 101, to: 200, color: "#2c7fb8" },
            { from: 201, to: 999999, color: "#253494" },
          ],
        },
      },
    },
  };

  return (
    // <div className="chart-container">
      <Chart options={options} series={series} type="heatmap" />
    // </div>
  );
}

// import React from "react";
// import Chart from "react-apexcharts";

// export default function SalesHeatmap({ data }) {
//   // ------------------------------------------------------
//   // 🔄 Transformación interna para adaptar dataStack al heatmap
//   // ------------------------------------------------------
//   const transformForHeatmap = (dataStack) => {
//     if (!dataStack || dataStack.length === 0)
//       return { series: [], categories: [] };

//     // Evita errores si la estructura no está lista todavía
//     if (!dataStack[0].products) {
//       return { series: [], categories: [] };
//     }

//     if (
//       !dataStack ||
//       dataStack.length === 0 ||
//       !dataStack[0] ||
//       !dataStack[0].products
//     ) {
//       return { series: [], categories: [] };
//     }

//     const categories = dataStack[0].products.map((p) => p.product_name);

//     const series = dataStack.map((region) => ({
//       name: region.region,
//       data: region.products.map((p) => p.total_quantity),
//     }));

//     return { series, categories };
//   };

//   const { series, categories } = transformForHeatmap(data);
//   // ------------------------------------------------------

//   const options = {
//     chart: {
//       type: "heatmap",
//       toolbar: { show: false },
//     },

//     legend: {
//       labels: {
//         colors: "#fff",
//       },
//     },

//     dataLabels: {
//       enabled: true,
//       style: { colors: ["#000"] },
//       formatter: (val) => val.toFixed(0),
//     },

//     xaxis: {
//       categories: categories,
//       labels: { style: { fontSize: "12px", colors: "#fff" } },
//     },

//     yaxis: {
//       labels: { style: { fontSize: "12px", colors: "#fff" } },
//     },

//     grid: {
//       borderColor: "#e0e0e0",
//     },

//     plotOptions: {
//       heatmap: {
//         shadeIntensity: 0.6,
//         radius: 2,
//         colorScale: {
//           ranges: [
//             { from: 0, to: 10, color: "#f7fcf5" },
//             { from: 11, to: 30, color: "#c7e9c0" },
//             { from: 31, to: 60, color: "#7fcdbb" },
//             { from: 61, to: 100, color: "#41b6c4" },
//             { from: 101, to: 200, color: "#2c7fb8" },
//             { from: 201, to: 999999, color: "#253494" },
//           ],
//         },
//       },
//     },
//   };

//   return <Chart options={options} series={series} type="heatmap" />;
// }
