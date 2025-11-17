import { useState, useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import TestApi from './testApi'
import BarChartComponent from './components/charts/BarChartComponent'
import StackedBarChart from './components/charts/StackedBarsChartComponent'
import PieChartComponent from './components/charts/PieChartComponent'
import SalesHeatmap from './components/charts/HeatMapComponent'
import Card from './components/ui/Card'
import DashboardModal from './components/ui/DashboardModal'
// import { getSalesByCategory, getProfitMarginByCategory } from "./api/sales";
import useAPI from "./hooks/useAPI";
import { getChart } from './api/getChart'

// import ChartTest from "./components/charts/ChartTest";

function App() {

  // usar callback para "memorizar" y evitar llamadas innecesarias a api
  const sales = useAPI(
    useCallback(() => getChart("total_sales_by_category"), [])
  );

  const profit = useAPI(
    useCallback(() => getChart("avg_profit_margin_by_category"), [])
  );

  const salesReg = useAPI(
    useCallback(() => getChart("total_quantity_by_region"), [])
  );

  const heatMp = useAPI(
    useCallback(() => getChart("quantity_by_region_with_categories"), [])
  );

  const stackGrap = useAPI(
    useCallback(() => getChart("top_5_products_by_region"), [])
  );


  // const sales = useAPI(() => getChart("total_sales_by_category"));
  // const profit = useAPI(() => getChart("avg_profit_margin_by_category"));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    // <TestApi/>
    <>
      {/* <h1>Dashboard ventas</h1> */}
      <h1 style={{ textAlign: "center", margin: 0 }}>Dashboard ventas</h1>

      <div className="dashboard-grid">
        <div style={{ gridArea: "title" }}>
          <br />
          <br />
          <DashboardModal open={isModalOpen} handleClose={closeModal} />
          <br />
          <h2 style={{ textAlign: "center", margin: 0 }}>KPI's</h2>

          {/* <p>creditos</p> */}
          {/* <button className="card-button">Creditos</button> */}

          <div className="div-kpi">
            <Card title="">
              <h3>mejor categoria</h3>
              <p>Electronics</p>
            </Card>
            <Card title="">
              <h3>mejor categoria</h3>
              <p>Electronics</p>
            </Card>
            <Card title="">
              <h3>mejor categoria</h3>
              <p>Electronics</p>
            </Card>
          </div>
        </div>

        <div style={{ gridArea: "g1" }}>
          {/* <Card title="Gráfica 1">contenido gráfica 1</Card> */}
          <Card title="Ventas por categoria">
            <PieChartComponent
              data={sales.data}
              loading={sales.loading}
              error={sales.error}
              xlabel={"Total sales"}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g2" }}>
          {/* <Card title="Gráfica 2">contenido gráfica 2</Card> */}
          <Card title="Ganancia promedio por categoria">
            <BarChartComponent
              data={profit.data}
              loading={profit.loading}
              error={profit.error}
              xlabel={"Avg profit"}
              decimals={5}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g3" }}>
          {/* <Card title="Gráfica 3">contenido gráfica 3</Card> */}
          <Card title="Top 5 productos por región">
            <StackedBarChart
              data={stackGrap.data}
              loading={stackGrap.loading}
              error={stackGrap.error}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g4" }}>
          {/* <Card title="Gráfica 4">contenido gráfica 4</Card> */}
          <Card title="Cantidad total vendida por region">
            <BarChartComponent
              data={salesReg.data}
              loading={salesReg.loading}
              error={salesReg.error}
              xlabel={"Total quantity"}
              decimals={2}
            />
          </Card>
        </div>

        <div style={{ gridArea: "g5" }}>
          {/* <Card title="Gráfica 5">contenido gráfica 5</Card> */}
          <Card title="Ventas totales (categoria x región)">
            <SalesHeatmap
              data={heatMp.data}
              loading={heatMp.loading}
              error={heatMp.error}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default App
