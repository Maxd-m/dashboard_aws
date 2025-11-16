import httpClient from "./httpCLient";

export const getChart = async (chartType) => {
  const body = {
    chart: chartType,
  };
  const response = await httpClient.post("/sales_api", body, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  // console.log("API RESPONSE:", response.data);
  return response.data;
};


