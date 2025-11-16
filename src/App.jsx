import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestApi from './testApi'
import BarChartComponent from './components/charts/BarChartComponent'
import { getSalesByCategory, getProfitMarginByCategory } from "./api/sales";
import useSaleCat from "./hooks/useSaleCat";


function App() {
  const sales = useSaleCat();
  // const [count, setCount] = useState(0)
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const json = await getSalesByCategory();
  //       setData(json);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    // <TestApi/>
    <BarChartComponent data={sales.data}/>
  )
}

export default App
