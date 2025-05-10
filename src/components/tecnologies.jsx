export function TechnologiesSection() {
  const section = {
    backgroundColor: "#FFFF",
    padding: "80px 40px",
    textAlign: "center",
  };

  const subtitle = {
    fontSize: "20px",
    color: "#111827",
    marginBottom: "8px",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "40px",
  };

  const iconList = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
  };

  const iconItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const icon = {
    width: "80px",
    height: "80px",
    border: "2px solid #000",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  };

  const iconText = {
    fontWeight: "600",
    color: "#111827",
  };

  return (
    <section style={section}>
      <div style={subtitle}>Nossas Tecnologias</div>
      <h2 style={title}>Linguagens Utilizadas</h2>
      <div style={iconList}>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={iconItem}>
            <div style={icon}></div>
            <span style={iconText}>Cupcake</span>
          </div>
        ))}
      </div>
    </section>
  );
}
