export function Footer() {
  const footer = {
    backgroundColor: "#f9fafb",
    padding: "20px",
    textAlign: "center" as const,
    justifyContent: "center",
    fontFamily: "'Work Sans', sans-serif",
    color: "#6b7280",
    fontSize: "14px",
    borderTop: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    
  };

  const copyright = {
    marginTop: "8px",
  };

  return (
    <div style={footer}>
      <div style={copyright}>
        © {new Date().getFullYear()} Disaster X. Todos os direitos reservados.
      </div>
    </div>
  );
}
