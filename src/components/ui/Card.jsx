export default function Card({ title, children }) {
  return (
    <div
      style={{
        background: "rgba(10, 61, 98, 0.4)", // azul oscuro elegante
        padding: "15px",
        borderRadius: "12px",
        marginBottom: "25px",
        color: "rgba(207, 214, 218, 0.73)",
        boxShadow: "0 4px 10px rgba(65, 63, 63, 0.3)",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}
