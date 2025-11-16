import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestApi from './testApi'
import BarChartComponent from './components/charts/BarChartComponent'
import PieChartComponent from './components/charts/PieChartComponent'
import { getSalesByCategory, getProfitMarginByCategory } from "./api/sales";
import useAPI from "./hooks/useAPI";
import { getChart } from './api/getChart'


function App() {
  // const sales = useAPI(() => getChart("total_sales_by_category"));
  // const profit = useAPI(() => getChart("avg_profit_margin_by_category"));

  return (
    // <TestApi/>
    <>
      <h1>Dashboard ventas</h1>
      <PieChartComponent/>
      {/* <BarChartComponent data={sales.data} loading={sales.loading} error={sales.error} xlabel={"Total sales"} decimals={2} /> */}
      {/* <BarChartComponent data={profit.data} loading={profit.loading} error={profit.error} xlabel={"Avg profit"} decimals={5}/> */}
      
    </>
  );
}

export default App
