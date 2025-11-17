# 📊 Dashboard de Visualización de Datos – Big Data (React + AWS)

Este proyecto es un dashboard web construido con React que permite visualizar información procesada mediante un flujo ETL en AWS Glue y almacenada en DynamoDB. El frontend consume una API REST desarrollada con AWS Lambda + API Gateway.

## 🚀 Características principales
El dashboard muestra cuatro gráficos solicitados:

1. Total de ventas por categoría
2. Promedio del margen de ganancia por categoría
3. Cantidad total vendida por región
4. Top 5 productos más vendidos por región (nueva transformación del ETL)

Cada gráfico obtiene sus datos directamente desde la API REST.

## 🧪 Resultados esperados
El dashboard muestra gráficos dinámicos y actualizados basados en las tablas de DynamoDB generadas por el proceso ETL. La información visual es clara, responsiva y adecuada para usuarios finales no técnicos.


## 📁 Estructura del proyecto
```
src/
  api/               → llamadas a la API
  components/        → componentes UI y gráficos
  hoojs/             → hooks personalizados del proyecto
  App.jsx
  main.jsx
```

## 🏗️ Arquitectura del proyecto
```
AWS Glue ETL → DynamoDB → Lambda → API Gateway → React Dashboard
```

## 📝 Licencia
Este proyecto es únicamente con fines educativos.