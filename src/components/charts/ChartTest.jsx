import { BarChart } from "@mui/x-charts/BarChart";

export default function ChartTest() {
  const categories = ["A", "B", "C"];
  const values = [10, 20, 30];

  return (
    <BarChart
    //   layout="horizontal"
      xAxis={[
        {
          scaleType: "band",
          data: categories,
        },
      ]}
      series={[
        {
          data: values,
        },
      ]}
      width={400}
      height={300}
    />
  );
}
