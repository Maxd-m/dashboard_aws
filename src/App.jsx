import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestApi from './testApi'
import BarChartComponent from './components/charts/BarChartComponent'
import StackedBarChart from './components/charts/StackedBarsChartComponent'
import PieChartComponent from './components/charts/PieChartComponent'
import SalesHeatmap from './components/charts/HeatMapComponent'
import Card from './components/ui/Card'
import DashboardModal from './components/ui/DashboardModal'
import { getSalesByCategory, getProfitMarginByCategory } from "./api/sales";
import useAPI from "./hooks/useAPI";
import { getChart } from './api/getChart'

import ChartTest from "./components/charts/ChartTest";

function App() {
  // const sales = useAPI(() => getChart("total_sales_by_category"));
  // const profit = useAPI(() => getChart("avg_profit_margin_by_category"));

  const mock = [
    { category: "Electronics", total_sales: 3502536.48 },
    { category: "Sports", total_sales: 223304.66 },
    { category: "Home Appliances", total_sales: 243407.78 },
    { category: "Furniture", total_sales: 827438.24 },
  ];

  const profit = [
    {
      category: "Electronics",
      avg_profit_margin: 0.250900647304309,
    },
    {
      category: "Sports",
      avg_profit_margin: 0.25101202888928703,
    },
    {
      category: "Home Appliances",
      avg_profit_margin: 0.2503428520717924,
    },
    {
      category: "Furniture",
      avg_profit_margin: 0.24989639134121402,
    },
  ];

  const series = [
    { name: "Metric1", data: [30, 40, 35, 50, 49, 60] },
    { name: "Metric2", data: [20, 30, 25, 40, 39, 50] },
  ];
  const options = {
    chart: { type: "heatmap" },
    dataLabels: { enabled: false },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
  };

  const heatmapData = [
    {
      region: "North",
      categories: ["Cat1", "Cat2", "Cat3", "Cat4"],
      values: [120, 80, 40, 8],
    },
    {
      region: "South",
      categories: ["Cat1", "Cat2", "Cat3", "Cat4"],
      values: [90, 60, 20, 30],
    },
    {
      region: "East",
      categories: ["Cat1", "Cat2", "Cat3", "Cat4"],
      values: [90, 60, 20, 17],
    },
    {
      region: "West",
      categories: ["Cat1", "Cat2", "Cat3", "Cat4"],
      values: [90, 60, 20, 100],
    },
  ];

  const dataCatReg = [
    {
      category: "EAST",
      total_quantity: 3809,
    },
    {
      category: "NORTH",
      total_quantity: 3637,
    },
    {
      category: "SOUTH",
      total_quantity: 3852,
    },
    {
      category: "WEST",
      total_quantity: 3823,
    },
  ];

  const dataStack = [
    {
      region: "SOUTH",
      products: [
        {
          product_name: "Desk Chair",
          total_quantity: 534,
          rank: 1,
        },
        {
          product_name: "Laptop",
          total_quantity: 513,
          rank: 2,
        },
        {
          product_name: "Headphones",
          total_quantity: 509,
          rank: 3,
        },
        {
          product_name: "Coffee Maker",
          total_quantity: 482,
          rank: 4,
        },
        {
          product_name: "Bookshelf",
          total_quantity: 477,
          rank: 5,
        },
      ],
    },
    {
      region: "NORTH",
      products: [
        {
          product_name: "Smartphone",
          total_quantity: 553,
          rank: 1,
        },
        {
          product_name: "Coffee Maker",
          total_quantity: 482,
          rank: 2,
        },
        {
          product_name: "Running Shoes",
          total_quantity: 467,
          rank: 3,
        },
        {
          product_name: "Headphones",
          total_quantity: 454,
          rank: 4,
        },
        {
          product_name: "Desk Chair",
          total_quantity: 444,
          rank: 5,
        },
      ],
    },
    {
      region: "EAST",
      products: [
        {
          product_name: "Laptop",
          total_quantity: 539,
          rank: 1,
        },
        {
          product_name: "Desk Chair",
          total_quantity: 501,
          rank: 2,
        },
        {
          product_name: "Bookshelf",
          total_quantity: 483,
          rank: 3,
        },
        {
          product_name: "Yoga Mat",
          total_quantity: 471,
          rank: 4,
        },
        {
          product_name: "Smartphone",
          total_quantity: 460,
          rank: 5,
        },
      ],
    },
    {
      region: "WEST",
      products: [
        {
          product_name: "Yoga Mat",
          total_quantity: 533,
          rank: 1,
        },
        {
          product_name: "Desk Chair",
          total_quantity: 521,
          rank: 2,
        },
        {
          product_name: "Smartphone",
          total_quantity: 512,
          rank: 3,
        },
        {
          product_name: "Running Shoes",
          total_quantity: 477,
          rank: 4,
        },
        {
          product_name: "Laptop",
          total_quantity: 462,
          rank: 5,
        },
      ],
    },
  ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    // <TestApi/>
    <>
      {/* <h1>Dashboard ventas</h1> */}
      <div className="dashboard-grid">
        <div style={{ gridArea: "title" }}>
          <h1 style={{ textAlign: "center", margin: 0 }}>Dashboard ventas</h1>
          <br />
          {/* <p>creditos</p> */}
          {/* <button className="card-button">Creditos</button> */}
          <DashboardModal open={isModalOpen} handleClose={closeModal} />

          {/* <div className="div-kpi">
            <Card title="Mejor categoria">
              <p>Electronics</p>
            </Card>
            <Card title="Mejor categoria">
              <p>Electronics</p>
            </Card>
            
          </div> */}
        </div>

        <div style={{ gridArea: "g1" }}>
          {/* <Card title="Gráfica 1">contenido gráfica 1</Card> */}
          <Card title="Ventas por categoria">
            <PieChartComponent
              data={mock}
              loading={false}
              error={false}
              xlabel={"Total sales"}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g2" }}>
          {/* <Card title="Gráfica 2">contenido gráfica 2</Card> */}
          <Card title="Ganancia promedio por categoria">
            <BarChartComponent
              data={profit}
              loading={false}
              error={false}
              xlabel={"Avg profit"}
              decimals={5}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g3" }}>
          {/* <Card title="Gráfica 3">contenido gráfica 3</Card> */}
          <Card title="Top 5 productos por región">
            <StackedBarChart data={dataStack} />
          </Card>
        </div>

        <div style={{ gridArea: "g4" }}>
          {/* <Card title="Gráfica 4">contenido gráfica 4</Card> */}
          <Card title="Cantidad total vendida por region">
            <BarChartComponent
              data={dataCatReg}
              loading={false}
              error={false}
              xlabel={"Total quantity"}
              decimals={2}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g5" }}>
          {/* <Card title="Gráfica 5">contenido gráfica 5</Card> */}
          <Card title="Ventas totales (categoria x región)">
            <br />
            <br />
            <SalesHeatmap data={heatmapData} />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App
