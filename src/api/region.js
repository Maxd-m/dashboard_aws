import httpClient from "./httpCLient.js";

export const getQuantityByRegion = async () => {
  const body = {
    chart: "total_quantity_by_region",
  };
  const response = await httpClient.post("/sales_api", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const getTopProductsByRegion = async () => {
  const body = {
    chart: "top_5_products_by_region",
  };
  const response = await httpClient.post("/sales_api", body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

