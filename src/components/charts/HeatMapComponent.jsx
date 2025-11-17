import React from "react";
import Chart from "react-apexcharts";

export default function SalesHeatmap({ data, loading, error }) {
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(data) || data.length === 0)
    return <div>No data available for chart.</div>;

  const allValues = data.flatMap((r) => r.values);
  const minVal = Math.min(...allValues);
  const maxVal = Math.max(...allValues);
  const step = (maxVal - minVal) / 5;

  const colorScale = [
    { from: minVal, to: minVal + step, color: "#f7fcf5" },
    { from: minVal + step, to: minVal + step * 2, color: "#c7e9c0" },
    { from: minVal + step * 2, to: minVal + step * 3, color: "#7fcdbb" },
    { from: minVal + step * 3, to: minVal + step * 4, color: "#41b6c4" },
    { from: minVal + step * 4, to: maxVal, color: "#253494" },
  ];

  const series = data.map((row) => ({
    name: row.region,
    data: row.values,
  }));

  const options = {
    chart: { type: "heatmap", toolbar: { show: false } },

    xaxis: {
      categories: data[0].categories,
      labels: { style: { fontSize: "12px", colors: "#fff" } },
    },

    yaxis: {
      labels: { style: { fontSize: "12px", colors: "#fff" } },
    },

    dataLabels: {
      enabled: true,
      style: { colors: ["#000"] },
      formatter: (val) => val.toFixed(0),
    },

    plotOptions: {
      heatmap: {
        shadeIntensity: 0.6,
        radius: 3,
        colorScale: { ranges: colorScale },
      },
    },

    legend: {
      labels: { colors: "#fff" },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="heatmap"
      height={300} // 👈 añade altura para que las celdas no se vean pequeñas
    />
  );
}

// import React from "react";
// import Chart from "react-apexcharts";

// export default function SalesHeatmap({ data, loading, error }) {
//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error}</p>;

//   if (!Array.isArray(data) || data.length === 0) {
//     return <div>No data available for chart.</div>;
//   }

//   const series = data.map((row) => ({
//     name: row.region,
//     data: row.values,
//   }));

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
//       categories: data[0].categories,
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
