import httpClient from "./httpCLient";

export const getSalesByCategory = async () => {
  const body = {
    chart: "total_sales_by_category",
  };
  const response = await httpClient.post("/sales_api", body, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  // console.log("API RESPONSE:", response.data);
  return response.data;
};

export const getProfitMarginByCategory = async () => {
  const body = {
    chart: "avg_profit_margin_by_category",
  };
  const response = await httpClient.post("/sales_api", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

