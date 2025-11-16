import React, { useEffect } from "react";
import { getSalesByCategory, getProfitMarginByCategory } from "./api/sales";
import { getQuantityByRegion, getTopProductsByRegion } from "./api/region";

export default function TestApi() {
  useEffect(() => {
    const test = async () => {
      try {
        const sales = await getSalesByCategory();
        console.log("Sales by Category:", sales);

        const profit = await getProfitMarginByCategory();
        console.log("Profit Margin by Category:", profit);

        const reg1 = await getQuantityByRegion();
        console.log("reg1: ",reg1);

        const reg2 = await getTopProductsByRegion();
        console.log("reg2: ",reg2);
      } catch (error) {
        console.error("API ERROR:", error);
      }
    };

    test();
  }, []);

  return <h2>Probando API… revisa la consola</h2>;
}
