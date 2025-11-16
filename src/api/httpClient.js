import axios from "axios";

const httpClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Puedes agregar interceptores opcionales
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default httpClient;
