import { BarChart } from "@mui/x-charts/BarChart";

export default function BarChartSimple({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data</div>;
  }

  // las categorías (eje Y en layout horizontal)
  const categories = data.map((item) => item.category);

  // detecta automáticamente la primera propiedad numérica
  const numericKey = Object.keys(data[0]).find(
    (key) => key !== "category" && typeof data[0][key] === "number"
  );

  const values = data.map((item) => item[numericKey]);

  return (
    <BarChart
      layout="horizontal"
      xAxis={[
        {
          scaleType: "band",
          data: categories,
        },
      ]}
      yAxis={[{}]}
      series={[
        {
          data: values,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
